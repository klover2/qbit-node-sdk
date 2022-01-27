import Qbit from '../index';
describe('WebHook 推送', () => {
  let qbit: Qbit;
  const accessToken = 'ff62fb92493407e60e9a4d91127d974fac558f08';
  const refreshToken = '5d278681b344398555fb840fa422f38956e0c4bc6257f5fdb3e53d494a0606b9';

  beforeAll(async () => {
    qbit = new Qbit('qbit4ae40e362a1e9e5e', '67add9b254569d167b88185f21402c5f', 'https://global.service.staging.qbitnetwork.com');
  });
  it('获取通知列表', async () => {
    const res = await qbit.webHook.notifications(
      {
        accountId: '47025eb8-b4c7-44f7-85c8-14ce843b2fbb',
      },
      accessToken,
    );
    console.log(res);
  });
});
