import React from 'react';
import '../Home.css';
import { Link } from 'react-router-dom';


export default function Campo() {
    return (
        <div className="contenedor-1">
        <h2 className="beneficio-titulo">Productos del Campo</h2>
        <div className="beneficio-descripcion">
            <p>En Natu, respaldamos la economía local al ofrecerte productos saludables y naturales, cultivados y elaborados en el campo por familias colombianas trabajadoras. Nuestro objetivo es brindarte una experiencia auténtica y promover un estilo de vida más saludable para que puedas disfrutar plenamente de nuestros productos.</p>
        </div>
        <Link to="/products" className="beneficio-boton">
            Descubre nuestros productos
        </Link>
        </div>
    );
}