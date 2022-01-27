import Qbit from '../index';
describe('qbit', () => {
  let qbit: Qbit;
  const accessToken = 'ff62fb92493407e60e9a4d91127d974fac558f08';
  const refreshToken = '5d278681b344398555fb840fa422f38956e0c4bc6257f5fdb3e53d494a0606b9';

  beforeAll(async () => {
    qbit = new Qbit('qbit4ae40e362a1e9e5e', '67add9b254569d167b88185f21402c5f', 'https://global.service.staging.qbitnetwork.com');
  });

  it('获取access token', async () => {
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
  it('刷新access token', async () => {
    const res = await qbit.refreshAccessToken(refreshToken);
    console.log(res);
  });
  it('验证签名', () => {
    // const res = qbit.verificationSign();
    // console.log(res);
  });
  it('注册 Qbit 账户', async () => {
    const res = await qbit.account.register(
      {
        phone: '+8613112340001',
        email: '13112340001@qq.com',
        name: 'klover',
        legalPerson: 'klover',
      },
      accessToken,
    );
    console.log(res);
  });
  it('获取Account列表', async () => {
    const res = await qbit.account.accounts({}, accessToken);
    console.log(res.data);
  });
  it('获取User列表', async () => {
    const res = await qbit.user.users(
      {
        accountId: '47025eb8-b4c7-44f7-85c8-14ce843b2fbb',
      },
      accessToken,
    );
    console.log(res);
  });
  it('获取Balance列表', async () => {
    const res = await qbit.balance.balances(
      {
        accountId: '47025eb8-b4c7-44f7-85c8-14ce843b2fbb',
      },
      accessToken,
    );
    console.log(res);
  });
  describe('量子卡', () => {
    it('创建量子卡', () => {});
    it('转入', () => {});
    it('转出', () => {});
    it('冻结卡', () => {});
    it('解冻卡', () => {});
    it('删除卡', () => {});
    it('冻结金额', () => {});
    it('解冻金额', () => {});
  });
});
