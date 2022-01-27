import Qbit from '../index';
describe('量子卡', () => {
  let qbit: Qbit;
  const accessToken = 'ff62fb92493407e60e9a4d91127d974fac558f08';
  const refreshToken = '5d278681b344398555fb840fa422f38956e0c4bc6257f5fdb3e53d494a0606b9';

  beforeAll(async () => {
    qbit = new Qbit('qbit4ae40e362a1e9e5e', '67add9b254569d167b88185f21402c5f', 'https://global.service.staging.qbitnetwork.com');
  });
  it('创建量子卡', async () => {});
  it('转入', async () => {});
  it('转出', async () => {});
  it('冻结卡', async () => {});
  it('解冻卡', async () => {});
  it('删除卡', async () => {});
  it('冻结金额', async () => {});
  it('解冻金额', async () => {});
  it('获取卡列表', async () => {});
  it('获取量子卡私密信息', async () => {});
  it('获取量子卡交易列表', async () => {});
  describe('提现', () => {
    it('创建收款人', async () => {});
    it('获取收款人列表', async () => {});
    it('创建提现订单', async () => {});
  });
});
