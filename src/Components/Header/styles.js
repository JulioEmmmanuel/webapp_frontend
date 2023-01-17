import styled from "styled-components";

export const Head = styled.header`
    background-color: #147EDF;
    width: 100%;
    height: 100px;
    margin-top: 0;
    color: white;
`

export const PageTitle = styled.h2`
    font-size: 30px;
    position: absolute;
    top: 25px;
    margin-left:10%;
`

export const NavLinks= styled.div`
    list-style: none;
    width: 35%;
    position: absolute;
    right: 0;
    margin-right: 5%;
    top: 30px;
    display: flex;
    font-weight: bold;
    font-size: 20px;
    justify-content: space-around;

    .link{
        color: white;
        text-decoration: none;
    }
    
    .link:hover{
        color: #99C3DB;
    }

    .link-selected{
        color: #99C3DB;
        text-decoration: none;
    }
`