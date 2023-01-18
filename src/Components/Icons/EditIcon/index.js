import React from "react"
import {FaEdit} from "react-icons/fa";
import {IconWrapper} from "./styles";

const EditIcon = (props) => {
    return (
    <IconWrapper onClick={props.update}>
        <FaEdit size={30}/>
    </IconWrapper>
    );
}

export default EditIcon;