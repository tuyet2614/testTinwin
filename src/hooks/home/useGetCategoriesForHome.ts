import {useEffect, useState} from 'react';
import HomeServices from '../../services/HomeServices';

const useGetCategoriesForHome = () => {
  const [res, setRes] = useState();
  const [loadingCategories, setLoadingCategories] = useState(true);

  useEffect(() => {
    HomeServices.getCategoriesForHome()
      .then(res => setRes(res.data))
      .catch(err => console.log(err))
      .then(() => setLoadingCategories(false));
  }, []);

  return {
    categories: res,
    loadingCategories,
  };
};

export default useGetCategoriesForHome;
