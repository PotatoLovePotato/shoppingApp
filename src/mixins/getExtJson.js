import wepy from 'wepy';
const getExtJson = function () {
  if (wepy.getExtConfigSync) {
    const extConfig = wepy.getExtConfigSync();
    console.log(extConfig)
    this.flag = extConfig.flag;
    this.api_host = extConfig.api_host;
    this.img_host = extConfig.img_host;
    this.config_id = extConfig.config_id;
    this.merchant_id = extConfig.merchant_id;
    this.menu = extConfig.menu;
    this.openid = wepy.getStorageSync('openid')
  }
};
export default getExtJson;