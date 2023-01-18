import { useState } from "react"
import axios from "axios"

const useFetch = ()=> {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState([]);
    const [apiError, setApiError] = useState(''); 

    const fetchData = async (method, url, body) => {
        try {
            const response = await axios({
                method: method,
                url: url,
                data: body
            });
            const data = await response?.data;
      
            setApiData(data);
            setIsLoading(false);
            return;
        } catch(error){
            setApiError(error);
            setIsLoading(false);
            return;
        }
    };

    return {isLoading, apiData, apiError, fetchData};
}

export default useFetch;