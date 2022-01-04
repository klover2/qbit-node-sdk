import { QbitManage } from './dto';
import { getRequest } from './utils/request';

export class User {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  /**
   * 获取User列表
   */
  public async users(params: QbitManage.User.IUsersInput, token: string): Promise<QbitManage.User.IUsersOutput> {
    const url = `${this.baseUrl}/open-api/v1/users`;
    return await getRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
}
