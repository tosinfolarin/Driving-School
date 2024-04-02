import { useState, useEffect } from "react";
import * as api from './api';

export function useBusinessSearch(term, location ){
    const [businesses, useBusinesses] = useState([]);
    const [aboutResults, setAmountResult] = useState();
    const [searchParams, setSearchParams] = useState ({term, location});

    useEffect(() => {
    
        setBusinesses([]);
        const fetchData = async () => {
            try {
                const rawData = await api.get('/businesses/search', searchParams);
                const resp = await rawData.json();
                setBusinesses(resp.businesses);
                setAmountResult(resp.total);   
            } catch (e) {
                console.error(e);
            }

        };
        fetchData();
    },[searchParams]);
    return [businesses, amountResults, searchParams, setSearchParams];

}