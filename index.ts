import { Account } from './lib/account';
import { Balance } from './lib/balance';
import { QbitManage } from './lib/dto';
import { User } from './lib/user';
import { getRequest, postRequest } from './lib/utils/request';

class Qbit {
  private clientId: string;
  private clientSecret: string;
  private baseUrl = 'https://api-global.qbitnetwork.com';

  /** 其他模块接口 */
  private static accountInstance: Account;
  private static userInstance: User;
  private static balanceInstance: Balance;

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
    return await postRequest(url, {
      clientId: this.clientId,
      clientSecret: this.clientSecret,
      code: codeInfo?.data?.code,
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
}

export = Qbit;
