import './VistaCarrito.css'

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsTrashFill, BsCartCheckFill } from 'react-icons/bs';

const VistaCarrito = () => {
  const [carrito, setCarrito] = useState([]); // Estado para almacenar los productos en el carrito

  // Función para agregar un producto al carrito
  const handleAgregarAlCarrito = (producto) => {
    // Implementar la lógica para agregar el producto al carrito (estado `carrito`)
  };

  // Función para eliminar un producto del carrito
  const handleEliminarProducto = (productoId) => {
    // Implementar la lógica para eliminar el producto del carrito (estado `carrito`)
  };

  // Función para actualizar la cantidad de un producto en el carrito
  const handleActualizarCantidad = (productoId, nuevaCantidad) => {
    // Implementar la lógica para actualizar la cantidad del producto en el carrito (estado `carrito`)
  };

  // Si el carrito está vacío, mostrar un mensaje
  if (carrito.length === 0) {
    return <p>El carrito está vacío.</p>;
  }

  return (
    <div className="contenedor-1">
        <div className="producto-detalle-carrito">
            <div className="producto-informacion-carrito">
                <p> Este es tu carrito, verifica tu pedido</p>
                    <div className="info-productos">
                        <h2>Carrito de compras</h2>
                        <table>
                            <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                                <th>Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            {carrito.map((producto) => (
                                <tr key={producto.id}>
                                <td><img src={producto.Ruta_img_producto} alt={producto.Nombre_producto} /></td>
                                <td>{producto.Nombre_producto}</td>
                                <td>${producto.Precio_producto} COP</td>
                                <td>
                                    <input
                                    type="number"
                                    min="1"
                                    max={producto.Cantidad_producto}
                                    value={producto.cantidad}
                                    onChange={(e) => handleActualizarCantidad(producto.id, parseInt(e.target.value))}
                                    />
                                </td>
                                <td>${producto.Precio_producto * producto.cantidad} COP</td>
                                <td>
                                    <button onClick={() => handleEliminarProducto(producto.id)}>
                                    <BsTrashFill />
                                    </button>
                                </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <div className="total-carrito">
                            <p>Total: ${/* Calcular el total del carrito */}</p>
                            <Link to="/checkout" className="btn-comprar">
                            Proceder a la compra <BsCartCheckFill />
                            </Link>
                        </div>
                        </div>
                </div>
            </div>
        </div>
  );
};

export default VistaCarrito;
/*
export default function VistaCarrito() {
    return (
        <div className="contenedor-1">
           
            <div className="producto-detalle-carrito">
                <div className="producto-informacion-carrito">
                <p> Este es tu carrito, verifica tu pedido</p>
                    <div className="info-productos">
                    <form class="cart-form" action="/checkout" method="post">
                        <table class="cart-table">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                            
                                <tr>
                                    <td>Producto 1</td>
                                    <td>$10.00</td>
                                    <td>
                                        <input type="number" name="quantity_product_1" value="1" min="1" max="10"></input>
                                    </td>
                                    <td>$10.00</td>
                                    
                                </tr>
                            
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="3"></td>
                                    <td>Total:</td>
                                    <td>$50.00</td>
                                </tr>
                                <tr>
                                    <td colspan="5">
                                        <button type="submit" class="update-cart">Actualizar carrito</button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </form>
                    </div>
                </div>
            </div>
           

            
        </div>
    )
}
*/