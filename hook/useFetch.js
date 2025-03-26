import { useState, useEffect } from "react";
import axios from 'axios';
//alternativa de key
//import { RAPID_API_KEY } from '@env';
//const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'x-rapidapi-key': 'b8dfa95298mshe61001e2430350ep101a2cjsnf416ab9f0b63',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
          },
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request
            (options);

            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            //alert('There is an error')
        } finally {
            setIsLoading(false);
        }
    }

    //volver los datos
    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;