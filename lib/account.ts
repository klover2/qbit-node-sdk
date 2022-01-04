import { QbitManage } from './dto';
import { getRequest, postRequest } from './utils/request';

export class Account {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  /**
   * 注册 Qbit 账户
   */
  public async register(params: QbitManage.Account.IRegisterInput, token: string): Promise<QbitManage.Account.IRegisterOutput> {
    const url = `${this.baseUrl}/open-api/v1/accounts/register`;
    return await postRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 获取Account列表
   */
  public async accounts(params: QbitManage.Account.IAccountsInput, token: string): Promise<QbitManage.Account.IAccountsOutput> {
    const url = `${this.baseUrl}/open-api/v1/accounts`;
    return await getRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
}
