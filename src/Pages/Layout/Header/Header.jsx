import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { BiSearch } from 'react-icons/bi'; // Importa el ícono de búsqueda
import "./Header.css";
import '../../../index.css';
import SearchBar from './SearchBar/SearchBar';
import AuthButtons from './AuthButtons/AuthButtons';

export default function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState('');
    const [userNames, setUserNames] = useState('');

    useEffect(() => {
        // Verificar si hay un token almacenado en el localStorage
        const token = localStorage.getItem("token");
        if (token) {
            setLoggedIn(true);
            const role = localStorage.getItem("rol");
            setUserRole(role);
            const user = localStorage.getItem("user");
            setUserNames(user);
        }
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Buscar:', searchTerm);
        // Aquí puedes implementar la lógica para manejar la búsqueda
    };

    const handleLogout = () => {
        // Limpiar el localStorage y redirigir al usuario a la página de inicio
        localStorage.clear();
        setLoggedIn(false);
        setUserRole('');
        // Redireccionar a la página de inicio
        window.location.href = "/";
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fontHeader">
          <div className="container-fluid py-2" style={{ backgroundColor: '#F9F7F8', color: 'black' }}>
                <Link className="navbar-brand d-flex mx-auto fw-bold justify-content-center py4" to="/">
                    <img src="/natu_logo.png" alt="Logo" className="img-fluid" width="250" height="55"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contáctanos</Link>
                        </li>
                    </ul>

                    <SearchBar
                        handleSubmit={handleSubmit}
                        handleSearch={handleSearch}
                        searchTerm={searchTerm}
                    />

                    <AuthButtons
                        loggedIn={loggedIn}
                        userRole={userRole}
                        userNames={userNames}
                        handleLogout={handleLogout}
                    />
              </div>
          </div>
      </nav>
    )
}
