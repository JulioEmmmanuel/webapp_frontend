import React from "react"
import {Head, PageTitle, NavLinks} from "./styles";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
    <Head>
        <PageTitle>
            Services WebApp
        </PageTitle>
        <NavLinks>
            <NavLink className={({isActive}) => 
                "link" + (isActive ? "-selected": "")
            } 
            to="/servicios" 
            >
                Servicios
            </NavLink>
            <NavLink className={({isActive}) => 
                "link" + (isActive ? "-selected": "")
            }  to="/clientes">Clientes</NavLink>
            <NavLink className={({isActive}) => 
                "link" + (isActive ? "-selected": "")
            } to="/cargos">Cargos</NavLink>
        </NavLinks>
    </Head>
    );
}

export default Header;