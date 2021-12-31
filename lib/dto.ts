/**
 * status http 返回code 码
 * data 返回实体数据
 */
export namespace QbitNamespace {
  /** 获取code */
  export interface IGetCode {
    status: number;
    data: {
      timestamp: number;
      state: string;
      code: string;
    };
  }
  /** 获取access token */
  export interface IGetAccessToken {
    status: number;
    data: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
      timestamp: number;
    };
  }
  /** 刷新access token  */
  export interface IRefreshAccessToken {
    status: number;
    data: {
      accessToken: string;
      expiresIn: number;
      timestamp: number;
    };
  }
}
