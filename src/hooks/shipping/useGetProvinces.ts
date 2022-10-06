import { useEffect, useState } from "react"
import ShippingServices from "../../services/ShippingServices"

const useGetProvinces = () => {
    const [res, setRes] = useState()

    const params = {
      headers: { 
        'Accept': 'text/plain'
      }
    }

    useEffect(() => {
        ShippingServices.getProvinces(params).then(res => setRes(res.data)).catch(err => console.log(err.response.data))
    }, [])

return res
}

export default useGetProvinces