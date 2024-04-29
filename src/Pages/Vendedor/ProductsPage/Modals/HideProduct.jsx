import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function HideProduct({ producto, show, reloadPage, onHide }) {
    const api_url = process.env.REACT_APP_API_URL;

    const [product, setProduct] = useState({});

    useEffect(() => {
        // Actualizar el estado del producto cuando la prop cambie
        setProduct(producto);
    }, [producto]);

    const mensaje = product.Activo === 1 ? 'pausar' : 'reanudar';
    

    const handleHideProduct = () => {
        fetch (`${api_url}/productos/ocultar/${product.ID_Producto}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (data.error === false) {
                onHide();
                reloadPage();
            }
            else {
                console.error('Error:', data.error);
                if (data.body === 'jwt expired') {
                    localStorage.clear();
                    window.location.href = '/login';
                }
                return;
            }
        })

    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Cambiar visualización de producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>¿Estás seguro de que deseas {mensaje}  la visualización de este producto?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancelar
                </Button>
                <Button variant="danger" onClick={handleHideProduct}>
                    Confirmar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}