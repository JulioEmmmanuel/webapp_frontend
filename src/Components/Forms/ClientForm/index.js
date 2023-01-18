import React, { useState } from "react"
import {Card, Form, Input, SubmitButton, CancelButton, Select, Buttons} from "./styles";


const ClientForm = (props) => {

    const [name, setName] = useState(props.name ?? "");
    const [lastName, setLastName] = useState(props.lastName ?? "");
    const [gender, setGender] = useState(props.gender ?? "Masculino");

    const createElement = (event) => {
        event.preventDefault();
        const newElement = {
            name,
            lastName,
            gender,
        }
        if(props.id){
            newElement.id = props.id
        }
        props.action(newElement);
        props.close();
    }

    return (
    <Card>
        <h3>{props.name ? "Actualizar cliente" : "Crear nuevo cliente"}</h3>
        
        <Form onSubmit={createElement}>
            <Input placeholder="Nombre" 
                value={name}
                onChange={(event) => setName(event.target.value)}/>

            <Input placeholder="Apellido" 
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}/>

            <Select value={gender}
                onChange={(event) => setGender(event.target.value)}>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="No binario">No binario</option>
                <option value="Otro">Otro</option>
            </Select>



            <Buttons>
                <CancelButton onClick={props.close}>Cancelar</CancelButton>
                <SubmitButton type="submit">Confirmar</SubmitButton>
            </Buttons>

        </Form>
    </Card>
    );
}

export default ClientForm;