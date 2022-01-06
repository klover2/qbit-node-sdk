import { Readable } from 'stream';

/**
 * status http 返回code 码
 * data 返回实体数据
 */
export namespace QbitManage {
  /** 统一返回 */
  export interface IOutput {
    httpStatus: number;
    code?: number;
    message?: string;
    data?: any;
  }
  /** 获取code */
  export interface IGetCodeOutput {
    httpStatus: number;
    timestamp: number;
    state?: string;
    code: string;
  }
  /** 获取access token */
  export interface IGetAccessTokenOutput {
    httpStatus: number;
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    timestamp: number;
  }
  /** 刷新access token  */
  export interface IRefreshAccessTokenOutput extends IOutput {
    data: {
      accessToken: string;
      expiresIn: number;
      timestamp: number;
    };
  }
  export namespace Account {
    export interface IRegisterInput {
      phone: string; //	手机号码（需要带国际区号，例如+8616612345678）
      email: string; //	邮箱
      name: string; //	企业名
      legalPerson: string; //	法人名称
    }
    export interface IRegisterOutput extends IOutput {
      data: {
        accountId: string; //	账户id
        userId: string; //	user id
        domain: string; //	domain
      };
    }
    export interface IAccountsInput {
      id?: string; //	客户Id，如果不传默认是所有Client下的account
      limit?: number; //	默认 10 条
      page?: number; //	默认 0
    }
    export interface IAccountsOutput extends IOutput {
      data: {
        data: QbitModel.AccountModel[];
        pageTotal: number;
        total: number;
      };
    }
  }
  export namespace User {
    export interface IUsersInput {
      id?: string; //	id
      limit?: number; //	默认 10 条
      page?: number; //	默认 0
      accountId: string; //	客户 Id
    }
    export interface IUsersOutput extends IOutput {
      data: {
        data: QbitModel.UserModel[];
        pageTotal: number;
        total: number;
      };
    }
  }
  export namespace Balance {
    export interface IBalancesInput {
      id?: string; //	id,查询多条以逗号隔开
      limit?: number; //	默认 10 条
      page?: number; //	默认 0
      accountId: string; //	客户 Id（默认将查询账户和子账户数据,如果查询持有人的Balance，则传参是持有人的ID）
      walletType?: string; //	余额类型
      subAccount?: string; //	子账户id
    }
    export interface IBalancesOutput extends IOutput {
      data: {
        data: QbitModel.BalanceModel[];
        pageTotal: number;
        total: number;
      };
    }
  }
  export interface IFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    stream: Readable;
    destination: string;
    filename: string;
    path: string;
    buffer: Buffer;
  }
  export namespace Card {
    export interface ICreateCardsInput {
      batchCount: number; //	开卡数量
      cost?: number; //	开卡的金额
      provider?: EnumManage.QbitCard.ProviderEnum; //	卡段
      cardAddress?: QbitModel.AddressModel; //	卡地址
      firstName: string; //	持卡人名
      lastName: string; //	持卡人姓
      label?: string; //	标签
      useType?: string; //	使用类别
      email?: string; //	持卡人邮箱
    }
    export interface ICreateCardsOutput extends IOutput {
      data: boolean;
    }
    export interface ITransferInInput {
      accountId?: string; //	客户 Id
      cardId: string; //	卡id
      clientTransactionId: string; //		client交易ID(方便关联订单)
      cost: number; //		转入金额
    }
    export interface ITransferInOutput extends IOutput {
      data: boolean;
    }
    export interface ITransferOutInput {
      accountId?: string; //	客户 Id
      cardId: string; //	卡id
      clientTransactionId: string; //		client交易ID(方便关联订单)
      cost: number; //		转出金额
    }
    export interface ITransferOutOutput extends IOutput {
      data: boolean;
    }
    export interface ISuspendCardInput {
      accountId?: string;
      cardId: string;
    }
    export interface ISuspendCardOutput extends IOutput {
      data: boolean;
    }
    export interface IEnableCardInput {
      accountId?: string;
      cardId: string;
    }
    export interface IEnableCardOutput extends IOutput {
      data: boolean;
    }
    export interface IDeleteCardInput {
      accountId?: string;
      cardId: string;
    }
    export interface IDeleteCardOutput extends IOutput {
      data: boolean;
    }
    export interface IFrozenAmountInput {
      accountId?: string; //	客户 Id
      cardId: string; //	卡id
      clientTransactionId: string; //		client交易ID(方便关联订单)
      cost: number; //		金额
    }
    export interface IFrozenAmountOutput extends IOutput {
      data: boolean;
    }
    export interface IUnfrozenAmountInput {
      accountId?: string; //	客户 Id
      cardId: string; //	卡id
      clientTransactionId: string; //		client交易ID(方便关联订单)
      cost: number; //		金额
    }
    export interface IUnfrozenAmountOutput extends IOutput {
      data: boolean;
    }
    export interface ICardsInput {
      id?: string; //	id
      limit?: number; //	默认 10 条
      page?: number; //	默认 0
      accountId?: string; // 客户 Id
    }
    export interface ICardsOutput extends IOutput {
      data: {
        data: QbitModel.QbitCardManage.CardModel[];
        pageTotal: number;
        total: number;
      };
    }
    export interface ICardInfoInput {
      accountId?: string;
      cardId: string;
    }
    export interface ICardInfoOutput extends IOutput {
      data: {
        qbitCardNo: string;
        cvv: string;
        expYear: string;
        expMonth: string;
      };
    }
    export interface ITransactionsInput {
      accountId?: string; //	客户ID
      cardId?: string; //	卡ID
      page?: number; //	页
      limit?: number; //	条数
      type?: string; //	交易类型
      startTime?: Date; //	交易开始时间
      endTime?: Date; //	交易结束时间
      status?: string; //	交易状态
    }
    export interface ITransactionsOutput extends IOutput {
      data: {
        data: QbitModel.QbitCardManage.CardTransactionModel[];
        pageTotal: number;
        total: number;
      };
    }
    export interface IReceiverInput {
      accountId: string; //	客户 Id
      firstName?: string; //	名
      lastName: string; //	姓 、企业全名
      currency: EnumManage.currencyEnum; //	币种(参考枚举)
      accountNumber?: string; //	收款方银行账户
      relationship: EnumManage.GlobalAccount.RelationshipEnum; //	与此账户关系
      receiverAddress?: QbitModel.AddressModel; //	收款为个人时，为个人地址, 收款为公司时，为收款公司地址(通用地址)
      bankAddress?: QbitModel.AddressModel; //	银行地址(通用地址)
      bankName?: string; //	银行名称
      type?: EnumManage.GlobalAccount.AccountTypeEnum; //	账户类型（对公、对私）(CNY)
      bankBranchName?: string; //	银行支行名称(CNY)
      individualNo?: string; //	个人证件号(CNY)
      businessNo?: string; //	企业证件号（企业统一社会信用代码）(CNY)
      bic: string; //	bic_swift
      iban?: string; //	iban(EUR)
      routingType?: EnumManage.GlobalAccount.RoutingTypeEnum; //	汇款线路
      routingNumber?: string; //	汇款线路号码
    }
    export interface IReceiverOutput extends IOutput {
      data: QbitModel.QbitCardManage.CardReceiverModel;
    }
    export interface IReceiversInput {
      id?: string; //	id
      limit?: number; //	默认 10 条
      page?: number; //	默认 0
      currency?: string; //	币种
      accountId: string; //	客户 Id
    }
    export interface IReceiversOutput extends IOutput {
      data: {
        data: QbitModel.QbitCardManage.CardReceiverModel[];
        pageTotal: number;
        total: number;
      };
    }
    export interface ICreateWithdrawInput {
      accountId: string; //	客户 Id
      cardId: string; //	卡Id
      amount: number; //	提现金额
      clientTransactionId: string; //	系统编号(幂等性）
      receiverId: string; //	卡收款人ID
    }
    export interface ICreateWithdrawOutput extends IOutput {
      data: true;
    }
  }
  export namespace Global {
    export interface ICreateHolderInput {
      accountId: string; //	客户 Id
      businessName: string; //	企业名称
      registrationRegion: string; //	企业注册地(CN - 中国大陆, HK - 中国香港)
      businessCertificate: IFile; //	公司营业执照附件/公司注册证书影印件
      businessId?: string; //	统一社会信用代码/公司注册编号
      businessRegistrationDate?: string; //	注册日期
      businessOperationPeriod?: string; //	营业期限
      businessRegistrationAddress?: string; //	注册地址
      businessPersons: QbitModel.GlobalAccountManage.BusinessPersonModel[]; //	企业成员信息
    }
    export interface ICreateHolderOutput extends IOutput {
      data: QbitModel.GlobalAccountManage.GlobalHolderModel;
    }
    export interface IDeleteHolderInput {
      accountId: string; //	客户 Id
      holderId: string; //	持有人 Id
    }
    export interface IDeleteHolderOutput extends IOutput {
      data: true;
    }
    export interface IIsCreateCustomerInput {
      accountId: string; //	客户 Id
      holderId: string; //	持有人 Id
    }
    export interface IIsCreateCustomerOutput extends IOutput {
      data: true;
    }
    export interface IHoldersInput {
      accountId: string; //	客户 Id
      id?: string; //	id
      limit?: number; //	默认 10 条
      page?: number; //	默认 0
    }
    export interface IIHoldersOutput extends IOutput {
      data: {
        data: QbitModel.GlobalAccountManage.GlobalHolderModel[];
        pageTotal: number;
        total: number;
      };
    }
    export interface ICreateCddInput {
      accountId: string; //	客户Id
      registrationRegion: string; //	企业注册地(CN - 中国大陆, HK - 中国香港)
      businessCertificate: IFile; //	公司营业执照附件/公司注册证书影印件
      businessNnc1?: IFile; //	NNC1/最新NAR1(注册地为HK时必填)
      businessName?: string; //	企业名称
      businessId?: string; //	统一社会信用代码/公司注册编号
      businessRegistrationDate?: string; //	注册日期
      businessOperationPeriod?: string; //	营业期限
      businessRegistrationAddress?: string; //	注册地址
      businessPersons: QbitModel.GlobalAccountManage.BusinessPersonModel[]; //	企业成员信息
    }
    export interface ICreateCddOutput extends IOutput {
      data: true;
    }
    export interface ICreateSubAccountsInput {
      accountId: string; //	客户 Id
      holderId: string; //	持有人 Id
      currency: string; //	币种
      purpose: string; //	用途
      nickname?: string; //	账户昵称
    }
    export interface ICreateSubAccountsOutput extends IOutput {
      data: QbitModel.GlobalAccountManage.GlobalSubAccountModel;
    }
    export interface ISubAccountsInput {
      id?: string; //	id
      limit?: number; //	默认 10 条
      page?: number; //	默认 0
      currency?: string; //	币种
      accountId: string; //	客户 Id
      holderId: string; //	持有人 Id
    }
    export interface ISubAccountsOutput extends IOutput {
      data: {
        data: QbitModel.GlobalAccountManage.GlobalSubAccountModel[];
        pageTotal: number;
        total: number;
      };
    }
    export interface IFundingAccountsInput {
      id: string; //	id
      limit: number; //	默认 10 条
      page: number; //	默认 0
      currency: string; //	币种
      accountId: string; //	客户 Id
      holderId: string; //	持有人 Id
      globalSubAccountId: string; //	全球账户 Id
    }
    export interface IFundingAccountsOutput extends IOutput {
      data: {
        data: QbitModel.GlobalAccountManage.FundingAccountsModel[];
        pageTotal: number;
        total: number;
      };
    }
    export interface ICreateBeneficiaryInput {
      accountId: string; //	客户 Id
      holderId: string; //	持有人 Id
      firstName?: string; //	名
      lastName: string; //	姓 、企业全名
      currency: EnumManage.currencyEnum; //	币种(参考枚举)
      accountNumber?: string; //	收款方银行账户
      relationship: EnumManage.GlobalAccount.RelationshipEnum; //	与此账户关系
      receiverAddress?: QbitModel.AddressModel; //	收款为个人时，为个人地址, 收款为公司时，为收款公司地址(通用地址)
      bankAddress?: QbitModel.AddressModel; //	银行地址(通用地址)
      bankName?: string; //	银行名称
      type?: EnumManage.GlobalAccount.AccountTypeEnum; //	账户类型（对公、对私）(CNY)
      bankBranchName?: string; //	银行支行名称(CNY)
      individualNo?: string; //	个人证件号(CNY)
      businessNo?: string; //	企业证件号（企业统一社会信用代码）(CNY)
      bic: string; //	bic_swift
      iban?: string; //	iban(EUR)
      routingType?: EnumManage.GlobalAccount.RoutingTypeEnum; //	汇款线路
      routingNumber?: string; //	汇款线路号码
    }
    export interface ICreateBeneficiaryOutput extends IOutput {
      data: QbitModel.GlobalAccountManage.BeneficiaryModel;
    }
    export interface IBeneficiariesInput {
      id?: string; //	id
      limit?: number; //	默认 10 条
      page?: number; //	默认 0
      currency?: string; //	币种
      accountId: string; //	客户 Id
      holderId: string; //	持有人 Id
    }
    export interface IBeneficiariesOutput extends IOutput {
      data: {
        data: QbitModel.GlobalAccountManage.BeneficiaryModel[];
        pageTotal: number;
        total: number;
      };
    }
    export interface ICreatePaymentInput {
      accountId: string; //	客户 Id
      holderId: string; //	持有人 Id
      balanceId: string; //	出款Bankaccount的余额id
      receiverId: string; //	收款人ID
      amount: number; //	付款金额金额
      clientTransactionId: string; //	Client交易id(方便关联订单)
      reference: string; //	付款备注
      appendFee: number; //	调用方追加的手续费
    }
    export interface ICreatePaymentOutput extends IOutput {
      data: boolean;
    }
    export interface IBatchCreatePaymentInput {
      accountId: string; //	客户 Id
      batchNo: string; //	批量号(方便关联订单)
      paymentList: ICreatePaymentInput[]; //	批量付款的列表
    }
    export interface IBatchCreatePaymentOutput extends IOutput {
      data: boolean;
    }
    export interface IFeeInput {
      accountId: string; //	客户 Id
      paymentList: ICreatePaymentInput[]; //	批量付款的列表
    }
    export interface IFeeOutput extends IOutput {
      data: QbitModel.GlobalAccountManage.TransactionFeeModel[];
    }
    export interface ITransactionsInput {
      id?: string; //	id
      limit?: number; //	默认 10 条
      page?: number; //	默认 0
      currency?: string; //	币种
      clientTransactionId?: string; //	client交易id
      accountId: string; //	客户 Id
      holderId: string; //	持有人 Id
    }
    export interface ITransactionsOutput extends IOutput {
      data: {
        data: QbitModel.GlobalAccountManage.GlobalAccountTransactionModel[];
        pageTotal: number;
        total: number;
      };
    }
  }
  export namespace WebHook {
    export interface INotificationsInput {
      id?: string; //	id
      limit?: number; //	默认 10 条
      page?: number; //	默认 0
      accountId: string; //	客户 Id
    }
    export interface INotificationsOutput extends IOutput {
      data: {
        data: QbitModel.WebHookManage.NotificationModel[];
        pageTotal: number;
        total: number;
      };
    }
  }
}

/**
 * 模型
 */
export namespace QbitModel {
  /**
   * Account 模型
   * Account储存客户账户的基础信息，如KYC的状态等。
   * 它//代表客户账户的最基础model，跟大多数其他models的关联关系都通过Account Id来实现。
   */
  export interface AccountModel {
    /** 账户 id */
    id: string;
    /** 创建时间 */
    createTime: Date;
    /** 账户类型 */
    type: EnumManage.Account.TypeEnum;
    /** 状态 */
    status: EnumManage.Account.StatusEnum;
    /** 企业名 */
    name: string;
    /** 分配的唯一数字ID */
    displayId: string;
    /** kyc 状态 */
    kycStatus: EnumManage.Cdd.KyStatusEnum;
    /** 量子卡业务kyb状态 */
    qbitCardKybStatus: EnumManage.Cdd.KyStatusEnum;
    /** 全球账户业务kyb状态 */
    globalAccountKybStatus: EnumManage.Cdd.KyStatusEnum;
  }
  /**
   * User 模型
   * 每一个账户下可以有一个或者多个登录用户User，且设置相应的系统操作权限。在创建Account后，会自动创建第一个User，默认为管理员的权限。
   * 账户的登录信息存储在Usermodel中。
   */
  export interface UserModel {
    id: string; //账户 id
    createTime: Date; //创建时间
    status: EnumManage.User.StatusEnum; //状态
    phone: string; //phone
    email: string; //email
    name: string; //操作员名称
  }
  /**
   * Address 模型
   * 通用地址格式
   */
  export interface AddressModel {
    addressLine1: string; //详细地址1
    addressLine2: string; //详细地址2
    city: string; //城市
    state: string; //街道
    country: string; //国家
    postalCode: string; //邮政编码
  }
  /**
   * Balance 模型
   * Balance 是所有账户在 Qbit 系统内金额，多种业务、多种币种会有不同的钱包
   */
  export interface BalanceModel {
    id: string; //		钱包 id
    accountId: string; //		客户 Id
    createTime: Date; //		创建时间
    available: number; //		可用余额
    pending: number; //		处理中余额
    frozen: number; //		冻结的余额
    currency: string; //		币种
    walletType: EnumManage.Balance.WalletTypeEnum; //	余额类型
  }
  /** 量子卡 */
  export namespace QbitCardManage {
    /**
     * Card 模型
     * 量子卡信息
     */
    export interface CardModel {
      id: string; //		id
      accountId: string; //		客户 Id
      createTime: Date; // 创建时间
      userName: string; //		卡的用户名称
      currency: string; //		币种
      provider: EnumManage.QbitCard.ProviderEnum; //		卡头
      status: EnumManage.QbitCard.CardStatusEnum; //	卡状态
      qbitCardNoLastFour: string; //		卡号后 4 位
      token: string; //		卡的唯一三方识别 id
      label: string; //		标签
      cardAddress: AddressModel; // 卡地址
      balanceId: string; //		钱包余额
    }
    /**
     * CardReceiver 模型
     * 量子卡收款人信息
     */
    export interface CardReceiverModel {
      id: string; //		收款方 id
      status: EnumManage.GlobalAccount.ReceiverEnum; //	状态
      currency: EnumManage.currencyEnum; //	值过多，详情请看currency可能的值	币种
      accountType: EnumManage.GlobalAccount.AccountTypeEnum; //	Business/Individual	账户类型(企业或者个人)
      userName: string; //		收款方名称
      accountNumber: string; //		收款方银行账户
      receiverAddress: AddressModel; // 收款是个人地址、公司地址
      bankName: string; //		银行名称
      bankAddress: AddressModel; // 银行地址
      bankBranchName: string; //		银行支行名称
      certificateNo: string; //		个人证件号、企业统一社会信用代码
      routingType: EnumManage.GlobalAccount.RoutingTypeEnum;
      routingNumber: string; //		Routing number
      bic: string; //		bic_swift
      iban: string; //		iban
    }
    /**
     * CardTransaction 模型
     * 量子卡交易信息
     */
    export interface CardTransactionModel {
      id: string; //		交易ID
      accountId: string; //		账户ID
      cardId: string; //		量子卡ID
      currency: string; //		币种
      amount: number; //	交易金额
      fee: number; //		手续费
      clientTransactionId: string; //		client交易ID(方便关联订单)
      type: string; //		交易类型
      status: EnumManage.QbitCard.CardTransactionEnum; //		交易状态
      transactionTime: Date; //		交易时间
    }
  }
  /** 全球账户 */
  export namespace GlobalAccountManage {
    /**
     * GlobalHolder 模型
     * 全球账户持有人信息
     */
    export interface GlobalHolderModel {
      id: string; //		持有人 id
      createTime: Date; //		创建时间
      status: string; //		持有人状态
      name: EnumManage.GlobalAccount.GlobalHolderStatusEnum; //		持有人名称
    }
    /**
     * GlobalSubAccount 模型
     * 全球账户子账户信息
     */
    export interface GlobalSubAccountModel {
      id: string; //		id
      accountId: string; //		客户 Id
      createTime: Date; //		创建时间
      holderId: string; //		持有人 Id
      nickname: string; //		全球账户昵称
      purpose: string; //		全球账户用途
      currency: string; //		全球账户币种
      balanceId: string; //		全球账户钱包ID （用于付款）
      beneficiaries: BeneficiaryModel[]; //		关联的受益人
    }
    /**
     * FundingAccounts 模型
     * 银行账户信息
     */
    export interface FundingAccountsModel {
      id: string; //		id
      accountId: string; //		客户 Id
      holderId: string; //		持有人 Id
      createTime: Date; //		创建时间
      accountName: string; //		账户持有人姓名
      accountNo: string; //		账号
      currency: string; //		币种
      bankName: string; //		银行名称
      bankAddress: string; //		银行地址
      swift: string; //		SWIFT/BIC
      routingNumber: string; //		Routing number
      routingType: string; //		Routing type
      branchName: string; //		支行名称
      branchCode: string; //		支行代码
      status: EnumManage.GlobalAccount.FundingAccountsStatusEnum; //	状态
    }
    /**
     * Beneficiary 模型
     * 全球账户受益人信息
     */
    export interface BeneficiaryModel {
      id: string; //		收款方 id
      accountId: string; //		客户 Id
      holderId: string; //		持有人 Id
      status: EnumManage.GlobalAccount.ReceiverEnum; //		状态
      currency: EnumManage.currencyEnum; //	值过多，详情请看currency可能的值	币种
      accountType: EnumManage.GlobalAccount.AccountTypeEnum; //	Business/Individual	账户类型(企业或者个人)
      userName: string; //		收款方名称
      accountNumber: string; //		收款方银行账户
      receiverAddress: AddressModel; //	值过多，详情请看Address可能的值	收款是个人地址、公司地址
      bankName: string; //		银行名称
      bankAddress: AddressModel; //	值过多，详情请看Address可能的值	银行地址
      bankBranchName: string; //		银行支行名称
      certificateNo: string; //		个人证件号、企业统一社会信用代码
      routingType: EnumManage.GlobalAccount.RoutingTypeEnum; //	值过多，详情请看routingType可能的值	Routing type
      routingNumber: string; //		Routing number
      bic: string; //		bic_swift
      iban: string; //		iban
    }
    /**
     * BusinessPerson 模型
     * 企业成员信息
     */
    export interface BusinessPersonModel {
      isRepresentative: boolean; //	是企业法人
      country: string; //	企业法人国籍
      idType: EnumManage.IdTypeEnum; //	企业法人证件类型
      idFront: QbitManage.IFile; //	身份证正面或护照照片
      idBack?: QbitManage.IFile; //	身份证反面(证件类型为身份证时必传)
      sharePercent?: number; //	受益人持股比例
      isUBO?: boolean; //	是否为受益人
      firstName?: string; //	名
      lastName?: string; //	姓
      firstNamePinYin?: string; //	名(拼音)
      lastNamePinYin?: string; //	姓(拼音)
      expirationDate?: string; //	证件有效期
      idNumber?: string; //	证件号码
      issue?: string; //	证件签发机构
      startDate?: string; //	证件签发日期
    }
    /**
     * GlobalAccountTransaction 模型
     * 全球账户交易信息
     */
    export interface GlobalAccountTransactionModel {
      id: string; //		交易 id
      holderId: string; //		持有人 Id
      createTime: Date; //		创建时间
      transactionTime: Date; //		交易时间
      currency: EnumManage.currencyEnum; //	值过多，详情请看currency可能的值	币种
      settlementCurrency: EnumManage.currencyEnum; //	值过多，详情请看currency可能的值	实际收款币种
      counterparty: string; //		对手方名称
      transactionAmount: number; //		交易金额
      fee: number; //		手续费
      businessType: string; //	Inbound/Outbound	业务类型
      type: EnumManage.GlobalAccount.TransactionTypeEnum; // 交易类型
      status: EnumManage.GlobalAccount.TransactionStatusEnum; //	Pending/Closed/Fail	交易状态
      clientTransactionId: string; //		系统编号(方便Client关联订单）
      transactionId: string; //		订单编号
      appendFee: number; //		调用方追加的手续费
    }
    /** TransactionFee模型 */
    export interface TransactionFeeModel {
      amount: number; //	付款金额
      fee: number; //	手续费
      originFee: number; //	Qbit手续费
      appendFee: number; //	调用方追加手续费
      clientTransactionId: string; //client交易id
    }
  }
  /** WebHook推送 */
  export namespace WebHookManage {
    /**
     * Notification 模型
     * WebHook通知信息
     */
    export interface NotificationModel {
      id: string; //		id
      accountId: string; //		账户Id
      createTime: Date; //	创建时间
      businessType: string; //	值过多，详情请看businessType可能的值	业务类型
      businessStatus: string; //	Pending/Processing/Request/Success/Fail	业务状态
      data: Record<string, any>; //	消息内容
      sign: string; //		签名（签名详情）, 只有data字段的数据参与签名
      remark: string; //		备注
      notificationStatus: string; //		消息状态
    }
  }
}

export namespace EnumManage {
  /** 账户 */
  export namespace Account {
    /** 类型 */
    export enum TypeEnum {
      MasterAccount = 'MasterAccount', // (主体账户)
      SubAccount = 'SubAccount', // (子账户)
    }
    /** 状态 */
    export enum StatusEnum {
      Active = 'Active', // (正常激活)
      Frozen = 'Frozen', // (冻结，只能查看不能操作)
      Inactive = 'Inactive', // (冻结，只能查看不能操作)
    }
  }
  /** user */
  export namespace User {
    /** 状态 */
    export enum StatusEnum {
      Active = 'Active', // (正常激活)
      Frozen = 'Frozen', // (冻结，只能查看不能操作)
      Inactive = 'Inactive', // (冻结，只能查看不能操作)
    }
  }
  /** cdd */
  export namespace Cdd {
    export enum KyStatusEnum {
      Pending = 'Pending', //(提交但未审核)
      Request = 'Request', //(待补录、驳回)
      Passed = 'Passed', //(审核通过)
      Canceled = 'Canceled', //(取消准入)
      Na = 'Na', //(未提交)
    }
  }
  /** 钱包 */
  export namespace Balance {
    /** 类型 */
    export enum WalletTypeEnum {
      QbitCard = 'QbitCard', //(量子卡)
      QbitAccount = 'QbitAccount', //(量子账户)
      GlobalAccount = 'GlobalAccount', //(全球账户)
    }
  }
  /** 量子卡  */
  export namespace QbitCard {
    /** 卡状态 */
    export enum CardStatusEnum {
      Active = 'Active', //(正常激活)
      Frozen = 'Frozen', //(冻结)
      Inactive = 'Inactive', //(删除)
    }
    /** 卡头 */
    export enum ProviderEnum {
      PrepaidCard_493193 = 'PrepaidCard_493193',
      BudgetCard_493193 = 'BudgetCard_493193',
      PrepaidCard_471880 = 'PrepaidCard_471880',
      BudgetCard_471880 = 'BudgetCard_471880',
    }
    /** 交易状态 */
    export enum CardTransactionEnum {
      Pending = 'Pending',
      Closed = 'Closed',
      Fail = 'Fail',
    }
  }
  /** 全球账户 */
  export namespace GlobalAccount {
    /** routingType可能的值为: */
    export enum RoutingTypeEnum {
      sort_code = 'sort_code',
      aba = 'aba',
      bsb_code = 'bsb_code',
      institution_no = 'institution_no',
      bank_code = 'bank_code',
      branch_code = 'branch_code',
      clabe = 'clabe',
      cnaps = 'cnaps',
      ifsc = 'ifsc',
      RON = 'RON',
    }
    /** 与此账户关系 */
    export enum RelationshipEnum {
      SAME_ACCOUNT = 'SAME_ACCOUNT', //(同名账户)
      ASSOCIATED_SUBJECT = 'ASSOCIATED_SUBJECT', //(关联主体)
      AGENCY_RELATIONSHIP = 'AGENCY_RELATIONSHIP', //(代理关系、供销关系关联公司)
      TRADE_RELATIONS = 'TRADE_RELATIONS', //(贸易关系)
    }
    /** 持有人状态 */
    export enum GlobalHolderStatusEnum {
      Active = 'Active', // (正常激活)
      Frozen = 'Frozen', // (冻结，只能查看不能操作)
      Inactive = 'Inactive', // (冻结，只能查看不能操作)
    }
    /** 银行账户状态 */
    export enum FundingAccountsStatusEnum {
      Active = 'Active',
      Frozen = 'Frozen',
      Inactive = 'Inactive',
    }
    /** 账户类型(企业或者个人) */
    export enum AccountTypeEnum {
      Business = 'Business',
      Individual = 'Individual',
    }
    /** 卡收款方/受益人状态 */
    export enum ReceiverEnum {
      Pending = 'Pending',
      Request = 'Request',
      Passed = 'Passed',
      Canceled = 'Canceled',
      Inactive = 'Inactive',
    }
    /** 业务类型 */
    export enum BusinessTypeEnum {
      Inbound = 'Inbound',
      Outbound = 'Outbound',
    }
    /** 交易状态 */
    export enum TransactionStatusEnum {
      Pending = 'Pending',
      Closed = 'Closed',
      Fail = 'Fail',
    }
    /** 交易类型 */
    export enum TransactionTypeEnum {
      Payment = 'Payment', //(付款)
      TransferIn = 'TransferIn', //(转入)
      TransferOut = 'TransferOut', //(转出)
      Refunds = 'Refunds', //(退款)
      Fee = 'Fee', //(手续费)
      InnerTransferOut = 'InnerTransferOut', //(内部转出)
      InnerTransferIn = 'InnerTransferIn', //(内部转入)
    }
  }

  /** 币种 */
  export enum currencyEnum {
    USD = 'USD',
    CNY = 'CNY',
    EUR = 'EUR',
    GBP = 'GBP',
    AUD = 'AUD',
    CAD = 'CAD',
    CZK = 'CZK',
    DKK = 'DKK',
    HKD = 'HKD',
    HRK = 'HRK',
    HUF = 'HUF',
    IDR = 'IDR',
    INR = 'INR',
    MXN = 'MXN',
    MYR = 'MYR',
    NOK = 'NOK',
    PHP = 'PHP',
    PLN = 'PLN',
    SEK = 'SEK',
    SGD = 'SGD',
    RON = 'RON',
  }
  /** 企业法人证件类型 */
  export enum IdTypeEnum {
    PASSPORT = 'PASSPORT', //(护照)
    CNRIC = 'CNRIC', //(二代身份证)
    HKHKID = 'HKHKID', //(香港身份证)
  }
}
