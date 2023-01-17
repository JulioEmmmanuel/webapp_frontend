import {BrowserRouter, Routes, Route} from "react-router-dom";

import ServicePage from "./Pages/ServicePage";
import ClientPage from "./Pages/ClientPage";
import ChargePage from "./Pages/ChargePage";
import LoginPage from "./Pages/ChargePage";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/servicios" element={<ServicePage/>}/>
        <Route path="/clientes" element={<ClientPage/>}/>
        <Route path="/cargos" element={<ChargePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
