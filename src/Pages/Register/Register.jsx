import React, { useEffect, useState } from 'react';
import './Register.css'; // Asegúrate de que la ruta del archivo CSS sea correcta

export default function Register() {
    const [Nombres, setNombres] = useState('');
    const [Apellidos, setApellidos] = useState('');
    const [Email, setEmail] = useState('');
    const [Telefono, setTelefono] = useState('');
    const [Direccion, setDireccion] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    const checkInputs = () => {
        if (Password !== ConfirmPassword) {
            alert('¡Las contraseñas no coinciden!');
        } else if (Nombres === '' || Email === '' || Telefono === '' || Direccion === '' || Password === '' || ConfirmPassword === '') {
            alert('¡Por favor llena todos los campos!');
        } else {
            registerUser();
        }
    };
    const headerStyles = {
        fontWeight: 'bold',
        backgroundColor: 'lightgray',
        // Agrega otros estilos según sea necesario
      };
      

    const registerUser = () => {
        fetch('http://localhost:4000/api/compradores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Nombres_comprador: Nombres,
                Correo_usuario: Email,
                Teléfono_comprador: Telefono,
                Dirección_comprador: Direccion,
                Contraseña_encriptada: Password
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    return alert(data.error);
                } else {
                    alert('¡Usuario registrado!');
                    window.location.href = '/login';
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

    }

    return (
        <div className='register-container'>
            <div id="background">
                <div id="shape"></div>
                <div id="shape"></div>
            </div>

            <title>Register | Natu</title>
            {/* Scripts */}
            <meta
                name="google-signin-client_id"
                content="134771054109-qc1doubbb2akoqg3p0qre6ebheopsq9m.apps.googleusercontent.com"
            />
            <link href="Register.css" rel="stylesheet" />

            <form id="register-form">
                <img src="logo.png" id="img-centrada" alt="Logo" />
                <label htmlFor="username">Nombre Completo:</label>
                <input
                    type="text"
                    placeholder="Nombres"
                    id="cuadros"
                    value={Nombres}
                    onChange={(e) => setNombres(e.target.value)}
                />

                <label htmlFor="username">Apellidos:</label>
                <input
                    type="text"
                    placeholder="Apellidos"
                    id="cuadros"
                    value={Apellidos}
                    onChange={(e) => setApellidos(e.target.value)}
                />

                <label htmlFor="email">Correo Electrónico:</label>
                <input
                    type="email"
                    id="cuadros"
                    placeholder="email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="telefono">Número de Teléfono:</label>
                <input
                    type="text"
                    id="cuadros"
                    placeholder="(+57)"
                    value={Telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />
                <div className="col direccion">
                    <label htmlFor="direccion">Dirección:</label>
                    <input
                        type="text"
                        id="cuadros"
                        placeholder="Dirección"
                        value={Direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                    />
                </div>
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="cuadros"
                    placeholder="Al menos 8 caracteres"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="confirmPassword">Confirme su Contraseña</label>
                <input
                    type="password"
                    placeholder="Repite la contraseña"
                    id="cuadros"
                    value={ConfirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <input
                    type="button"
                    id="botonRegistro"
                    value="Registrarse"
                    onClick={checkInputs}
                />
                <div className="vinculos">
                    <a id="link" href="login">
                        Ir a login
                    </a>
                    <a id="link-1" href="/">
                        Volver al inicio
                    </a>
                </div>
            </form>
        </div>
    );
}
