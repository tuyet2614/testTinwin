import { useEffect, useState } from 'react';
import HomeServices from '../../services/HomeServices';

const useGetSupplier = () => {
    const [res, setRes] = useState();

    const params = {
        skip: 0,
        take: 8,
    };

    useEffect(() => {
        HomeServices.getSupplier(params)
            .then(res => {
                setRes(res.data.items);
            })
            .catch(err => console.log(err));
    }, []);

    return res;
};

export default useGetSupplier;