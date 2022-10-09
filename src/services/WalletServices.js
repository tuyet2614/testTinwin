const {get} = require('./AxiosHelper');

const WalletServices = {
  getWallet(params) {
    return get('/wallet/api/app/wallet/wallet', params);
  },
};

export default WalletServices;
