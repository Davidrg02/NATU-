import React, { useState, useEffect } from 'react';
import { Form, Button, Modal, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';



const Product = {
    Nombre_producto: "",
    Ruta_img_producto: "",
    Descripcion_breve_producto: "",
    Descripcion_producto: "",
    Precio_producto: null,
    Cantidad_producto: null,
    Activo: true,
    CATEGORIA_ID_Categoria: null,
    VENDEDOR_ID_Vendedor: 0
}

export default function CreateProduct(props) {
    const api_url = process.env.REACT_APP_API_URL;

    const [categories, setCategories] = useState([]);
    const [idVendedor, setIdVendedor] = useState(0); //localStorage["id"]
    const [product, setProduct] = useState(Product);

    useEffect(() => {
        // Verificar si hay un token almacenado en el localStorage
        const token = localStorage.getItem("token");
        if (token) {
            const id = localStorage.getItem("id");
            setIdVendedor(id);            
        }
    }, []);

    // Traer categorias

    useEffect(() => {
        fetch(`${api_url}/categorias`)
            .then(response => response.json())
            .then(data => setCategories(data.body));
    }, []);

    //-- Validacion de campos del formulario --//

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            fetch(`${api_url}/productos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(product)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.body) {
                        alert("Producto creado correctamente");
                        props.onHide();
                    } else {
                        alert("Error al crear el producto");
                    }
                });
        }
        setValidated(true);
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Crear y publicar Producto
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                        <Form.Group as={Col} md="8" controlId="validationCustom01" className="mb-3">
                            <Form.Label>Nombre del producto</Form.Label>
                            <Form.Control 
                                type="text"
                                maxLength={50}
                                placeholder="Nombre del producto"
                                value={product.Nombre_producto}
                                required
                                onChange={(e) => setProduct({...product, Nombre_producto: e.target.value})}
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor ingrese un nombre valido
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02" className="mb-3">
                            <Form.Label>Precio</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="number"
                                    placeholder="Precio"
                                    value={product.Precio_producto}
                                    required
                                    onChange={(e) => setProduct({ ...product, Precio_producto: e.target.value })}
                                />
                                <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup>
                            <Form.Control.Feedback type="invalid">
                                Por favor ingrese un precio valido
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} md="4" controlId="validationCustom03" className="mb-3">
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control 
                                type="number"
                                placeholder="Cantidad"
                                value={product.Cantidad_producto}
                                required
                                onChange={(e) => setProduct({...product, Cantidad_producto: e.target.value})}
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor ingrese una cantidad valida
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="8" controlId="validationCustom04" className="mb-3">
                            <Form.Label>Categoria</Form.Label>
                            <Form.Select 
                                required
                                value={product.CATEGORIA_ID_Categoria}
                                onChange={(e) => setProduct({...product, CATEGORIA_ID_Categoria: e.target.value})}
                            >
                                <option value={null} >Seleccione una categoria</option>
                                {categories.map(category => (
                                    <option key={category.ID_Categoria} value={category.ID_Categoria}>{category.Nombre_Categoria}</option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                Por favor seleccione una categoria
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="validationCustom05" className="mb-3">
                            <Form.Label>Descripcion breve</Form.Label>
                            <Form.Control 
                                type="text"
                                maxLength={50}
                                placeholder="Descripcion breve"
                                value={product.Descripcion_breve_producto}
                                required
                                onChange={(e) => setProduct({...product, Descripcion_breve_producto: e.target.value})}
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor ingrese una descripcion breve valida
                            </Form.Control.Feedback>
                        </Form.Group>
                        
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="validationCustom06" className="mb-3">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="URL de la imagen"
                                value={product.Ruta_img_producto}
                                required
                                onChange={(e) => setProduct({...product, Ruta_img_producto: e.target.value})}
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor ingrese una URL valida
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="validationCustom07" className="mb-3">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control 
                                as="textarea"
                                rows={3}
                                placeholder="Descripcion"
                                value={product.Descripcion_producto}
                                required
                                onChange={(e) => setProduct({...product, Descripcion_producto: e.target.value})}
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor ingrese una descripcion valida
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <Form.Group className="mb-3" controlId="validationCustom08">
                            <Form.Check 
                                type="switch"
                                id="custom-switch"
                                label="Activo"
                                checked={product.Activo}
                                onChange={(e) => setProduct({...product, Activo: e.target.checked})}
                            />
                        </Form.Group>
                        <Button type="submit" className="mt-2" variant='success' size='lg'>
                            Publicar
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant='outline-danger'>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
