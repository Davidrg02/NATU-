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
*/


import React from 'react';
import './ProductDet.css';

export default function ProductDet() {
  const productoSimulado = {
    id: 1,
    nombre: "Fresas Camarrosa x 500g",
    imagen: "https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_1280.jpg",
    descripcion: "Fresas frescas cultivadas en Chiquinquira, Boyacá",
    precio: 5600,
  };

  return (
    <div className="producto-detalle">
      <div className="producto-imagen">
        <img src={productoSimulado.imagen} alt={productoSimulado.nombre} />
      </div>
      <div className="producto-informacion">
        <h2>{productoSimulado.nombre}</h2>
        <p className="producto-descripcion">{productoSimulado.descripcion}</p>
        <div className="producto-compra">
          <label htmlFor="cantidad">Cantidad:</label>
          <input type="number" id="cantidad" min="1" max="10" defaultValue="1" />
          <span className="producto-precio">${productoSimulado.precio}</span>
          <button className="btn-carrito">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}