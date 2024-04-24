import "./Login.css";

export default function Login() {
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
                                <input type="text" id="username" className="form-control" placeholder="Email" />
                                <label htmlFor="password">Contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Password"
                                />
                                <a id="link2" href="reset">
                                    Olvide mi contraseña
                                </a>
                                <button
                                    type="button"
                                    id="btnLogin"
                                    className="btn-primary"
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
