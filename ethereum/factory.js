import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x0a6b38Be01b278F77C81938Ab00d8385e3c087B3'
);

export default instance;
