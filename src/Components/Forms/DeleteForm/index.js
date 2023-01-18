import React from "react"
import {Card, Buttons, CancelButton, DeleteButton} from "./styles";


const DeleteForm = (props) => {

    return (
    <Card>
        <h3>¿Estás segurx de que deseas eliminar el servicio?</h3>
        
        <Buttons>
            <CancelButton onClick={props.close}>Cancelar</CancelButton>
            <DeleteButton onClick={()=>{
                props.delete();
                props.close();
            }}
            >
                Eliminar
            </DeleteButton>
        </Buttons>

    </Card>
    );
}

export default DeleteForm;