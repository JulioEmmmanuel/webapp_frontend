import React, { useState } from "react"
import {Card, Form, Input, SubmitButton, CancelButton, Select, Buttons} from "./styles";


const ClientServicesForm = (props) => {

    const [serviceId, setServiceId] = useState(props.services ? props.services[0].id : -1);

    const addService = (event) => {
        event.preventDefault();
        console.log(serviceId)
        if(serviceId >= 0){
            props.create(serviceId);
            props.close();
        }
    }

    return (
    <Card>
        <h3>Agregar un servicio</h3>

        <Form onSubmit={addService}>

            <Select value={serviceId}
                onChange={(event) => setServiceId(event.target.value)}>
                {props.services.map(service => 
                <option key={service.id} value={service.id}>
                    {service.name}
                </option>
                )}
            </Select>



            <Buttons>
                <CancelButton onClick={props.close}>Cancelar</CancelButton>
                <SubmitButton type="submit">Confirmar</SubmitButton>
            </Buttons>

        </Form>

    </Card>
    );
}

export default ClientServicesForm;