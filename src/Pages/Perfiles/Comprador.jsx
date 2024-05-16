import React, {useEffect, useState} from 'react';
import '../Perfiles/Perfiles.css'; // Asegúrate de que la ruta del archivo CSS sea correcta
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


/**
 * @file Register.jsx
 * @desc This file contains the Register component, which is responsible for rendering and handling the registration form.
 */
export default function Comprador() {
    const api_url = process.env.REACT_APP_API_URL;

    //--- Valores de los campos del formulario de registro ---//

    // Datos Personales
    const [Nombres, setNombres] = useState(''); // Agregué el estado Nombres
    const [Apellidos, setApellidos] = useState(''); // Agregué el estado Apellidos
    const [Documento, setDocumento] = useState(null); // Agregué el estado Documento
    const [Email, setEmail] = useState(''); // Agregué el estado Email
    const [Telefono, setTelefono] = useState(null); // Agregué el estado Telefono
    const [FechaNacimiento, setFechaNacimiento] = useState(null); // Agregué el estado FechaNacimiento

    // Datos de la Dirección

    const [Departamento, setDepartamento] = useState(''); // Agregué el estado Departamento
    const [Municipio, setMunicipio] = useState(''); // Agregué el estado Municipio
    const [Direccion, setDireccion] = useState(''); // Agregué el estado Direccion
    const [Descripcion, setDescripcion] = useState(''); // Agregué el estado Descripcion

    
    //-- Traer Departamentos y Municipios --//

    // Traer Departamentos
    const [Departamentos, setDepartamentos] = useState([]); // Agregué el estado Departamentos

    useEffect(() => {
        fetch(`${api_url}/departamentos`)
        .then(response => response.json())
        .then(data => setDepartamentos(data.body))
    }
    , []);


    // Traer Municipios, según el Departamento seleccionado, si es que se selecciona alguno, de lo contrario traer todos los Municipios
    const [Municipios, setMunicipios] = useState([]); // Agregué el estado Municipios

    
    useEffect(() => {
        if (Departamento !== '') {
            fetch(`${api_url}/municipios/filter/${Departamento}`)
            .then(response => response.json())
            .then(data => setMunicipios(data.body))
        } else {
            fetch(`${api_url}/municipios`)
            .then(response => response.json())
            .then(data => setMunicipios(data.body))
        }
    }
    , [Departamento]);

    // Función para habilitar la edición de los campos
    const [editMode, setEditMode] = useState(false);

    //--- Validación de los campos del formulario de registro ---//

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        if (form.checkValidity() === true && editMode === true) {
            registerUser();
            setEditMode(false);
        }
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };
    
    //-- Conexion con la API para el registro de un usuario --//

    const registerUser = async () => {
        const data = {
            Nombres_comprador: Nombres,
            Apellidos_comprador: Apellidos,
            Documento_comprador: Documento,
            Correo_usuario: Email,
            Telefono_comprador: Telefono,
            Fecha_nacimiento_comprador: FechaNacimiento,
            MUNICIPIO_ID_Municipio: Municipio,
            Direccion: Direccion,
            Descripcion_adicional: Descripcion,
           
        };

        const response = await fetch(`${api_url}/compradores`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();
        if (responseData.error) {
            if(responseData.body.includes("Duplicate entry")) {
                toast.error("El correo electrónico ya está registrado.");
            } else {
                toast.error(responseData.body);
            }
        } else {
            toast.success("Usuario registrado exitosamente.");
        }

        console.log(responseData);
    }



    return (
        <div className='register-container'>
            <ToastContainer position='bottom-right'/>
            {/* Scripts */}
            <div id="background1">
                <div id="shape1" />
                <div id="shape1" />
            </div>
            <div id="register-container">
                <img src="Natu_Logo_.png" alt="image" />
                <Form noValidate validated={validated} onSubmit={handleSubmit} id='register-form'>
                    <h3 >Datos Personales</h3>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control
                                maxLength={60}
                                required
                                type="text"
                                placeholder="Nombres"
                                value={Nombres}
                                onChange={(e) => setNombres(e.target.value)}
                                disabled={editMode === false}
                                
                            />
                            <Form.Control.Feedback type="invalid">Por favor ingresa tus nombres.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control
                                maxLength={60}
                                required
                                type="text"
                                placeholder="Apellidos"
                                value={Apellidos}
                                onChange={(e) => setApellidos(e.target.value)}
                                disabled={editMode === false}
                            />
                            <Form.Control.Feedback type="invalid">Por favor ingresa tus apellidos.</Form.Control.Feedback>
                        </Form.Group>
                        
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Documento</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    maxLength={14}
                                    type="number"
                                    placeholder="Documento"
                                    aria-describedby="inputGroupPrepend"
                                    value={Documento}
                                    onChange={(e) => setDocumento(e.target.value)}
                                    required
                                    disabled
                                />
                                <Form.Control.Feedback type="invalid">Por favor ingresa tu número de documento.</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="8" controlId="validationCustom03">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                maxLength={60}
                                type="email"
                                placeholder="Email"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled
                            />
                            <Form.Control.Feedback type="invalid">Por favor ingresa un correo electrónico válido.</Form.Control.Feedback>
                        </Form.Group>
                        
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Teléfono"
                                value={Telefono}
                                onChange={(e) => setNombres(e.target.value)}
                                disabled={editMode === false}
                                required
                                
                            />
                            <Form.Control.Feedback type="invalid">Por favor ingresa tu número de teléfono.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom05">
                            <Form.Label>Fecha de Nacimiento</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Fecha de Nacimiento"
                                value={FechaNacimiento}
                                onChange={(e) => setFechaNacimiento(e.target.value)}
                                required
                                disabled={editMode === false}
                            />
                            <Form.Control.Feedback type="invalid">Por favor selecciona tu fecha de nacimiento.</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <h3 >Datos de la Dirección</h3>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom06">
                            <Form.Label>Departamento</Form.Label>
                            <Form.Select
                                required
                                value={Departamento}
                                onChange={(e) => setDepartamento(e.target.value)}
                                disabled = {editMode === false}
                            >
                                <option value="" style={{color: ""}}>Selecciona un departamento</option>
                                {Departamentos.map((departamento) => (
                                    <option key={departamento.ID_Departamento} value={departamento.ID_Departamento}>{departamento.Nombre_departamento}</option>
                                ))}
                                
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">Por favor selecciona un departamento.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom07">
                            <Form.Label>Ciudad o Municipio</Form.Label>
                            <Form.Select
                                required
                                value={Municipio}
                                onChange={(e) => setMunicipio(e.target.value)}
                                disabled = {editMode === false}
                            >
                                <option value="">Selecciona un municipio</option>
                                {Municipios.map((municipio) => (
                                    <option key={municipio.ID_Municipio} value={municipio.ID_Municipio}>{municipio.Nombre_municipio}</option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">Por favor selecciona un municipio.</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom08">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                maxLength={45}
                                type="text"
                                placeholder="Dirección"
                                value={Direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                                required
                                disabled = {editMode === false}
                            />
                            <Form.Control.Feedback type="invalid">Por favor ingresa tu dirección.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom09">
                            <Form.Label>Descripción adicional</Form.Label>
                            <Form.Control
                                maxLength={100}
                                as="textarea"
                                placeholder="Descripción"
                                value={Descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                disabled = {editMode === false}
                            />
                        </Form.Group>
                    </Row>
                    
                    <div className="botones-accion" style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", marginTop: "50px"}}>
                        {editMode ? (
                            <>
                                <Button variant='outline-success' type="submit" className="boton-guardar" >
                                    Guardar Cambios
                                </Button>

                                <Button variant="outline-danger" className="boton-cancelar" onClick={toggleEditMode}>
                                    Cancelar Edición
                                </Button>
                            </>
                             ) : (
                                <Button variant="outline-success" className="boton-editar" onClick={toggleEditMode}>
                                    Modificar Datos
                                </Button>
                        )}
                    </div>
                </Form>
            </div>
            
        </div>
    );
}