import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../Providers/AuthProvider";
import {Card, Form, Input, SubmitButton, CreateButton} from "./styles";


const LoginForm = (props) => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useAuthContext();
    const navigate = useNavigate();

    return (
    <Card>
        <h2>Log in</h2>
        
        <Form onSubmit={(event)=>{
            event.preventDefault();
            login({
                "username": name,
                "password": password
            })
        }}>
            <Input placeholder="Usuario o email" 
                value={name}
                onChange={(event) => setName(event.target.value)}/>

            <Input placeholder="Contraseña" 
                value={password}
                onChange={(event) => setPassword(event.target.value)}/>

            <SubmitButton type="submit">Confirmar</SubmitButton>

            <p>¿No tienes una cuenta todavía?</p>
            <CreateButton onClick={() =>
                navigate("/sign-up")
            }>Crear cuenta</CreateButton>

        </Form>
    </Card>
    );
}

export default LoginForm;