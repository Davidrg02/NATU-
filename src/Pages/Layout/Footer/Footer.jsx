import React from 'react'
import { Link } from 'react-router-dom'
import "../Header/Header.css";
import "../../../index.css";


export default function Footer() {
  return (
    <footer className="footer py-3 shadow-lg ">  {/* Added class 'footer' */}
      <div className="container fontFooter ">
        <nav className="row justify-content-between">
          <Link to="/" className="col-12 col-md-3 d-flex align-items-center justify-content-center">
            <img src="/Natu_Logo_.png" alt="Logo" className="img-fluid" width="150" height="50" />
          </Link>
          <ul className="col-12 col-md-2 list-unstyled px-3">  {/* Added class 'list-unstyled' */}
            <li className="footer-section fw-bold fs-7 mb-2">NATU Tienda Orgánica</li>  {/* Added class 'footer-section' */}
            <li className="text-justify">Encuentra productos orgánicos de calidad en esta, tu tienda web de confianza</li>
          </ul>
          <ul className="col-12 col-md-3 list-unstyled px4">  {/* Added class 'list-unstyled' */}
            <li className="footer-section fw-bold fs-7 mb-2">Enlaces</li>  {/* Added class 'footer-section' */}
            <li>
              <Link to="/" className="text-reset">Inicio</Link>
            </li>
            <li>
              <Link to="/Products" className="text-reset">Productos</Link>
            </li>
            <li>
              <Link to="/about" className="text-reset">Nosotros</Link>
            </li>
            <li>
              <Link to="/contact" className="text-reset">Contáctanos</Link>
            </li>
          
          </ul>
          <ul className="col-12 col-md-3 list-unstyled px-4 text-center">  {/* Added class 'list-unstyled' */}
            <li className="footer-section fw-bold fs-7 mb-2">Síguenos</li>  {/* Added class 'footer-section' */}
            <li className="d-flex justify-content-between">
              <a
                href="https://www.facebook.com/TuPaginaDeFacebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook" style={{ fontSize: '2rem', color: 'blue' }}></i> {/* Here you can increase the size of the icon */}
              </a>
              <a
                href="https://www.instagram.com/_natu_tienda/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram" style={{ fontSize: '2rem', color: '#F78DA7' }}></i> {/* Here you can increase the size of the icon */}
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-tiktok" style={{ fontSize: '2rem', color: 'black' }}></i> {/* Here you can increase the size of the icon*/}
                 </a>
              <a
                href="https://www.gmail.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-envelope" style={{ fontSize: '2rem', color: 'red' }}></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <p className="text-center mb-0 mt-2 fw-bold fs-7 mb-2">Realizado por el equipo Natu</p>
      </div>
    </footer>
  )
}