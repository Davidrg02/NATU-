import React, { useState } from 'react';
import './Soporte.css'; // Asegúrate de que la ruta del archivo CSS sea correcta
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Quill from 'quill';
import ImageCompress from 'quill-image-compress'; // Importar quill-image-compress

Quill.register('modules/imageCompress', ImageCompress); // Registrar quill-image-compress

export default function Soporte() {
    const api_url = null;
    // const api_url = process.env.REACT_APP_API_URL;

    //--- Valores de los campos del formulario de registro ---//

    const [Documento, setDocumento] = useState('');
    const [Email, setEmail] = useState('');
    const [Descripcion, setDescripcion] = useState('');
    const [content, setContent] = useState('');
    const [validated, setValidated] = useState(false);

    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            registerUser();
        }
        setValidated(true);
    };

    // Función para registrar al usuario en la API
    const registerUser = async () => {
        const data = {
            Documento_comprador: Documento,
            Correo_usuario: Email,
            Descripcion: Descripcion,
            Descripcion_adicional: content,
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
            if (responseData.body.includes("Duplicate entry")) {
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
            <ToastContainer position='bottom-right' />
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
                <img src="Natu_Logo_.png" alt="Logo" />
                <Form noValidate validated={validated} onSubmit={handleSubmit} id='register-form'>
                    <h3>Solicitud</h3>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationDocumento">
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

                        <Form.Group as={Col} md="8" controlId="validationEmail">
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
                        <Form.Group as={Col} md="12" controlId="validationDescripcion">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control
                                maxLength={45}
                                type="text"
                                placeholder="Descripcion"
                                value={Descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">Por favor ingresa tu Descripcion.</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationContent">
                            <Form.Label>Cuéntanos sobre tu solicitud</Form.Label>
                            <ReactQuill
                                theme="snow"
                                value={content}
                                onChange={setContent}
                                className='dp-inputComment'
                                placeholder="Cuéntanos más sobre tu solicitud..."
                                modules={{
                                    toolbar: [
                                        [{ 'header': '1' }, { 'header': '2' }],
                                        ['bold', 'italic'],
                                        ['link', 'image'],
                                        ['clean'],
                                    ],
                                    imageCompress: {
                                        quality: 0.5,
                                        maxWidth: 400,
                                        maxHeight: 400,
                                        imageType: 'image/jpeg'
                                    }
                                }}
                                style={{ height: '150px' }} // Ajustar la altura del editor
                            />
                        </Form.Group>
                    </Row>
                    <Button type="submit" variant="outline-success" size="lg" className="submit-button">Enviar</Button>
                </Form>
            </div>
        </div>
    );
}
