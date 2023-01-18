import React from "react"
import {Image, Info, Card, Banner, Icons} from "./styles";
import EditIcon from "../Icons/EditIcon";
import DeleteIcon from "../Icons/DeleteIcon";

const ServiceCard = (props) => {
    return (
    <Card isOdd={props.isOdd}>
        <Banner>
            <Image 
                src="https://images.unsplash.com/photo-1615494937430-65d34f6e5aa8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDJ8fHJlZGVzJTIwc29jaWFsZXN8ZW58MHx8fHwxNjczOTQyMzgw&ixlib=rb-4.0.3&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
                />
            <Icons>
                <EditIcon update={props.update}/>
                <DeleteIcon delete={props.delete}/>
            </Icons>
        </Banner>
        <Info>
            <h3>{props.name}</h3>
            <h4>{props.periodicity}</h4>
            <p><b>Costo:</b> {props.cost}</p>
            <p>{props.description}</p>
        </Info>
    </Card>
    );
}

export default ServiceCard;