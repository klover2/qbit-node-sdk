import request from 'superagent';
import { QbitManage } from '../dto';
/**
 * post 请求
 * @param env 环境变量
 * @param url
 * @param params
 * @param headers
 * @param filenames 需要上传文件的key
 * @returns
 */
export const postRequest = async (
  url: string,
  params: Record<string, any>,
  headers: Record<string, any> = {},
  filenames: string[] = [],
): Promise<any> => {
  try {
    let result: any;
    if (headers['Content-Type'] === 'multipart/form-data') {
      delete headers['Content-Type'];
      const req = request.post(url).set(headers);
      Object.keys(params).map((key: string) => {
        if (filenames.includes(key)) {
          req.attach(key, params[key]);
        } else {
          req.field(key, params[key]);
        }
      });
      result = await req;
    } else {
      result = await request
        .post(url)
        .send(params)
        .set(headers);
    }

    return {
      httpStatus: result.status,
      ...result.body,
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
      httpStatus: result.status,
      ...result.body,
    };
  } catch (error) {
    throw error;
  }
};

/**
 * put 请求
 * @param env 环境变量
 * @param url
 * @param params
 * @param headers
 * @returns
 */
export const putRequest = async (url: string, params: Record<string, any>, headers: Record<string, any> = {}): Promise<any> => {
  try {
    const result = await request
      .put(url)
      .send(params)
      .set(headers);
    return {
      httpStatus: result.status,
      ...result.body,
    };
  } catch (error) {
    throw error;
  }
};

/**
 * delete 请求
 * @param env 环境变量
 * @param url
 * @param params
 * @param headers
 * @returns
 */
export const delRequest = async (url: string, params: Record<string, any>, headers: Record<string, any> = {}): Promise<any> => {
  try {
    const result = await request
      .delete(url)
      .send(params)
      .set(headers);
    return {
      httpStatus: result.status,
      ...result.body,
    };
  } catch (error) {
    throw error;
  }
};
