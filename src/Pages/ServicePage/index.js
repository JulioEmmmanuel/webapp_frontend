import React, { useEffect, useState } from "react";
import AddWidget from "../../Components/AddWidget";
import DeleteForm from "../../Components/Forms/DeleteForm";
import ServiceForm from "../../Components/Forms/ServiceForm";
import { Modal } from "../../Components/Modal";

import ServiceCard from "../../Components/ServiceCard";
import useServices from "../../Hooks/useServices";
import {Title, ServiceList} from "./styles";

const ServicePage = () => {

    const [createOpen, setCreateOpen] = useState(false);
    const [updateOpen, setUpdateOpen] = useState(false);
    const [updateEl, setUpdateEl] = useState(null);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const {services, getData, createData, updateData, deleteData} = useServices()

    const toggleCreateOpen = () => {
        setCreateOpen(prevValue => !prevValue)
    }

    const toggleUpdateOpen = () => {
        setUpdateOpen(prevValue => !prevValue)
    }

    const update = (updateElement) => {
        setUpdateEl(updateElement);
        toggleUpdateOpen();
    }

    const toggleDeleteOpen = () => {
        setDeleteOpen(prevValue => !prevValue);
    }

    const deleteItem = (id) => {
        setDeleteId(id);
        toggleDeleteOpen()
    }

    const createService = (newService) => {
        createData(newService);
    }

    const updateService = async (data) => {
        updateData(data.id, {
            name: data.name,
                periodicity: data.periodicity,
                description: data.description,
                cost: data.cost
        })      
    };

    const deleteService = (id) => {
        deleteData(id);
    }
 
    return(
        <>
            <Title>Servicios</Title>
            <ServiceList>
                {(services) && services.map((service, index) => {
                    return <ServiceCard key={service.id}
                    isOdd = {(index+1)%2===0}
                    name = {service.name}
                    periodicity = {service.periodicity}
                    description = {service.description}
                    cost = {service.cost}
                    update = {()=>{update(service)}}
                    delete = {()=>{deleteItem(service.id)}}
                    />
                }
                )};
            </ServiceList>

            <AddWidget add={toggleCreateOpen}/>

            {createOpen && 
            <Modal>
                <ServiceForm 
                    action={createService} 
                    close={toggleCreateOpen}/>
            </Modal>}

            {updateOpen && 
            <Modal>
                <ServiceForm 
                    id={updateEl.id}
                    name={updateEl.name} 
                    periodicity={updateEl.periodicity}
                    cost={updateEl.cost}
                    description={updateEl.description}
                    action={updateService} 
                    close={toggleUpdateOpen}/>
            </Modal>}

            {deleteOpen && 
            <Modal>
                <DeleteForm
                    component={"servicio"}
                    delete={()=>deleteService(deleteId)}
                    close={toggleDeleteOpen}/>
            </Modal>}
        </>
    );
}

export default ServicePage;