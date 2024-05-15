  import React, { useState } from 'react';
  import './Perfiles.css';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
  
  export default function Comprador() {
    const [datosPersonales, setDatosPersonales] = useState({
      nombres: 'Juan Pérez',
      apellidos: 'Gómez',
      documento: 123456789,
      email: 'juan.perez@email.com',
      telefono: 3123456789,
      fechaNacimiento: '1980-01-01',
    });
    const [datosDireccion, setDatosDireccion] = useState({
      departamento: 'Cundinamarca',
      direccion: 'Carrera 10 # 12-34',
      descripcionAdicional: 'Casa con jardín y zona BBQ',
    });
    const [datosCuenta, setDatosCuenta] = useState({
      contrasena: '123456',
      confirmarContrasena: '123456',
    });
  
    const [editarDatos, setEditarDatos] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Enviar datos a API o base de datos
      console.log('Datos del vendedor:', {
        datosPersonales,
        datosDireccion,
        datosCuenta,
      });
      setEditarDatos(false);
    };
  
    const toggleEditarDatos = () => {
      setEditarDatos(!editarDatos);
    };
  
    return (
      <div className="contenedor-1">
        <div className="contenedor-perfil-vendedor">
          <h2>Perfil de Vendedor</h2>
  
          <h3>Datos Personales</h3>
            {editarDatos ? (
              <div className="grupo-datos-editable">
                <label htmlFor="nombres">
                  <span>Nombres:</span>
                  <input
                    type="text"
                    id="nombres"
                    name="nombres"
                    value={datosPersonales.nombres}
                    onChange={(event) =>
                      setDatosPersonales({ ...datosPersonales, nombres: event.target.value })
                    }
                    required
                  />
                </label>
                <label htmlFor="apellidos">
                  <span>Apellidos:</span>
                  <input
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    value={datosPersonales.apellidos}
                    onChange={(event) =>
                      setDatosPersonales({ ...datosPersonales, apellidos: event.target.value })
                    }
                    required
                  />
                </label>
                <label htmlFor="documento">
                  <span>Documento:</span>
                  <input
                    type="text"
                    id="documento"
                    name="documento"
                    value={datosPersonales.documento}
                    onChange={(event) =>
                      setDatosPersonales({ ...datosPersonales, documento: event.target.value })
                    }
                    required
                  />
                </label>
                <label htmlFor="email">
                  <span>Email:</span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={datosPersonales.email}
                    onChange={(event) =>
                      setDatosPersonales({ ...datosPersonales, email: event.target.value })
                    }
                    required
                  />
                </label>
                <label htmlFor="telefono">
                  <span>Teléfono:</span>
                  <input
                    type="text"
                    id="telefono"
                    name="telefono"
                    value={datosPersonales.telefono}
                    onChange={(event) =>
                      setDatosPersonales({ ...datosPersonales, telefono: event.target.value })
                    }
                    required
                  />
                </label>
                <label htmlFor="fechaNacimiento">
                  <span>Fecha de Nacimiento:</span>
                  <input
                    type="date"
                    id="fechaNacimiento"
                    name="fechaNacimiento"
                    value={datosPersonales.fechaNacimiento}
                    onChange={(event) =>
                      setDatosPersonales({ ...datosPersonales, fechaNacimiento: event.target.value })
                    }
                    required
                  />
                </label>
              </div>
            ) : (
              <div>
                <div className="grupo-datos">
                  <span>Nombres:</span>
                  <p>{datosPersonales.nombres}</p>
                </div>
                <div className="grupo-datos">
                  <span>Apellidos:</span>
                  <p>{datosPersonales.apellidos}</p>
                </div>
                <div className="grupo-datos">
                  <span>Documento:</span>
                  <p>{datosPersonales.documento}</p>
                </div>
                <div className="grupo-datos">
                  <span>Email:</span>
                  <p>{datosPersonales.email}</p>
                </div>
                <div className="grupo-datos">
                  <span>Teléfono:</span>
                  <p>{datosPersonales.telefono}</p>
                </div>
                <div className="grupo-datos">
                  <span>Fecha de Nacimiento:</span>
                  <p>{datosPersonales.fechaNacimiento}</p>
                </div>
              </div>
            )}
  
  
          
  
            <h3>Datos de Dirección</h3>
          
            {editarDatos ? (
              <div className="grupo-datos-editable">
                <label htmlFor="departamento">
                  <span>Departamento:</span>
                  <input
                    type="text"
                    id="departamento"
                    name="departamento"
                    value={datosDireccion.departamento}
                    onChange={(event) =>
                      setDatosDireccion({ ...datosDireccion, departamento: event.target.value })
                    }
                    required
                  />
                </label>
                <label htmlFor="direccion">
                  <span>Dirección:</span>
                  <input
                    type="text"
                    id="direccion"
                    name="direccion"
                    value={datosDireccion.direccion}
                    onChange={(event) =>
                      setDatosDireccion({ ...datosDireccion, direccion: event.target.value })
                    }
                    required
                  />
                </label>
                <label htmlFor="descripcionAdicional">
                  <span>Descripción Adicional:</span>
                  <textarea
                    id="descripcionAdicional"
                    name="descripcionAdicional"
                    value={datosDireccion.descripcionAdicional}
                    onChange={(event) =>
                      setDatosDireccion({
                        ...datosDireccion,
                        descripcionAdicional: event.target.value,
                      })
                    }
                    required
                  />
                </label>
              </div>
            ) : (
              <div>
                <div className="grupo-datos">
                  <span>Departamento:</span>
                  <p>{datosDireccion.departamento}</p>
                </div>
                <div className="grupo-datos">
                  <span>Dirección:</span>
                  <p>{datosDireccion.direccion}</p>
                </div>
                <div className="grupo-datos">
                  <span>Descripción Adicional:</span>
                  <p>{datosDireccion.descripcionAdicional}</p>
                </div>
              </div>
            )}
  
            <h3>Datos de la Cuenta</h3>
           
            {editarDatos ? (
              <div className="grupo-datos-editable">
                <label htmlFor="contrasena">
                  <span>Contraseña:</span>
                  <input
                    type="password"
                    id="contrasena"
                    name="contrasena"
                    value={datosCuenta.contrasena}
                    onChange={(event) =>
                      setDatosCuenta({ ...datosCuenta, contrasena: event.target.value })
                    }
                    required
                  />
                </label>
                <label htmlFor="confirmarContrasena">
                  <span>Confirmar Contraseña:</span>
                  <input
                    type="password"
                    id="confirmarContrasena"
                    name="confirmarContrasena"
                    value={datosCuenta.confirmarContrasena}
                    onChange={(event) =>
                      setDatosCuenta({ ...datosCuenta, confirmarContrasena: event.target.value })
                    }
                    required
                  />
                </label>
              </div>
            ) : (
              <div>
                <div className="grupo-datos">
                  <span>Contraseña:</span>
                  <p>********</p>
                </div>
                <div className="grupo-datos">
                  <span>Confirmar Contraseña:</span>
                  <p>********</p>
                </div>
              </div>
            )}
  
            <div className="botones-accion">
              {editarDatos ? (
                <button className="boton-cancelar" onClick={toggleEditarDatos}>
                  <FontAwesomeIcon icon={faTimes} /> Cancelar Edición
                </button>
                ) : (
                <button className="boton-editar" onClick={toggleEditarDatos}>
                  <FontAwesomeIcon icon={faEdit} /> Modificar Datos
                </button>
                )}
                {editarDatos && (
                  <button type="submit" className="boton-guardar" onClick={handleSubmit}>
                      Guardar Cambios
                  </button>
                      )}
              </div>
          </div>
  
          
        </div>
    );
  }
  