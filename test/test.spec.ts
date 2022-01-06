import Qbit from '../index';
/**
 * 接口测试
 */
describe('qbit', () => {
  let qbit: Qbit;
  const accessToken = '<accessToken>';

  beforeAll(async () => {
    qbit = new Qbit('<clientId>', '<clientSecret>', '<baseUrl>');
  });

  it('获取code', async () => {
    const res = await qbit.getAccessToken();
    console.log(res);
    // {
    //   httpStatus: 201,
    //   accessToken: '<accessToken>',
    //   refreshToken: '<refreshToken>',
    //   expiresIn: 86400,
    //   timestamp: 1641454049
    // }
  });
});
