import { Account } from './lib/account';
import { Balance } from './lib/balance';
import { Card } from './lib/card';
import { QbitManage, QbitModel } from './lib/dto';
import { GlobalAccount } from './lib/globalAccount';
import { User } from './lib/user';
import { getRequest, postRequest } from './lib/utils/request';
import { WebHook } from './lib/webHook';
import * as crypto from 'crypto';

class Qbit {
  private clientId: string;
  private clientSecret: string;
  private baseUrl = 'https://api-global.qbitnetwork.com';

  /** 其他模块接口 */
  private static accountInstance: Account;
  private static userInstance: User;
  private static balanceInstance: Balance;
  private static cardInstance: Card;
  private static globalAccountInstance: GlobalAccount;
  public static webHookInstance: WebHook;

  constructor(clientId: string, clientSecret: string, baseUrl?: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    if (baseUrl) this.baseUrl = baseUrl;
  }

  /**
   * 获取code
   */
  private async getCode(state?: string, redirectUri?: string): Promise<QbitManage.IGetCodeOutput> {
    const url = `${this.baseUrl}/open-api/oauth/authorize`;
    return await getRequest(url, {
      clientId: this.clientId,
      state,
      redirectUri,
    });
  }
  /**
   * 获取access token
   */
  public async getAccessToken(state?: string, redirectUri?: string): Promise<QbitManage.IGetAccessTokenOutput> {
    const url = `${this.baseUrl}/open-api/oauth/access-token`;
    const codeInfo = await this.getCode(state, redirectUri);
    console.log(codeInfo);
    return await postRequest(url, {
      clientId: this.clientId,
      clientSecret: this.clientSecret,
      code: codeInfo?.code,
    });
  }
  /**
   * 刷新access token
   */
  public async refreshAccessToken(refreshToken: string): Promise<QbitManage.IRefreshAccessTokenOutput> {
    const url = `${this.baseUrl}/open-api/oauth/refresh-token`;
    return await postRequest(url, {
      clientId: this.clientId,
      refreshToken,
    });
  }
  /**
   * 验证签名
   */
  public verificationSign(params: QbitModel.WebHookManage.NotificationModel): boolean {
    const sign = params.sign;
    const data = params.data;
    const querystring = Object.keys(data)
      .sort()
      .map(function(key) {
        if (data[key] == null) {
          data[key] = '';
        }
        return key + '=' + data[key];
      })
      .join('&');
    const hmac = crypto.createHmac('sha256', this.clientSecret);
    const newSign = hmac.update(querystring).digest('hex');
    return newSign === sign;
  }

  //#region ----------------------其他模块接口-------------------------------
  /**
   * 获取Account 模块接口
   */
  public get account() {
    if (Qbit.accountInstance) return Qbit.accountInstance;
    Qbit.accountInstance = new Account(this.baseUrl);
    return Qbit.accountInstance;
  }
  /**
   * 获取User 模块接口
   */
  public get user() {
    if (Qbit.userInstance) return Qbit.userInstance;
    Qbit.userInstance = new User(this.baseUrl);
    return Qbit.userInstance;
  }
  /**
   * 获取Balance 模块接口
   */
  public get balance() {
    if (Qbit.balanceInstance) return Qbit.balanceInstance;
    Qbit.balanceInstance = new Balance(this.baseUrl);
    return Qbit.balanceInstance;
  }
  /**
   * 获取card 模块接口
   */
  public get card() {
    if (Qbit.cardInstance) return Qbit.cardInstance;
    Qbit.cardInstance = new Card(this.baseUrl);
    return Qbit.cardInstance;
  }
  /**
   * 获取globalAccount 模块接口
   */
  public get globalAccount() {
    if (Qbit.globalAccountInstance) return Qbit.globalAccountInstance;
    Qbit.globalAccountInstance = new GlobalAccount(this.baseUrl);
    return Qbit.globalAccountInstance;
  }
  /**
   * 获取globalAccount 模块接口
   */
  public get webHook() {
    if (Qbit.webHookInstance) return Qbit.webHookInstance;
    Qbit.webHookInstance = new WebHook(this.baseUrl);
    return Qbit.webHookInstance;
  }
  //#endregion
}

export = Qbit;
