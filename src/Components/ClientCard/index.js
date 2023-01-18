import React from "react"
import {Image, Info, Card, Banner, Icons, Button} from "./styles";
import EditIcon from "../Icons/EditIcon";
import DeleteIcon from "../Icons/DeleteIcon";
import { useNavigate } from "react-router-dom";

const ClientCard = (props) => {
    const navigate = useNavigate();

    return (
    <Card isOdd={props.isOdd}>
        <Banner>
            <Image 
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fHByb2ZpbGV8ZW58MHx8fHwxNjc0MDA0Mzgz&ixlib=rb-4.0.3&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
                />
            <Icons>
                <EditIcon update={props.update}/>
                <DeleteIcon delete={props.delete}/>
            </Icons>
        </Banner>
        <Info>
            <h3>{`${props.name} ${props.lastName}`}</h3> 
            <h4>{props.gender}</h4>
            <Button isOdd = {props.isOdd} onClick={()=>{
                navigate(`/servicios/${props.id}`);

            }}>Servicios</Button>
        </Info>
    </Card>
    );
}

export default ClientCard;