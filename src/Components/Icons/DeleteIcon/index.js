import React from "react"
import {ImCross} from "react-icons/im";
import {IconWrapper} from "./styles";

const DeleteIcon = (props) => {
    return (
    <IconWrapper>
        <ImCross size={30}/>
    </IconWrapper>
    );
}

export default DeleteIcon;