import { QbitManage } from './dto';
import { getRequest } from './utils/request';

export class Balance {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  /**
   * 获取Balance列表
   */
  public async balances(params: QbitManage.Balance.IBalancesInput, token: string): Promise<QbitManage.Balance.IBalancesOutput> {
    const url = `${this.baseUrl}/open-api/v1/balances`;
    return await getRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
}
