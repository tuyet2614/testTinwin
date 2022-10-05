import axios from "axios";
import { useEffect, useState } from "react";
// import CategoriesServices from "../../services/CategoriesServices"

const useGetCategories = () => {
    const [res, setRes] = useState()

    const options = {
        method: 'POST',
        url: 'https://45.76.152.56/auth/connect/token',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'text/plain'
          // Authorization: 'Bearer ' + token,
        },
        data: {
          "username": "0332727355",
          "password": "12345678Aa@",
          'client_id': 'Mobile_Retailer',
          'client_secret': '1q2w3E*',
          'grant_type': 'password',
        },
      };
    
      // useEffect(() => {
        
      //   fn();
      // }, []);
      const fn = () => {
        axios.request(options).then(res => console.log(res)).catch(err => console.log(err))
        // await axios
        //   .request(options)
        //   .then(res => {
        //       // setRes(res)
        //       console.log(res)
        //   })
        //   .catch(err => console.log(err));
      };

      return fn

    // return CategoriesServices.getCategories().then(res => console.log(res)).catch(err => console.log(err.response.data))
}

export default useGetCategories