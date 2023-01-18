import React from "react"
import {Image, Info, Card, Banner, Button} from "./styles";
import EditIcon from "../Icons/EditIcon";
import DeleteIcon from "../Icons/DeleteIcon";

const ClientServiceCard = (props) => {
    return (
    <Card isOdd={props.isOdd}>
        <Banner>
            <Image 
                src="https://images.unsplash.com/photo-1615494937430-65d34f6e5aa8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDJ8fHJlZGVzJTIwc29jaWFsZXN8ZW58MHx8fHwxNjczOTQyMzgw&ixlib=rb-4.0.3&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
                />
        </Banner>
        <Info>
            <h3>{props.name}</h3>
            <p><b>Fecha de ingreso:</b> {props.startDate}</p>
            {props.endDate && 
                <p><b>Fecha de egreso:</b>{props.endDate}</p>
            }
            {!props.endDate && 
            <Button isOdd = {props.isOdd} onClick={props.update}>
                Cancelar servicio
            </Button>}
        </Info>
    </Card>
    );
}

export default ClientServiceCard;