import styled from "styled-components";

export const Card = styled.div`
    background-color: ${(props) => props.isOdd ? "#147EDF" : "#06357B"};
    max-width: 25%;
    margin: 30px;
    border-radius: 15px;
`;

export const Banner = styled.div`
    width: 100%;
    height: fit-content;
    position: relative;
`

export const Icons = styled.div`
    width: 40%;
    position: absolute;
    display: flex;
    justify-content: end;
    top: 15px;
    right: 0px;
    z-index: 1;
`

export const Image = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 15px 15px 0px 0px;
`

export const Info = styled.div`
    color: white;

    padding: 15px;
    padding-bottom: 30px;

    h3 {
        margin-top: 5px;
    }

    h4 {
        margin-top: 10px;
    }

    p {
        margin-top: 10px;
    }
`

export const Button = styled.button`
    background-color: white;
    border: none;
    border-radius: 10%;
    color: black;
    font-weight: bold;
    margin-top: 15px;
    padding: 10px;

    :hover{
        cursor: pointer;
        background-color: #D9D9D9;
    }
`