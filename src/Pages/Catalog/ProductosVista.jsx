import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Catalog.css';

export default function ProductosVista() {
  const api_url = process.env.REACT_APP_API_URL;

  const [productos, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch(`${api_url}/productos`)
    .then(response => response.json())
    .then(data => {
        if (data.error) {
          return console.error(data.error);
        }
        setProducts(data.body);
    })
    .catch(error => {
        console.error('There was an error!', error);
    }
    );  
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <section className="productos-vista">
      <div className="titulo-ProductosVista">
        <h1 className="productos-titulo">Productos</h1>
      </div>  
      <div className="productos-grid">
        {productos.map((producto) => (
          <Link to={`/ProductDet/${producto.ID_Producto}`} className="producto-item" key={producto.ID_Producto} style={{textDecoration:'none'}}>
              <img src={producto.Ruta_img_producto} alt={producto.Nombre_producto} className="producto-imagen" />
              <h3 className='producto-nombre'>{producto.Nombre_producto}</h3>
              <p className="producto-descripcion">{producto.Descripcion_breve_producto}</p>
              <span className="producto-precio">${producto.Precio_producto}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};
