import styled from "styled-components";

export const Card = styled.div`
    background-color: #06357B;
    color: white;
    max-width: 400px;
    height: 500px;
    margin: 30px auto;
    border-radius: 15px;
    padding: 20px 20px 40px 20px;
    display: flex;
    flex-direction: column;

    h2{
        
        margin: 40px 0px 30px 20px;
    }

    p {
        margin: 20px 0;
    }
`;

export const Form = styled.form`
    align-self: center;
    width: 90%;
    height: fit-content;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`;

export const Input = styled.input`
    width: 100%;
    height: 50px;
    margin-bottom: 40px;
    font-size: 16px;

    background-color: #1C4F9B;
    color: white;
    border: none;
    ::placeholder{
        color: #99C3DB;
    }
`;


export const SubmitButton = styled.button`
    color: white;
    font-weight: bold;
    background-color: #147EDF;
    width: 80%;
    padding: 20px;
    font-size: 16px;
    height: 50px;
    border: none;
    line-height: 0px;
    border-radius:  10px;

    :hover{
        cursor: pointer;
        background-color: #99C3DB;
    }
`;

export const CreateButton = styled.button`
    color: white;
    font-weight: bold;
    background-color: #147EDF;
    width: 50%;
    padding: 20px;
    font-size: 16px;
    height: 50px;
    border: none;
    line-height: 0px;
    border-radius:  10px;

    :hover{
        cursor: pointer;
        background-color: #99C3DB;
    }
`;



