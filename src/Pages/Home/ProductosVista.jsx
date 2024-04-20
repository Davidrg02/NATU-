import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function ProductosVista() {
    const [productos, setProducts] = useState([
      {
        ID_Producto: 1,
        Nombre_producto: "Fresas Camarrosa x 500g",
        Imagen_producto: "https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_1280.jpg",
        Descripción_producto: "Fresas frescas cultivadas en Chiquinquira, Boyacá",
        Precio_producto: 5600,
      }
    ]);


    const updateCatalog = () => {
      fetch('http://localhost:4000/api/productos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
              return alert(data.error);
            }
            else {
              setProducts(data.body);
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
          
    }

    useEffect(() => {
      updateCatalog();
    }, []);

  
    return (
      <section className="productos-vista">
        <div className="titulo-ProductosVista">
          <h2 className="productos-titulo">Vista Rápida de Productos</h2>
        </div>  
        <div className="productos-grid">
          {productos.map((producto) => (
            <div className="producto-item" key={producto.ID_Producto}>
              <Link to={`/ProductDet/${producto.ID_Producto}`} style={{textDecoration:'none'}}>
                <img src={producto.Imagen_producto} alt={producto.Nombre_producto} className="producto-imagen" />
                <h3 className='producto-nombre'>{producto.Nombre_producto}</h3>
                <p className="producto-descripcion">{producto.Descripción_producto}</p>
                <span className="producto-precio">${producto.Precio_producto}</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  };
