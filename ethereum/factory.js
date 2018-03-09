import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x0C44792d725F7eDCc7432265C4518Ea281f80bba'
);

export default instance;
