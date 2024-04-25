import React, { useEffect, useState } from 'react';
import './ProductDet.css';
import { BsCart4 } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function ProductDet() {
  const api_url = process.env.REACT_APP_API_URL;

  // Obtenemos el ID del producto de los parámetros de la URL
  

  const { id } = useParams();

  // Buscamos el producto correspondiente al ID
  const [producto, setProducto] = useState(null);


  // Conexion a la base de datos

  const fetchProduct = () => {
    fetch(`${api_url}/productos/${id}`)
    .then(response => response.json())
    .then(data => {
        if (data.error) {
          return console.error(data.error);
        }
        setProducto(data.body[0]);
    })
    .catch(error => {
        console.error('There was an error!', error);
    });

  };

  useEffect(() => {
    fetchProduct();
  }, []);

  // Si no se encuentra el producto, se muestra un mensaje
  if (!producto) {
      return <p>Producto no encontrado.</p>;
  }

  

  return (
    <div className="contenedor-1">
        <div className="producto-detalle">
            <div className="producto-imagen-det">
                <img src={producto.Ruta_img_producto} alt={producto.Nombre_producto} />
            </div>
            <div className="producto-informacion-det">
                <h2 className="producto-nombre-det">{producto.Nombre_producto}</h2>
                <p className="producto-descripcion-det">{producto.Descripcion_producto}</p>
                <span className="producto-precio-det">${producto.Precio_producto}</span>
                <div className="producto-compra-det">
                    <label htmlFor="cantidad-det">Cantidad:</label>
                    <div className='caja-cantidad-det'>
                        <input type="number" id="cantidad-det" min="1" max="10" defaultValue="1" />
                        <button className="btn-carrito-det">Añadir al carrito <BsCartCheckFill/></button>
                    </div>
                    <Link to="/products" className="btn-seguir-det">
                        Seguir comprando <BsCart4/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);
}
/*
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './ProductDet.css';

export default function ProductDet() {
  const { id } = useParams(); // Extrae el id de la ruta
  const [producto, setProducto] = useState({}); // Estado para almacenar el producto detallado

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:4000/api/productos/${id}`);
      const data = await response.json();
      if (data.error) {
        console.error(data.error);
      } else {
        setProducto(data.body);
      }
    };
    fetchProduct();
  }, [id]); // Dependencia del id para actualizar al cambiar

  return (
    <div className="producto-detalle">
      {producto ? (
        <>
          <img
            src={producto.Imagen_producto}
            alt={producto.Nombre_producto}
            className="producto-imagen-detalle"
          />
          <h2>{producto.Nombre_producto}</h2>
          <p className="producto-descripcion">{producto.Descripción_producto}</p>
          <span className="producto-precio">${producto.Precio_producto}</span>
          {/* Puedes agregar más detalles como cantidad disponible, características técnicas, etc. 
        </>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
}
/**/
