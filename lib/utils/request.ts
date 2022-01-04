import request from 'superagent';
/**
 * post 请求
 * @param env 环境变量
 * @param url
 * @param params
 * @param headers
 * @returns
 */
export const postRequest = async (url: string, params: Record<string, any>, headers: Record<string, any> = {}): Promise<any> => {
  try {
    const result = await request
      .post(url)
      .send(params)
      .set(headers);
    return {
      status: result.status,
      data: {
        ...result.body,
      },
    };
  } catch (error) {
    throw error;
  }
};

/**
 * get 请求
 * @param url
 * @param params
 * @param headers
 * @returns
 */
export const getRequest = async (url: string, query: Record<string, any>, headers: Record<string, any> = {}): Promise<any> => {
  try {
    const result = await request
      .get(url)
      .query(query)
      .set(headers);
    return {
      status: result.status,
      data: {
        ...result.body,
      },
    };
  } catch (error) {
    throw error;
  }
};
