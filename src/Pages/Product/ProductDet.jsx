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

  // Cantidad de productos a comprar
  const [Cantidad, setCantidad] = useState(1);

  //Funcion para hacer visible el boton de ver carrito
  const [mostrarVerCarrito, setMostrarVerCarrito] = useState(false); 

  // Función para añadir al carrito
  const handleAgregarAlCarrito = () => {
  console.log(`Añadir al carrito: ${Cantidad}`);
  setMostrarVerCarrito(true); // Mostrar el enlace para ver el carrito después de hacer clic en el botón
  };

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
                <p className="producto-precio-det" style={{fontSize:"25px"}}>${producto.Precio_producto} COP</p> 
                <p className="producto-descripcion-det">{producto.Descripcion_producto}</p>

                <p className='producto-precio-det'>
                  Unidades disponibles: {producto.Cantidad_producto}
                </p>
                

                <div className="producto-compra-det">
                    <label htmlFor="cantidad-det">Cantidad:</label>
                    <div className='caja-cantidad-det'>
                        <input 
                        type="number"
                         id="cantidad-det" 
                         min="1"
                         max="20" 
                         defaultValue="1" 
                         onChange={(e) => setCantidad(parseInt(e.target.value))} />

                          <button className="btn-carrito-det" onClick={handleAgregarAlCarrito}> Añadir al carrito <BsCartCheckFill/>
                          </button>
                          {mostrarVerCarrito && ( // Mostrar el enlace solo si mostrarVerCarrito es true
                          <Link to="/cart" className="btn-carrito-det">
                            Ver carrito <BsCart4/>
                          </Link>  
                          )}          
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
