
import React from 'react';
import './ProductDet.css';
import { BsCart4 } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function ProductDet() {
  // Obtenemos el ID del producto de los parámetros de la URL
  

  const { id } = useParams();

  // Datos de prueba del producto
  const productos = [
      {
          ID_Producto: 1,
          Nombre_producto: "Fresas Camarrosa x 500g",
          Imagen_producto: "https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_1280.jpg",
          Descripción_producto: "Fresas frescas cultivadas en Chiquinquira, Boyacá",
          Precio_producto: 5600,
      },
      {
          ID_Producto: 2,
          Nombre_producto: "Naranjas x 1000g",
          Imagen_producto: "https://cdn.pixabay.com/photo/2023/08/16/10/09/oranges-8193789_1280.jpg",
          Descripción_producto: "Naranjas dulces cultivadas en el Valle del Cauca",
          Precio_producto: 1600,
      },
      {
        ID_Producto: 3,
        Nombre_producto: "Papa Pastusa x 1000g",
        Imagen_producto: "https://cdn.pixabay.com/photo/2019/07/12/02/19/potatoes-4331742_1280.jpg",
        Descripción_producto: "Papa pastusa de buena calidad cultivadas en el Popayán",
        Precio_producto: 2600,
    }
  ];

  // Buscamos el producto correspondiente al ID
  const producto = productos.find(producto => producto.ID_Producto === parseInt(id));

  // Si no se encuentra el producto, se muestra un mensaje
  if (!producto) {
      return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="contenedor-1">
        <div className="producto-detalle">
            <div className="producto-imagen-det">
                <img src={producto.Imagen_producto} alt={producto.Nombre_producto} />
            </div>
            <div className="producto-informacion-det">
                <h2 className="producto-nombre-det">{producto.Nombre_producto}</h2>
                <p className="producto-descripcion-det">{producto.Descripción_producto}</p>
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
