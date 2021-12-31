/**
 * status http 返回code 码
 * data 返回实体数据
 */
export namespace QbitNamespace {
  /** 获取code */
  export interface IGetCodeOutput {
    status: number;
    data: {
      timestamp: number;
      state: string;
      code: string;
    };
  }
  /** 获取access token */
  export interface IGetAccessTokenOutput {
    status: number;
    data: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
      timestamp: number;
    };
  }
  /** 刷新access token  */
  export interface IRefreshAccessTokenOutput {
    status: number;
    data: {
      accessToken: string;
      expiresIn: number;
      timestamp: number;
    };
  }
}
