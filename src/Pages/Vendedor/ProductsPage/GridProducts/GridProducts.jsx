import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import "../ProductsPage.css";

import EditProduct from '../Modals/EditProduct';

export default function GridProducts({products}) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Row>
            {products.map(product => (
                <Col key={product.ID_Producto} xs={12} sm={6} md={4} lg={3}>
                    <Card className="mb-4" id='item-product'>
                        <div className="card-img-container">
                            <Card.Img variant="top" src={product.Ruta_img_producto} className="card-img" />
                        </div>
                        <Card.Body align="center">
                            <Card.Title>{product.Nombre_producto}</Card.Title>
                            <Card.Text>{product.Descripcion_breve_producto}</Card.Text>
                            <Card.Text>Precio: ${product.Precio_producto}</Card.Text>
                            <Card.Text>Cantidad: {product.Cantidad_producto}</Card.Text>
                            <Button variant="outline-primary" className="mr-2">Editar</Button>
                            &nbsp;
                            <Button variant="outline-danger">Eliminar</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            <EditProduct show={modalShow} onHide={() => setModalShow(false)} className="modals"/>
        </Row>
    );
}