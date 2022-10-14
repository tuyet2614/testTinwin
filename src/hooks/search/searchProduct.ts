import { useEffect, useState } from "react";
import searchService from "../../services/SearchService";
import ProductServices from "../../services/ProductServices";


export const useSearchProduct = (keyword: string) => {
    const [res, setRes] = useState([])

    const params = {
        'keyword': keyword
    }
    useEffect(() => {
        searchService.getProductByKeyword(params).then(res => {
            keyword ? setRes(res.data) : setRes([])

        }).catch(err => console.log('error: ', err.response.data))
    }, [keyword])

    return res
}

export const getProductByKeyword = (textSearch:string) => {
    const [res, setRes] = useState({});

    const params = {
        'TextSearch': textSearch
    }
  useEffect(() => {
    searchService.renderProductByKeyword(params)
      .then(res => {
        setRes(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return res;
}