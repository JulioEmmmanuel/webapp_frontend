import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../Providers/AuthProvider"

const AuthRoute = ({children}) => {

    const auth = useAuthContext();
    if(!auth.loggedIn){
        return <Navigate to="/"/>
    }   

    return children;
}

export default AuthRoute;