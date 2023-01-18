import { useEffect, useState } from "react"
import useFetch from "./useFetch";

const useAuth = ()=> {


    const { isLoading, apiError, apiData, fetchData } = useFetch();
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(()=>{
         console.log(loggedIn)
        if(apiError && !(apiData.user || apiData.id)){
            alert("Ocurrió un error, inténtalo de nuevo")
        }
        if(!isLoading && (apiData.user || apiData.id)){
            setLoggedIn(true);
        }
    }, [apiData, isLoading, apiError])


    const login = async (data) => {
        await fetchData(
            "POST",
            "http://localhost:4000/api/v1/auth/login",
            data
        );
    }

    const createUser =  async (data) => {
        await fetchData(
            "POST",
            "http://localhost:4000/api/v1/users",
            data        
        )
    }

    return {login, createUser, loggedIn};
}

export default useAuth;