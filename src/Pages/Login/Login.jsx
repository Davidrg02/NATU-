import React, {useEffect, useState} from "react";
import "./Login.css";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const checkInputs = () => {
        if (email === "" || password === "") {
            alert("Por favor llena todos los campos");
        } else {
            loginUser();
        }
    };

    const loginUser = () => {
        fetch("http://localhost:4000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Correo_usuario: email,
                password: password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    return alert("Inicio de sesión fallido");
                } else {
                    localStorage.setItem("token", data.body.token);
                    localStorage.setItem("rol", data.body.rol);
                    localStorage.setItem("id", data.body.user[0].USUARIO_ID_Usuario);
                    if (data.body.rol === "Vendedor") {
                        localStorage.setItem("user", data.body.user[0].Nombre_vendedor);
                    } else if (data.body.rol === "Comprador") {
                        localStorage.setItem("user", data.body.user[0].Nombres_comprador);
                    }

                    alert("¡Inicio de sesión exitoso!");
                    window.location.href = "/";
                }
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });
    }


    return (
            <div className='register-container' id="login">
                <div id="background">
                    <div id="shape"></div>
                    <div id="shape"></div>
                </div>
                <title>Login | Natu</title>
                            <form id="login-form">
                                <div id="logo">   
                                </div>
                                <img src="Natu_Logo_.png" id="img-centrada" />
                                <label htmlFor="username">Correo de usuario</label>
                                <input 
                                    type="text" 
                                    id="username" 
                                    className="form-control" 
                                    placeholder="Email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label htmlFor="password">Contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {/*}
                                <a id="link2" href="reset">
                                    Olvide mi contraseña
    </a>*/}
                                <button
                                    type="button"
                                    id="btnLogin"
                                    onClick={checkInputs}
                                >
                                    Iniciar sesión
                                </button>
                                <a id="link2" href="register">
                                    ¿Aun no estoy registrado?
                                </a>
                            </form>
            </div>
    );
}