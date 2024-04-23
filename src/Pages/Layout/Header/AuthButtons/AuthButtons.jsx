import React from 'react';
import { Link } from "react-router-dom";
import "./AuthButtons.css";

export default function AuthButtons({ loggedIn, userRole, userNames, handleLogout }) {
    return (
        <div>
            {loggedIn ? (
                <>
                    {userRole === 'Vendedor' ? (
                        <>
                            <Link to="/misproductos" className="btn btn-outline-primary ms-2 px-5">
                                Mis Productos
                            </Link>
                            <Link to="/ordenes" className="btn btn-outline-primary ms-2 px-5">
                                Ordenes
                            </Link>
                        </>
                    ) : (
                        <Link to="/perfil" className="btn btn-outline-primary ms-2 px-5" id='btn-login'>
                            {userNames}
                        </Link>
                    )}
                    <button onClick={handleLogout} className="btn btn-outline-primary ms-2 px-5" id='btn-login'>
                        Cerrar Sesión
                    </button>
                </>
            ) : (
                <>
                    <Link to="/login" className="btn btn-outline-primary ms-2 px-5" id='btn-login'>
                        Iniciar Sesión
                    </Link>
                    <Link to="/register" className="btn btn-outline-primary ms-2 px-5" id='btn-register'>
                        Registrarse
                    </Link>
                </>
            )}
        </div>
    );
}
