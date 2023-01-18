import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../Providers/AuthProvider";
import {Card, Form, Input, SubmitButton, CreateButton} from "./styles";


const SignupForm = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {createUser} = useAuthContext();
    const navigate = useNavigate();

    return (
    <Card>
        <h2>Sign up</h2>
        
        <Form onSubmit={(event)=>{
            event.preventDefault();
            createUser({
                "username": name,
                "email": email,
                "password": password
            })
        }}>
            <Input placeholder="Usuario" 
                value={name}
                onChange={(event) => setName(event.target.value)}/>

            <Input placeholder="Email" 
                value={email}
                onChange={(event) => setEmail(event.target.value)}/>

            <Input placeholder="Contraseña" 
                value={password}
                onChange={(event) => setPassword(event.target.value)}/>

            <SubmitButton type="submit">Confirmar</SubmitButton>

        </Form>
    </Card>
    );
}

export default SignupForm;