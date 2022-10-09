import {useState, useEffect} from 'react';
import ProductServices from '../../services/ProductServices';

const useGetTopSearch = () => {
  const [res, setRes] = useState();

  const params = {
    skip: 0,
    take: 10,
  };

  useEffect(() => {
    ProductServices.getTopSearch(params)
      .then(res => {
        setRes(res.data.items);
      })
      .catch(err => console.log(err));
  }, []);

  return res;
};

export default useGetTopSearch;
