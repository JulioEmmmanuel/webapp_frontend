import { useEffect, useState } from "react"
import useFetch from "./useFetch";

const useCharges = (id)=> {

    const [charges, setCharges] = useState([]);

    const { isLoading: isLoadingCharge, apiError: chargeError, apiData: chargeData, fetchData: fetchCharges } = useFetch();
    const { isLoading: isLoadingApi, apiError, apiData, fetchData } = useFetch();


    useEffect(()=>{
        getData();
    }, [])

    useEffect(()=>{
        if(!isLoadingApi){
            getData();
        }
    }, [apiData, isLoadingApi])

    useEffect(()=>{
        if(!isLoadingCharge){
            setCharges(chargeData);
        }
    }, [chargeData, isLoadingCharge])

    const getData = async () => {
        await fetchCharges(
            "GET",
            `http://localhost:4000/api/v1/charges`,
            {}
        );
    }

    const updateData = async (id, data) => {
        await fetchData(
            "PUT",
            `http://localhost:4000/api/v1/charges/${id}`,
            data
        );
    }


    return {charges, getData, updateData};
}

export default useCharges;