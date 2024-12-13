import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/components/pages/Login";
import UserDashboard from "../src/components/pages/UserDashboard";
import AdminDashboard from "./components/pages/admindashboard/AdminDashboard";
import AgregarJugadores from "./components/pages/agregarjugadores/AgregarJugadores";
import CargaJugadores from "./components/pages/cargajugadores/CargaJugadores";
import ListarJugadores from "./components/pages/listarjugadores/ListarJugadores";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/Agregarjugadores" element={<AgregarJugadores />} />{" "}
        <Route path="/CargaJugadores" element={<CargaJugadores />} />{" "}
        <Route path="/ListarJugadores" element={<ListarJugadores />} />{" "}
        {/* Nueva ruta */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
