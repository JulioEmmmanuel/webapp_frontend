import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const AuthContext = React.createContext();

function AuthProvider({ children }) {


  const {login, createUser, loggedIn} = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    if(loggedIn){
        navigate('/servicios');
    }
  }, [loggedIn])

  const auth = {
    login,
    createUser,
    loggedIn
  }

  return (
    <AuthContext.Provider
      value={auth}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuthContext() {
  const auth = React.useContext(AuthContext);
  return auth;
}

export {
  AuthProvider,
  useAuthContext,
}