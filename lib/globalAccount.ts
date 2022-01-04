import { QbitManage } from './dto';
import { delRequest, getRequest, postRequest } from './utils/request';

export class GlobalAccount {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  /**
   * 创建持有人
   */
  public async createHolder(params: QbitManage.Global.ICreateHolderInput, token: string): Promise<QbitManage.Global.ICreateHolderOutput> {
    const url = `${this.baseUrl}/open-api/v1/accounts/holder`;
    return await postRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'multipart/form-data',
    });
  }
  /**
   * 删除持有人
   */
  public async deleteHolder(params: QbitManage.Global.IDeleteHolderInput, token: string): Promise<QbitManage.Global.IDeleteHolderOutput> {
    const url = `${this.baseUrl}/open-api/v1/accounts/delete`;
    return await delRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 持有人是否开户
   */
  public async isCreateCustomer(params: QbitManage.Global.IIsCreateCustomerInput, token: string): Promise<QbitManage.Global.IIsCreateCustomerOutput> {
    const url = `${this.baseUrl}/open-api/v1/global/customer`;
    return await getRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 获取持有人列表
   */
  public async holders(params: QbitManage.Global.IHoldersInput, token: string): Promise<QbitManage.Global.IIHoldersOutput> {
    const url = `${this.baseUrl}/open-api/v1/accounts/holders`;
    return await getRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * CDD
   * 提交cdd
   */
  public async createCdd(params: QbitManage.Global.ICreateCddInput, token: string): Promise<QbitManage.Global.ICreateCddOutput> {
    const url = `${this.baseUrl}/open-api/v1/accounts/cdd`;
    return await postRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'multipart/form-data',
    });
  }
  /**
   * 创建全球账户
   */
  public async createSubAccounts(
    params: QbitManage.Global.ICreateSubAccountsInput,
    token: string,
  ): Promise<QbitManage.Global.ICreateSubAccountsOutput> {
    const url = `${this.baseUrl}/open-api/v1/global/createSubAccounts`;
    return await postRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 获取全球账户列表
   */
  public async subAccounts(params: QbitManage.Global.ISubAccountsInput, token: string): Promise<QbitManage.Global.ISubAccountsOutput> {
    const url = `${this.baseUrl}/open-api/v1/global/subAccounts`;
    return await getRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 获取银行账户列表
   */
  public async fundingAccounts(params: QbitManage.Global.IFundingAccountsInput, token: string): Promise<QbitManage.Global.IFundingAccountsOutput> {
    const url = `${this.baseUrl}/open-api/v1/global/fundingAccounts`;
    return await getRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 创建受益人
   */
  public async createBeneficiary(
    params: QbitManage.Global.ICreateBeneficiaryInput,
    token: string,
  ): Promise<QbitManage.Global.ICreateBeneficiaryOutput> {
    const url = `${this.baseUrl}/open-api/v1/global/beneficiary`;
    return await postRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 获取受益人列表
   */
  public async beneficiaries(params: QbitManage.Global.IBeneficiariesInput, token: string): Promise<QbitManage.Global.IBeneficiariesOutput> {
    const url = `${this.baseUrl}/open-api/v1/global/beneficiaries`;
    return await getRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 创建付款订单
   */
  public async createPayment(params: QbitManage.Global.ICreatePaymentInput, token: string): Promise<QbitManage.Global.ICreatePaymentOutput> {
    const url = `${this.baseUrl}/open-api/v1/global/payment`;
    return await postRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 创建批量付款订单
   */
  public async batchCreatePayment(
    params: QbitManage.Global.IBatchCreatePaymentInput,
    token: string,
  ): Promise<QbitManage.Global.IBatchCreatePaymentOutput> {
    const url = `${this.baseUrl}/open-api/v1/global/payment/batch`;
    return await postRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 获取付款订单手续费
   */
  public async fee(params: QbitManage.Global.IFeeInput, token: string): Promise<QbitManage.Global.IFeeOutput> {
    const url = `${this.baseUrl}/open-api/v1/global/payment/batch/fee`;
    return await postRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
  /**
   * 获取交易列表
   */
  public async transactions(params: QbitManage.Global.ITransactionsInput, token: string): Promise<QbitManage.Global.ITransactionsOutput> {
    const url = `${this.baseUrl}/open-api/v1/global/transactions`;
    return await getRequest(url, params, {
      'x-qbit-access-token': token,
      'Content-Type': 'application/json',
    });
  }
}
