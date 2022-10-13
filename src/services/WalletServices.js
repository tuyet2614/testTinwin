const {get} = require('./AxiosHelper');

const WalletServices = {
  getWallet(params) {
    return get('/webbff/wallet/api/app/wallet/wallet', params);
  },
};

export default WalletServices;
