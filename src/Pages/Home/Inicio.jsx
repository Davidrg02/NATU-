import React from 'react';
import 'animate.css/animate.min.css'; // Importa animate.css
import './Home.css';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Beneficios from './Beneficios';
import ProductosVista from '../Catalog/ProductosVista';

export default function Inicio() {
  return (
    <div className='home-container'>
    <div className="home-page-container-main">
      <div className="container-1">
      <div className="home-page-container">
        <div className="home-page-text-container">
          <h1 className="home-page-title animate__animated animate__fadeInUp">
            ¿Quieres nutrir tu cuerpo y mente con productos colombianos orgánicos?
          </h1>
          <p className="home-page-description animate__animated animate__fadeIn">
            En Natu Tienda Orgánica encontrarás una gran variedad de productos de alta calidad, cultivados y fabricados por productores locales de pueblos de toda Colombia. 
          </p>
          <Link to="/products" className="home-page-button animate__animated animate__fadeIn animate__pulse">
            Productos <FiArrowRight />
          </Link>
        </div>
      </div>
      <div className="home-image-section ">
        <img src="https://acortar.link/1sQiAb" alt="Banner" className="home-banner-image" />
      </div>
      </div>

      <div className="container-2">
      <div className="home-image-section-2 ">
        <img src="../../../TomatoesC.png" alt="Banner" className="home-banner-image-2" />
      </div>
      <div className="home-page-container-2">
        <div className="home-page-text-container-2">
          <h1 className="home-page-title-2 animate__animated animate__fadeInUp">
            Descubre lo auténtico: Productos naturales de la tierra, cultivados con amor
          </h1>
          <p className="home-page-description-2 animate__animated animate__fadeIn">
            En Natu, respaldamos la economía local al ofrecerte productos saludables y naturales, cultivados y elaborados en el campo por familias colombianas trabajadoras. Nuestro objetivo es brindarte una experiencia auténtica y promover un estilo de vida más saludable para que puedas disfrutar plenamente de nuestros productos.
          </p>
          <Link to="/About" className="home-page-button-2 animate__animated animate__fadeIn animate__pulse">
            Leer más... <FiArrowRight />
          </Link>
        </div>
      </div>
      
      </div>








{/*}
      <div className="acerca-container">
        <div className="titulo-container">
          <h1 className="titulo-texto animate__animated animate__fadeInLeft">Descubre lo auténtico: Productos naturales de la tierra, cultivados con amor</h1>
        </div>
        <div className="texto-container">
          <p className="parrafo-texto animate__animated animate__fadeInRight">
            En Natu, respaldamos la economía local al ofrecerte productos saludables y naturales, cultivados y elaborados en el campo por familias colombianas trabajadoras. Nuestro objetivo es brindarte una experiencia auténtica y promover un estilo de vida más saludable para que puedas disfrutar plenamente de nuestros productos.
          </p>
          <Link to="/" className="leer-mas-button animate__animated animate__shine">
            Leer Más...<FiArrowRight />
          </Link>
        </div>
        <div className="acerca-image-section">
        <img src="../../../TomatoesC.png" alt="Banner" className="acerca-banner-image" />
      </div>
      </div>
      
  */}
    
    </div>
    <Beneficios />
    <ProductosVista />
    </div>
  );
}