import { useEffect, useState } from "react"
import ShippingServices from "../../services/ShippingServices"

const useGetDistricts = (id: string) => {
    const [res, setRes] = useState()

    const params = {
        'provinceId': id
    }

    useEffect(() => {
        ShippingServices.getDistricts(params).then(res => {
            setRes(res.data)
            console.log(res)
        }).catch(err => console.log(err.response.data))
    }, [])

return res
}

export default useGetDistricts