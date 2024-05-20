import React, { useEffect, useState } from 'react';
import './Soporte.css'; // Asegúrate de que la ruta del archivo CSS sea correcta
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Quill from 'quill';
import ImageCompress from 'quill-image-compress'; // Importar quill-image-compress

Quill.register('modules/imageCompress', ImageCompress); // Registrar quill-image-compress

export default function Soporte() {
    const api_url = null;
    // const api_url = process.env.REACT_APP_API_URL;

    //--- Valores de los campos del formulario de registro ---//

    const [Documento, setDocumento] = useState(null); // Agregué el estado Documento
    const [Email, setEmail] = useState(''); // Agregué el estado Email
    // Datos de la Dirección

    const [Direccion, setDireccion] = useState(''); // Agregué el estado Direccion
    const [Descripcion, setDescripcion] = useState(''); // Agregué el estado Descripcion

    // Define un estado para controlar si el modal de términos y condiciones está abierto o cerrado
    const [showTermsModal, setShowTermsModal] = useState(false);

    // Función para abrir el modal de términos y condiciones
    const handleShowTermsModal = () => setShowTermsModal(true);

    // Función para cerrar el modal de términos y condiciones
    const handleCloseTermsModal = () => setShowTermsModal(false);
    const [content, setContent] = useState("");
    const [state, setState] = useState({
      title: "",
      content: "",
      postType: "",
      tags: [],
      ingredients: [],
    });

    //--
    const handleCommentInput = (value) => {
        setContent(value);
        setState({
          ...state,
          content: value,
        });
      };

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

    };

    // Función para mostrar el mensaje de retroalimentación de la validación de la contraseña

    //-- Conexion con la API para el registro de un usuario --//

    const registerUser = async () => {
        const data = {
            Documento_comprador: Documento,
            Correo_usuario: Email,
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
        <div className='register-container-2'>
            <ToastContainer position='bottom-right'/>
            {/* Scripts */}
            <div id="background1">
                <div id="shape1" />
                <div id="shape1" />
            </div>
            <div id="register-container" className="content-container">
                <Form noValidate validated={validated} onSubmit={handleSubmit} id='register-form'>
                    <img src="Banner.png" alt="image" id='banner'/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Form>
            </div>       

            <div id="register-container">
                <img src="Natu_Logo_.png" alt="image" />
                <Form noValidate validated={validated} onSubmit={handleSubmit} id='register-form'>
                    <h3 >Solicitud</h3>
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
                            />
                            <Form.Control.Feedback type="invalid">Por favor ingresa un correo electrónico válido.</Form.Control.Feedback>
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
                            />
                            <Form.Control.Feedback type="invalid">Por favor ingresa tu dirección.</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom09">
                            <Form.Label>Descripción adicional</Form.Label>
                            <Form.Control
                                maxLength={200}
                                as="textarea"
                                placeholder="Descripción"
                                value={Descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom09">
                            <div className="input-group">
                                <label htmlFor="content">
                                    {state.postType === "Receta"
                                    ? "Descripción receta"
                                    : "Contenido"}
                                </label>
                                <div className='dp-makeComment2'>
                                    <ReactQuill
                                        theme="snow"
                                        value={content}
                                        onChange={handleCommentInput}
                                        className='dp-inputComment'
                                        placeholder="Comentanos tu solicitud"
                                        modules={{
                                            toolbar: [
                                                [{ 'header': '1'}, {'header': '2'}],
                                                ['bold', 'italic'],
                                                ['link', 'image'],
                                                ['clean'],
                                            ],
                                            imageCompress: {
                                                quality: 0.5, // Adjust quality as needed
                                                maxWidth: 400, // Maximum width of compressed image
                                                maxHeight: 400, // Maximum height of compressed image
                                                imageType: 'image/jpeg' // Compressed image type
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </Form.Group>
                    </Row>
                </Form>
                <Button type="submit" variant="outline-success" size="lg">Enviar</Button>
            </div>
            <Modal 
                show={showTermsModal} 
                onHide={handleCloseTermsModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseTermsModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
