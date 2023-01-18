import { useEffect, useState } from "react"
import useFetch from "./useFetch";

const useServices = ()=> {

    const [services, setServices] = useState([]);

    const { isLoading: isLoadingServ, apiError: servError, apiData: servData, fetchData: fetchServices } = useFetch();
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
        if(!isLoadingServ){
            setServices(servData);
        }
    }, [servData, isLoadingServ])

    const getData = async () => {
        await fetchServices(
            "GET",
            "http://localhost:4000/api/v1/services/",
            {}
        );
    }

    const createData =  async (data) => {
        await fetchData(
            "POST",
            "http://localhost:4000/api/v1/services/",
            data        
        )
    }

    const updateData = async (id, data) => {
        await fetchData(
            "PUT",
            `http://localhost:4000/api/v1/services/${id}`,
            data        
        );
    }

    const deleteData = async(id) => {
        await fetchData(
            "DELETE",
            `http://localhost:4000/api/v1/services/${id}`,
            {}     
        );
    }

    return {services, getData, createData, updateData, deleteData};
}

export default useServices;