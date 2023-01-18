import styled from "styled-components";

export const Card = styled.div`
    background-color: #06357B;
    color: white;
    width: 75%;
    margin: 20px;
    padding: 30px;
    display: flex;
    justify-content: space-around;
    border-radius: 15px;
`;

export const Data = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const PayButton = styled.button`
    color: white;
    font-weight: bold;
    background-color: #147EDF;
    width: fit-content;
    padding: 25px;
    width: 120px;
    height: 30px;
    margin-right: 30px;
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
    background-color: #C61717;
    width: fit-content;
    padding: 25px;
    width: 120px;
    height: 30px;
    border: none;
    line-height: 0px;
    border-radius:  10px;
    margin-right: 20px;

    :hover{
        cursor: pointer;
        background-color: #A41818;
    }
`;

export const Buttons = styled.div`
    margin-left: 20px;
    display: flex;
    justify-content: space-around;
`;