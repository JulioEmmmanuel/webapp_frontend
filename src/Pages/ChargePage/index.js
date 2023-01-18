import React from "react";
import ChargeCard from "../../Components/ChargeCard";
import { Title, ChargeList } from "./styles";

import { Modal } from "../../Components/Modal";
import DeleteForm from "../../Components/Forms/DeleteForm";

import { useState } from "react";
import useCharges from "../../Hooks/useCharges";

const ChargePage = () => {

    const [cancelOpen, setCancelOpen] = useState(false);
    const [cancelEl, setCancelEl] = useState(0);
    const {charges, getData, updateData} = useCharges();


    const toggleCancelOpen = () => {
        setCancelOpen(prevValue => !prevValue);
    }

    const cancel = (id) => {
        setCancelEl(id);
        toggleCancelOpen();
    }

    const setPaid = async (id) => {
        let i = charges.findIndex(el => el.id === id);
        let charge = charges[i];
        charge.isPaid = true;
        charge.isCancelled = false;
        updateCharge(id, charge)
    }

    const setCancelled = async (id) => {
        let i = charges.findIndex(el => el.id === id);
        let charge = charges[i];
        charge.isCancelled = true;
        charge.isPaid = false;
        updateCharge(id, charge)
    }

    const updateCharge = async (id, {idSubscription, amount, isPaid, isCancelled, date}) => {
        updateData(id, {
            idSubscription,
            amount,
            isPaid,
            isCancelled,
            date
        })      
    };

    return(
        <>
            <Title>Cargos</Title>
            <ChargeList>
                {(charges) && charges.map(charge => {
                        if(charge.subscriptions){
                            return <ChargeCard key={charge.id}
                                name={charge.subscriptions.clients.name}
                                lastName={charge.subscriptions.clients.lastName}
                                service={charge.subscriptions.services.name}
                                date={charge.date}
                                amount={charge.amount}
                                status={charge.isCancelled ? "Cancelado" : charge.isPaid ? "Pagado" : "No pagado" }
                                pay={()=>setPaid(charge.id)}
                                cancel={()=>cancel(charge.id)}
                            />
                        } else {
                            return <></>
                        }
                    }
                )}
            </ChargeList>


            {cancelOpen && 
            <Modal>
                <DeleteForm
                    component={"cargo"}
                    delete={()=>setCancelled(cancelEl)}
                    close={toggleCancelOpen}/>
            </Modal>}
        </>
    );
}

export default ChargePage;