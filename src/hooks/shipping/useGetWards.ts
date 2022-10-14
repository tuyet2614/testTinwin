import { useEffect, useState } from "react"
import ShippingServices from "../../services/ShippingServices"

const useGetWards = (id: string) => {
    const [res, setRes] = useState()

    const params = {
        'districtId': id
    }

    useEffect(() => {
        ShippingServices.getWards(params).then(res => {
            setRes(res.data)
        }).catch(err => console.log(err.response.data))
    }, [])

return res
}

export default useGetWards