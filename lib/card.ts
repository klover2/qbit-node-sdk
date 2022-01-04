import { QbitManage } from './dto';
import { postRequest } from './utils/request';

export class Card {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * 创建量子卡
   */
  public async createCards(params: QbitManage.Card.ICreateCardsInput, token: string): Promise<QbitManage.Card.ICreateCardsOutput> {
    const url = `${this.baseUrl}/open-api/v1/cards`;
    return await postRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
}
