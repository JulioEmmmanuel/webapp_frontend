import { useEffect, useState } from "react"
import useFetch from "./useFetch";

const useClientServices = (id)=> {

    const [services, setServices] = useState([]);

    const { isLoading: isLoadingCli, apiError: cliError, apiData: cliData, fetchData: fetchClientServs } = useFetch();
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
            
            const subs = cliData.subscriptions;
            const data = subs?.map(sub => {
                let serv = sub.services;
                serv.idSub = sub.id;
                serv.startDate = sub.startDate;
                serv.endDate = sub.endDate;
                return serv
            })
            
            setServices(data);
        }
    }, [cliData, isLoadingCli])

    const getData = async () => {
        await fetchClientServs(
            "GET",
            `http://localhost:4000/api/v1/clients/${id}`,
            {}
        );
    }

    const createData =  async (idService) => {
        await fetchData(
            "POST",
            "http://localhost:4000/api/v1/subscriptions",
            {
                idService: idService,
                idClient: id
            }       
        )
    }

    const updateData = async (idService) => {
        let i = services.findIndex(el => el.id === idService);
        let idSub = services[i].idSub;
        await fetchData(
            "PATCH",
            `http://localhost:4000/api/v1/subscriptions/${idSub}/end-date`        
        );
    }


    return {services, getData, createData, updateData};
}

export default useClientServices;