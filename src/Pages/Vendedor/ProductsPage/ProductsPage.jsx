import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './ProductsPage.css';
// Import components
import SearchBar from './SearchBar/SearchBar';
import GridProducts from './GridProducts/GridProducts';
import CreateProduct from './Modals/CreateProduct';



const productos = [
    {
        ID_Producto: 1,
        Nombre_producto: "Fresas Camarrosa x 500g",
        Ruta_img_producto: "https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_1280.jpg",
        Descripcion_breve_producto: "Fresas frescas cultivadas en Chiquinquira, Boyacá",
        Precio_producto: 5600,
        Cantidad_producto: 54,
        Activo: 1
    },
    {
        ID_Producto: 2,
        Nombre_producto: "Naranjas x 1000g",
        Ruta_img_producto: "https://cdn.pixabay.com/photo/2023/08/16/10/09/oranges-8193789_1280.jpg",
        Descripcion_breve_producto: "Naranjas dulces cultivadas en el Valle del Cauca",
        Precio_producto: 1600,
        Cantidad_producto: 14,
        Activo: 1
    },
    {
        ID_Producto: 3,
        Nombre_producto: "Papa Pastusa x 1000g",
        Ruta_img_producto: "https://cdn.pixabay.com/photo/2014/08/06/20/32/potatoes-411975_640.jpg",
        Descripcion_breve_producto: "Papa pastusa de buena calidad cultivadas en el Popayán",
        Precio_producto: 2600,
        Cantidad_producto: 78,
        Activo: 1
    },
    {
        ID_Producto: 5,
        Nombre_producto: "Tomate Chonto x 1000g",
        Ruta_img_producto: "https://cdn.pixabay.com/photo/2016/03/26/16/44/tomatoes-1280859_640.jpg",
        Descripcion_breve_producto: "Tomate chonto de excelente calidad cultivadas en el Cauca",
        Precio_producto: 2600,
        Cantidad_producto: 78,
        Activo: 1
    },
    {
        ID_Producto: 6,
        Nombre_producto: "Tomate Cherry x 1000g",
        Ruta_img_producto: "https://cdn.pixabay.com/photo/2019/07/11/10/14/cherry-tomato-4330441_640.jpg",
        Descripcion_breve_producto: "Tomate cherry de excelente calidad cultivadas en el Cauca",
        Precio_producto: 2600,
        Cantidad_producto: 78,
        Activo: 1
    },
    {
        ID_Producto: 7,
        Nombre_producto: "Tomate Larga Vida x 1000g",
        Ruta_img_producto: "https://ecommerce.surtifamiliar.com/backend/admin/backend/web/archivosDelCliente/items/images/Verduras-Verduras-a-Granel-TOMATE-CHONTO-A-GRANEL-326220201112180105.jpg",
        Descripcion_breve_producto: "Tomate larga vida de excelente calidad cultivadas en el Cauca",
        Precio_producto: 2600,
        Cantidad_producto: 78,
        Activo: 0
    },
    {
        ID_Producto: 8,
        Nombre_producto: "Tomate Perita x 1000g",
        Ruta_img_producto: "https://cdn.pixabay.com/photo/2016/08/23/18/24/tomatoes-1618400_1280.jpg",
        Descripcion_breve_producto: "Tomate perita de excelente calidad cultivadas en el Cauca",
        Precio_producto: 2600,
        Cantidad_producto: 78,
        Activo: 1
    },
    {
        ID_Producto: 9,
        Nombre_producto: "Tomate Riñon x 1000g",
        Ruta_img_producto: "https://cdn.pixabay.com/photo/2016/08/23/18/24/tomatoes-1618400_1280.jpg",
        Descripcion_breve_producto: "Tomate riñon de excelente calidad cultivadas en el Cauca",
        Precio_producto: 2600,
        Cantidad_producto: 78,
        Activo: 1
    },
    {
        ID_Producto: 10,
        Nombre_producto: "Tomate Cherry x 1000g",
        Ruta_img_producto: "https://cdn.pixabay.com/photo/2016/08/23/18/24/tomatoes-1618400_1280.jpg",
        Descripcion_breve_producto: "Tomate cherry de excelente calidad cultivadas en el Cauca",
        Precio_producto: 2600,
        Cantidad_producto: 78,
        Activo: 1
    }
  ];

export default function ProductsPage() {
    const api_url = process.env.REACT_APP_API_URL;

    const [reload, setReload] = useState(false);

    const reloadPage = () => {
        setReload(!reload);
    }

    const [modalShow, setModalShow] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from API
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }

        fetch(`${api_url}/productos/vendedor/${localStorage.getItem('id')}`, {
            method: 'GET',
            headers: headers
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (data.error === false) {
                setProducts(data.body);
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
        .catch(error => {
            console.error('Error:', error);
        });
    }
    , [reload]);

    return (
        <div className='seller-product-page'>
            <div className='seller-product-container'>
                <h1>Mis productos</h1>
                <SearchBar/>
                <Button 
                    variant="success" 
                    className="mb-4" 
                    size="lg" 
                    onClick={() => setModalShow(true)}
                >
                    Publicar producto
                    &nbsp;
                    <i class="bi bi-plus-square"></i>
                </Button>
                <GridProducts products={products} reloadPage={reloadPage}/>
            </div>
            <CreateProduct show={modalShow} onHide={() => setModalShow(false)} className="modals"/>
        </div>
    );
}
