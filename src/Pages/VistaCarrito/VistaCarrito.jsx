import './VistaCarrito.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsTrashFill, BsCartCheckFill } from 'react-icons/bs';

const Carrito = () => {
  const [cantidades, setCantidades] = useState({}); // Estado para mantener las cantidades de cada producto

  const handleChangeCantidad = (productoId, cantidad) => {
    setCantidades({ ...cantidades, [productoId]: cantidad }); // Actualizar el estado de las cantidades
  };

  const productosDePrueba = [
    {
      id: 1,
      nombre: "Fresas Camarrosa x500g",
      precio: 5600,
      cantidadProducto: 3,
      rutaImgProducto: "https://cdn.pixabay.com/photo/2016/11/18/17/23/strawberries-1835934_1280.jpg",
    },
    {
      id: 2,
      nombre: "Café Molido x250g",
      precio: 9800,
      cantidadProducto: 15,
      rutaImgProducto: "https://cdn.pixabay.com/photo/2019/01/09/18/27/coffee-3923970_640.jpg",
    },
    {
      id: 3,
      nombre: "Cebolla Cabezona x1kg",
      precio: 4400,
      cantidadProducto: 8,
      rutaImgProducto: "https://cdn.pixabay.com/photo/2016/05/16/22/47/onions-1397037_1280.jpg",
    }
  ];

  const calcularSubtotal = (producto) => {
    const cantidad = cantidades[producto.id] || 1; // Obtener la cantidad del estado o asumir 1 si no está definida
    return producto.precio * cantidad;
  };

  const calcularTotalCarrito = () => {
    return productosDePrueba.reduce((total, producto) => {
      return total + calcularSubtotal(producto);
    }, 0);
  };

  return (
    <div className="contenedor-1">
      <div className="producto-detalle-carrito">
        <div className="producto-informacion-carrito">
          <div className="info-productos">
            <h2>Este es tu carrito, verifica tu pedido</h2>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {productosDePrueba.map((producto) => (
                  <tr key={producto.id}>
                    <td><img src={producto.rutaImgProducto} alt={producto.nombre} /></td>
                    <td>{producto.nombre}</td>
                    <td>${producto.precio} COP</td>
                    <td>
                      <input
                        id='cantidad-det'
                        type="number"
                        min="1"
                        max="20"
                        defaultValue={cantidades[producto.id] || 1} // Establecer el valor del input desde el estado
                        onChange={(e) => handleChangeCantidad(producto.id, parseInt(e.target.value))}
                      />
                    </td>
                    <td>${calcularSubtotal(producto)} COP</td>
                    <td>
                      <button onClick={() => console.log('Eliminar producto', producto.id)}>
                        <BsTrashFill />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="total-carrito">
                <table>
                    <thead>
                        <tr>Total Carrito</tr>
                    </thead>
                    <tbody>
                        <tr> Subtotal: ${calcularTotalCarrito()} COP</tr>
                        <tr> Envío: $0 COP</tr>
                        <tr> Total: ${calcularTotalCarrito()} COP</tr>
                    
                    </tbody>
                </table>
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

export default Carrito;








/*
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
                            <p>Total: ${/* Calcular el total del carrito }</p>
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
*/
