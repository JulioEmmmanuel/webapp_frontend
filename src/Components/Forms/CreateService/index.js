import React, { useState } from "react"
import {Card, Form, Input, Button, Select} from "./styles";


const CreateService = (props) => {

    const [name, setName] = useState("");
    const [periodicity, setPeriodicity] = useState("");
    const [description, setDescription] = useState("");


    const createElement = (event) => {
        event.preventDefault();
        const newElement = {
            name,
            periodicity,
            description
        }
        props.create(newElement);
        props.close();

    }

    return (
    <Card>
        <h3>Crear nuevo servicio</h3>
        <Form onSubmit={createElement}>
            <Input placeholder="Nombre" 
                value={name}
                onChange={(event) => setName(event.target.value)}/>
            <Select placeholder="Periodicidad"
                onSelect={(event) => setPeriodicity(event.target.value)}>
                <option value="Quincenal">Quincenal</option>
                <option value="Mensual">Mensual</option>
                <option value="Semestral">Semestral</option>
                <option value="Anual">Anual</option>
            </Select>
            <Input placeholder="Descripción"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <Button type="submit">Confirmar</Button>
        </Form>
    </Card>
    );
}

export default CreateService;