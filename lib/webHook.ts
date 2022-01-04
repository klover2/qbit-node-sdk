import { QbitManage } from './dto';
import { getRequest } from './utils/request';

export class WebHook {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  /**
   * 获取通知列表
   */
  public async notifications(params: QbitManage.WebHook.INotificationsInput, token: string): Promise<QbitManage.WebHook.INotificationsOutput> {
    const url = `${this.baseUrl}/open-api/v1/notifications`;
    return await getRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
}
