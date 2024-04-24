import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button, Form, NavDropdown } from 'react-bootstrap'; // Importa los componentes de react-bootstrap
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
        <Navbar expand="lg" className="bg-body-tertiary shadow fontHeader">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img
                        src="/natu_logo.png"
                        width="200"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                    >
                        {userRole === 'NoRegistrado' || userRole === 'Comprador' ? (
                            <>
                                <Nav.Link href="/products">Productos</Nav.Link>
                                <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Alimentos</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Productos lácteos</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">Cuidado personal</NavDropdown.Item>
                                    <NavDropdown.Item href="#action6">Productos para el hogar</NavDropdown.Item>
                                    <NavDropdown.Item href="#action7">Suplementos dietéticos</NavDropdown.Item>
                                    <NavDropdown.Item href="#action8">Cuidado del jardín</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/about">Nosotros</Nav.Link>
                                <Nav.Item>
                                    <SearchBar 
                                        handleSubmit={handleSubmit}
                                        handleSearch={handleSearch}
                                        searchTerm={searchTerm}
                                    />
                                </Nav.Item>
                            </>
                        ) : userRole === 'Vendedor' ? (
                            <>
                                <Nav.Link href="/mis-productos">Mis productos</Nav.Link>
                                <Nav.Link href="/envios">Envíos</Nav.Link>
                            </>
                        ) : userRole === 'Administrador' ? (
                            <>
                                <Nav.Link href="/vendedores">Vendedores</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link href="/products">Productos</Nav.Link>
                                <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Alimentos</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Productos lácteos</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">Cuidado personal</NavDropdown.Item>
                                    <NavDropdown.Item href="#action6">Productos para el hogar</NavDropdown.Item>
                                    <NavDropdown.Item href="#action7">Suplementos dietéticos</NavDropdown.Item>
                                    <NavDropdown.Item href="#action8">Cuidado del jardín</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/about">Nosotros</Nav.Link>
                                <Nav.Item>
                                    <SearchBar 
                                        handleSubmit={handleSubmit}
                                        handleSearch={handleSearch}
                                        searchTerm={searchTerm}
                                    />
                                </Nav.Item>
                            </>
                        )}
                    </Nav>
                    <Nav>
                        <AuthButtons 
                            loggedIn={loggedIn}
                            userNames={userNames}
                            handleLogout={handleLogout}
                        />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
