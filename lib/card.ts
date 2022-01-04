import { QbitManage } from './dto';
import { delRequest, getRequest, postRequest, putRequest } from './utils/request';

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
  /**
   * 转入
   */
  public async transferIn(params: QbitManage.Card.ITransferInInput, token: string): Promise<QbitManage.Card.ITransferInOutput> {
    const url = `${this.baseUrl}/open-api/v1/cards/transfer/in`;
    return await postRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 转出
   */
  public async transferOut(params: QbitManage.Card.ITransferOutInput, token: string): Promise<QbitManage.Card.ITransferOutOutput> {
    const url = `${this.baseUrl}/open-api/v1/cards/transfer/out`;
    return await postRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 冻结卡
   */
  public async suspendCard(params: QbitManage.Card.ISuspendCardInput, token: string): Promise<QbitManage.Card.ISuspendCardOutput> {
    const url = `${this.baseUrl}/open-api/v1/cards/suspend`;
    return await putRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 解冻卡
   */
  public async enableCard(params: QbitManage.Card.IEnableCardInput, token: string): Promise<QbitManage.Card.IEnableCardOutput> {
    const url = `${this.baseUrl}/open-api/v1/cards/enable`;
    return await putRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 删除卡
   */
  public async deleteCard(params: QbitManage.Card.IDeleteCardInput, token: string): Promise<QbitManage.Card.IDeleteCardOutput> {
    const url = `${this.baseUrl}/open-api/v1/cards`;
    return await delRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 冻结金额
   */
  public async frozenAmount(params: QbitManage.Card.IFrozenAmountInput, token: string): Promise<QbitManage.Card.IFrozenAmountOutput> {
    const url = `${this.baseUrl}/open-api/v1/cards/frozen`;
    return await postRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 解冻金额
   */
  public async unfrozenAmount(params: QbitManage.Card.IUnfrozenAmountInput, token: string): Promise<QbitManage.Card.IUnfrozenAmountOutput> {
    const url = `${this.baseUrl}/open-api/v1/cards/unfrozen`;
    return await postRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 获取卡列表
   */
  public async cards(params: QbitManage.Card.ICardsInput, token: string): Promise<QbitManage.Card.ICardsOutput> {
    const url = `${this.baseUrl}/open-api/v1/cards`;
    return await getRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 获取量子卡私密信息
   */
  public async cardInfo(params: QbitManage.Card.ICardInfoInput, token: string): Promise<QbitManage.Card.ICardInfoOutput> {
    const url = `${this.baseUrl}/open-api/v1/cards/info`;
    return await getRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 获取量子卡交易列表
   */
  public async transactions(params: QbitManage.Card.ITransactionsInput, token: string): Promise<QbitManage.Card.ITransactionsOutput> {
    const url = `${this.baseUrl}/open-api/v1/cards/transactions`;
    return await getRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 提现
   * 创建收款人
   */
  public async createReceiver(params: QbitManage.Card.IReceiverInput, token: string): Promise<QbitManage.Card.IReceiverOutput> {
    const url = `${this.baseUrl}/open-api/v1/cards/receiver`;
    return await postRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 提现
   * 获取收款人列表
   */
  public async receivers(params: QbitManage.Card.IReceiversInput, token: string): Promise<QbitManage.Card.IReceiversOutput> {
    const url = `${this.baseUrl}/open-api/v1/cards/receiver`;
    return await getRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 提现
   * 创建提现订单
   */
  public async createWithdraw(params: QbitManage.Card.ICreateWithdrawInput, token: string): Promise<QbitManage.Card.ICreateWithdrawOutput> {
    const url = `${this.baseUrl}/open-api/v1/cards/withdraw`;
    return await postRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
}
