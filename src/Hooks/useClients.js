import { useEffect, useState } from "react"
import useFetch from "./useFetch";

const useClients = ()=> {

    const [clients, setClients] = useState([]);

    const { isLoading: isLoadingCli, apiError: cliError, apiData: cliData, fetchData: fetchClients } = useFetch();
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
        if(!isLoadingCli){
            setClients(cliData);
        }
    }, [cliData, isLoadingCli])

    const getData = async () => {
        await fetchClients(
            "GET",
            "http://localhost:4000/api/v1/clients/",
            {}
        );
    }

    const createData =  async (data) => {
        await fetchData(
            "POST",
            "http://localhost:4000/api/v1/clients/",
            data        
        )
    }

    const updateData = async (id, data) => {
        await fetchData(
            "PUT",
            `http://localhost:4000/api/v1/clients/${id}`,
            data        
        );
    }

    const deleteData = async(id) => {
        await fetchData(
            "DELETE",
            `http://localhost:4000/api/v1/clients/${id}`,
            {}     
        );
    }

    return {clients, getData, createData, updateData, deleteData};
}

export default useClients;