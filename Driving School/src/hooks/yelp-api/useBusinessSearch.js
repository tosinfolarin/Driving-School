import {useState, useEffect} from 'react';
import * as api from './api';

export function useBusinessSearch(term, location) {
    const [businesses, setBusinesses] = useState([]); //This is where the businesses array is stored from the yelp api
    const [amountResults, setAmountResults] = useState(); // This also stores the amount of results
    const [searchParams, setSearchParams] = useState({term, location});

    useEffect(() => {
        setBusinesses([]);
        const fetchData = async () => {
            try {
                const rawData = await api.get('/businesses/search', searchParams);
                const resp = await rawData.json();
                setBusinesses(resp.businesses);
                setAmountResults(resp.total);
            } catch(e) {
                console.error(e);
            }
        };
        fetchData();
    }, [searchParams]);
    return [businesses, amountResults, searchParams, setSearchParams];
}