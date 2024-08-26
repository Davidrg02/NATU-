import React from 'react';
import '../Home.css';
import { Link } from 'react-router-dom';

export default function Saludables() {
    return (
        <div className="contenedor-1">
        <h2 className="beneficio-titulo">Productos Saludables</h2>
        <div className="beneficio-descripcion">
            <p>En Natu, nos preocupamos por tu bienestar y el de tu familia. Por eso, ofrecemos una amplia variedad de productos orgánicos cultivados y elaborados con cuidado y atención. Nuestros productos son ricos en nutrientes y libres de químicos dañinos, lo que los convierte en la opción ideal para llevar una vida saludable y equilibrada. Descubre nuestra selección de frutas, verduras, cereales, lácteos y mucho más, y disfruta de una alimentación sana y deliciosa.</p>
        </div>
        <Link to="/products" className="beneficio-boton">
            Descubre nuestros productos
        </Link>
        </div>
    );
}