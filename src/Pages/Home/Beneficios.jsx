import React from 'react';
import 'animate.css/animate.min.css';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Beneficios() {
  return (
    <div className="beneficios-container">
      <h2 className="beneficios-titulo">Beneficios de una alimentación natural y saludable</h2>
      <div className="beneficios-lista">
        <li className="beneficio-item animate__animated animate__fadeInUp">
          <img src="https://cdn.pixabay.com/photo/2014/09/09/19/07/corn-field-440338_1280.jpg" alt="Cultivados en el campo" />
          <h3>Cultivados en el campo</h3>
          <p>Productos orgánicos para tu bienestar y el del tu familia.</p>
        </li>
        <li className="beneficio-item animate__animated animate__fadeInUp">
          <img src="https://cdn.pixabay.com/photo/2017/08/28/19/12/international-2690990_1280.jpg" alt="Productos locales" />
          <h3>Productos Locales</h3>
          <p>Apoyamos la economía local colombiana </p>
        </li>
        <li className="beneficio-item animate__animated animate__fadeInUp">
          <img src="https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg" alt="Saludables" />
          <h3>Saludables</h3>
          <p>Productos cultivados y elaborados con cuidado y atención</p>
        </li>
        <li className="beneficio-item animate__animated animate__fadeInUp">
          <img src="https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_1280.jpg" alt="Frescos" />
          <h3>Frescos</h3>
          <p>Seleccionamos cuidadosamente los productos más frescos.</p>
        </li>
        <li className="beneficio-item animate__animated animate__fadeInUp">
          <img src="https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_1280.jpg" alt="Nutritivos" />
          <h3>Nutritivos</h3>
          <p>Ricos en vitaminas, minerales y antioxidantes.</p>
        </li>
        <li className="beneficio-item animate__animated animate__fadeInUp">
          <img src="https://cdn.pixabay.com/photo/2016/10/07/13/36/tangerines-1721590_1280.jpg" alt="Sabrosos" />
          <h3>Sabrosos</h3>
          <p>Disfruta de una gran variedad de sabores y texturas.</p>
        </li>
      </div>
      <Link to="/products" className="beneficios-boton">
        Descubre más sobre nuestros productos
      </Link>
    </div>
  );
};