import {BrowserRouter, Routes, Route} from "react-router-dom";

import ServicePage from "./Pages/ServicePage";
import ClientPage from "./Pages/ClientPage";
import ChargePage from "./Pages/ChargePage";
import LoginForm from "./Components/Forms/LoginForm";
import Header from "./Components/Header";
import ClientServicePage from "./Pages/ClientServicePage";
import useAuth from "./Hooks/useAuth";
import { AuthProvider } from "./Providers/AuthProvider";
import AuthRoute from "./Components/AuthRoute";
import SignupForm from "./Components/Forms/SignupForm";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="/sign-up" element={<SignupForm/>}/>
          <Route path="/servicios" element={
            <AuthRoute>
              <ServicePage/>
            </AuthRoute>}/>
          <Route path="/servicios/:cliente" element={
            <AuthRoute>
              <ClientServicePage/>
            </AuthRoute>}/>
          <Route path="/clientes" element={
            <AuthRoute>
              <ClientPage/>
            </AuthRoute>}/>
          <Route path="/cargos" element={
            <AuthRoute>
              <ChargePage/>
            </AuthRoute>
          }/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
