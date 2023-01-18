import styled from "styled-components";

export const Card = styled.div`
    background-color: #06357B;
    width: 30%;
    margin: 30px;
    border-radius: 15px;
    padding: 20px 10px 40px 10px;
    display: flex;
    flex-direction: column;

    h3{
        margin: 40px 0px 30px 20px;
    }
`;

export const Form = styled.form`
    align-self: center;
    width: 90%;
    height: fit-content;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 20px;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    background-color: #1C4F9B;
    color: white;
    border: none;
    ::placeholder{
        color: #99C3DB;
    }
`;

export const Select = styled.select`
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
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
    width: fit-content;
    padding: 20px;
    height: 30px;
    border: none;
    line-height: 0px;
    border-radius:  10px;

    :hover{
        cursor: pointer;
        background-color: #99C3DB;
    }
`;

export const CancelButton = styled.button`
    color: white;
    font-weight: bold;
    background-color: #147EDF;
    width: fit-content;
    padding: 20px;
    height: 30px;
    border: none;
    line-height: 0px;
    border-radius:  10px;
    margin-right: 20px;

    :hover{
        cursor: pointer;
        background-color: #99C3DB;
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
`;

