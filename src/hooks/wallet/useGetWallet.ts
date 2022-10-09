import {useState, useEffect} from 'react';
import WalletServices from '../../services/WalletServices';
import useGetUser from '../user/useGetUser';

const useGetWallet = () => {
  const [wallet, setWallet] = useState();
  const userInfo = useGetUser();

  const params = {
    UserId: userInfo.userName,
  };

  useEffect(() => {
    WalletServices.getWallet(params)
      .then(res => {
        setWallet(res.data);
        console.log(res);
      })
      .catch(err => console.log(err));
  }, []);

  return {
    wallet,
    userInfo,
  };
};

export default useGetWallet;
