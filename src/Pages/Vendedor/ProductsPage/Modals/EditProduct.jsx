import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export default function EditProduct({ show, onHide }) {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Editar producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nombre del producto</Form.Label>
                        <Form.Control type="text" placeholder="Nombre del producto" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Descripción breve</Form.Label>
                        <Form.Control type="text" placeholder="Descripción breve" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type="number" placeholder="Precio" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control type="number" placeholder="Cantidad" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={onHide}>
                    Guardar cambios
                </Button>
            </Modal.Footer>
        </Modal>
    );
}