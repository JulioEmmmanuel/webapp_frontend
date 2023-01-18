import React, { useState } from "react"
import {Card, Form, Input, SubmitButton, CancelButton, Select, Buttons} from "./styles";


const ServiceForm = (props) => {

    const [name, setName] = useState(props.name ?? "");
    const [periodicity, setPeriodicity] = useState(props.periodicity ?? "Quincenal");
    const [cost, setCost] = useState(props.cost ?? "");
    const [description, setDescription] = useState(props.description ?? "");


    const createElement = (event) => {
        event.preventDefault();
        const newElement = {
            name,
            periodicity,
            description,
            cost
        }
        if(props.id){
            newElement.id = props.id
        }
        props.action(newElement);
        props.close();

    }

    return (
    <Card>
        <h3>{props.name ? "Actualizar servicio" : "Crear nuevo servicio"}</h3>
        
        <Form onSubmit={createElement}>
            <Input placeholder="Nombre" 
                value={name}
                onChange={(event) => setName(event.target.value)}/>

            <Select value={periodicity}
                onChange={(event) => setPeriodicity(event.target.value)}>
                <option value="Quincenal">Quincenal</option>
                <option value="Mensual">Mensual</option>
                <option value="Semestral">Semestral</option>
                <option value="Anual">Anual</option>
            </Select>

            <Input placeholder="Costo" 
                value={cost}
                onChange={(event) => setCost(event.target.value)}/>

            <Input placeholder="Descripción"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />

            <Buttons>
                <CancelButton onClick={props.close}>Cancelar</CancelButton>
                <SubmitButton type="submit">Confirmar</SubmitButton>
            </Buttons>

        </Form>
    </Card>
    );
}

export default ServiceForm;