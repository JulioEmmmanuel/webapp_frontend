import React, { useState } from "react";
import AddWidget from "../../Components/AddWidget";
import CreateService from "../../Components/Forms/CreateService";
import { Modal } from "../../Components/Modal";

import ServiceCard from "../../Components/ServiceCard";
import {Title, ServiceList} from "./styles";

const ServicePage = () => {

    const [createOpen, setCreateOpen] = useState(false);
    const [services, setServices] = useState([
        {
            name: "Campaña en redes sociales",
            periodicity: "Mensual",
            description: `Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.`
        }, 
        {
            name: "Desarrollo de aplicación",
            periodicity: "Quincenal",
            description: `Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.`
        },
        {
            name: "Desarrollo de aplicación",
            periodicity: "Quincenal",
            description: `Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.`
        },
        {
            name: "Desarrollo de aplicación",
            periodicity: "Quincenal",
            description: `Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.`
        },
        {
            name: "Desarrollo de aplicación",
            periodicity: "Quincenal",
            description: `Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.`
        },
        {
            title: "Desarrollo de aplicación",
            periodicity: "Quincenal",
            description: `Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.`
        }
    
    ])

    const toggleCreateOpen = () => {
        setCreateOpen(prevValue => !prevValue)
    }

    const createService = (newService) => {
        setServices([...services, newService]);
    }


    
    return(
        <>
            <Title>Servicios</Title>
            <ServiceList>
                {services.map((service, index) => {
                    return <ServiceCard key={service.name}
                    isOdd = {(index+1)%2===0}
                    name = {service.name}
                    periodicity = {service.periodicity}
                    description = {service.description}
                    />
                }
                )};
            </ServiceList>

            <AddWidget add={toggleCreateOpen}/>

            {createOpen && 
            <Modal>
                <CreateService create={createService} close={toggleCreateOpen}/>
            </Modal>}
        </>
    );
}

export default ServicePage;