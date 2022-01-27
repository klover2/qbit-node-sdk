import Qbit from '../index';
describe('全球账户', () => {
  let qbit: Qbit;
  const accessToken = 'ff62fb92493407e60e9a4d91127d974fac558f08';
  const refreshToken = '5d278681b344398555fb840fa422f38956e0c4bc6257f5fdb3e53d494a0606b9';

  beforeAll(async () => {
    qbit = new Qbit('qbit4ae40e362a1e9e5e', '67add9b254569d167b88185f21402c5f', 'https://global.service.staging.qbitnetwork.com');
  });

  describe('持有人', () => {
    it('创建持有人', async () => {});
    it('删除持有人', async () => {});
    it('持有人是否开户', async () => {});
    it('获取持有人列表', async () => {});
  });
  describe('CDD', () => {
    it('API提交', () => {});
  });
  it('创建全球账户', async () => {});
  it('获取全球账户列表', async () => {});
  it('获取银行账户列表', async () => {});
  it('创建受益人', async () => {});
  it('获取受益人列表', async () => {});
  it('创建付款订单', async () => {});
  it('创建批量付款订单', async () => {});
  it('获取付款订单手续费', async () => {});
  it('获取交易列表', async () => {});
});
