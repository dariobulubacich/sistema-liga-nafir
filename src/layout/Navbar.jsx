import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        {user.rol === "admin" && <Link to="/Dashboard">Dashboard</Link>}
        {user.rol === "admin" && (
          <Link to="/AgregarJugadores">Agregar Jugadores</Link>
        )}
        {user.rol === "admin" && (
          <Link to="/ListarJugadores">Listar Jugadores</Link>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
