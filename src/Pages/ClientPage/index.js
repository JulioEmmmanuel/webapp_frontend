import React, { useEffect, useState } from "react";
import AddWidget from "../../Components/AddWidget";
import DeleteForm from "../../Components/Forms/DeleteForm";
import ClientForm from "../../Components/Forms/ClientForm";
import { Modal } from "../../Components/Modal";


import ClientCard from "../../Components/ClientCard";
import useClients from "../../Hooks/useClients";

import {Title, ServiceList} from "./styles";

const ClientPage = () => {

    const [createOpen, setCreateOpen] = useState(false);
    const [updateOpen, setUpdateOpen] = useState(false);
    const [updateEl, setUpdateEl] = useState(null);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const {clients, getData, createData, updateData, deleteData} = useClients()

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

    const createClient = (newService) => {
        createData(newService);
    }

    const updateClient = async (data) => {
        updateData(data.id, {
            name: data.name,
            lastName: data.lastName,
            gender: data.gender
        })      
    };

    const deleteClient = (id) => {
        deleteData(id);
    }
 
    return(
        <>
            <Title>Clientes</Title>
            <ServiceList>
                {(clients) && clients.map((client, index) => {
                    return <ClientCard key={client.id}
                    isOdd = {(index+1)%2===0}
                    id={client.id}
                    name = {client.name}
                    lastName = {client.lastName}
                    gender = {client.gender}
                    update = {()=>{update(client)}}
                    delete = {()=>{deleteItem(client.id)}}
                    />
                }
                )};
            </ServiceList>

            <AddWidget add={toggleCreateOpen}/>

            {createOpen && 
            <Modal>
                <ClientForm 
                    action={createClient} 
                    close={toggleCreateOpen}/>
            </Modal>}

            {updateOpen && 
            <Modal>
                <ClientForm 
                    id={updateEl.id}
                    name={updateEl.name} 
                    lastName={updateEl.lastName}
                    gender={updateEl.gender}
                    action={updateClient} 
                    close={toggleUpdateOpen}/>
            </Modal>}

            {deleteOpen && 
            <Modal>
                <DeleteForm
                    component={"cliente"}
                    delete={()=>deleteClient(deleteId)}
                    close={toggleDeleteOpen}/>
            </Modal>}
        </>
    );
}

export default ClientPage;