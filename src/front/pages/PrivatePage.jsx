import React from 'react'
import { useNavigate } from 'react-router-dom';

export const PrivatePage = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); //Elimina Token
    navigate("/");
  };

  return (
    <>
      <div>
        <h1>Esto sería el inicio de una pagina web que requiere iniciar sesión, debido al tiempo no he podido agregar CSS</h1>
        <h3>No obstante aquí dejo un "Button" de cerrar sesión el cual normalmente pondría en un "Navbar"</h3>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </>
  );
};
