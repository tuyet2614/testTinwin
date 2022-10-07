import {useEffect, useState} from 'react';
import HomeServices from '../../services/HomeServices';

const useGetCategoriesForHome = () => {
  const [res, setRes] = useState();

  useEffect(() => {
    HomeServices.getCategoriesForHome()
      .then(res => setRes(res.data))
      .catch(err => console.log(err));
  }, []);

  return res;
};

export default useGetCategoriesForHome;
