import React from "react"
import {FaPlusCircle} from "react-icons/fa";
import {IconWrapper} from "./styles";

const AddWidget = (props) => {
    return (
    <IconWrapper onClick={props.add}>
        <FaPlusCircle size={70}/>
    </IconWrapper>
    );
}

export default AddWidget;