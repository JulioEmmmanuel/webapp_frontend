import React, { useEffect, useState } from "react";
import AddWidget from "../../Components/AddWidget";
import ClientServicesForm from "../../Components/Forms/ClientServicesForm";
import { Modal } from "../../Components/Modal";

import ClientServiceCard from "../../Components/ClientServiceCard";
import useClientServices from "../../Hooks/useClientServices";
import useServices from "../../Hooks/useServices";

import {Title, ServiceList} from "./styles";
import { useParams } from "react-router-dom";

const ClientServicePage = () => {

    const [createOpen, setCreateOpen] = useState(false);
    const [avServices, setAvServices] = useState([]);

    const {cliente} = useParams();
    const {services: clientServices, getData, createData, updateData} = useClientServices(cliente)
    const {services} = useServices();

    useEffect(()=>{
        if(clientServices){
            let ids = clientServices.map(serv => serv.id);
            let notTaken = services.filter(serv => !ids.includes(serv.id));
            setAvServices(notTaken);  
        }
    }, [clientServices])


    const toggleCreateOpen = () => {
        setCreateOpen(prevValue => !prevValue)
    }

    const createService = (newService) => {
        createData(newService);
    }

    const updateService = async (serviceId) => {
        updateData(serviceId);      
    };

 
    return(
        <>
            <Title>Servicios del cliente</Title>
            <ServiceList>
                {(clientServices) && clientServices.map((service, index) => {
                    return <ClientServiceCard key={service.id}
                    isOdd = {(index+1)%2===0}
                    name = {service.name}
                    startDate = {service.startDate}
                    endDate={service.endDate ?? null}
                    update = {() => updateService(service.id)}
                    />
                }
                )};
            </ServiceList>

            {avServices.length > 0 &&
                <AddWidget add={toggleCreateOpen}/>
            }


            {createOpen && 
            <Modal>
                <ClientServicesForm
                    create={createService}
                    close={toggleCreateOpen}
                    services={avServices}
                />
            </Modal>}
            
        </>
    );
}

export default ClientServicePage;