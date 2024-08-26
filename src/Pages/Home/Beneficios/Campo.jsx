import React from 'react';
import { Link } from 'react-router-dom';
import './Articulos.css';

export default function Campo() {
    return (
        <div className="articulos-container">
            
            <div id="articulos-contexto">
                <h2 id="articulos-titulo">Importancia de los productos orgánicos para tu bienestar y el de tu familia</h2>
                 {/* Imagen */}
                 <div className="articulos-imagen">
                    <img src="https://img.freepik.com/foto-gratis/familia-sonriente-cocina-preparando-comida_23-2148610911.jpg?t=st=1724645997~exp=1724649597~hmac=5367373436d972e424e8636f895538f604ac2ff7450a5ac6c2e1bc89ac7a5886&w=740" />
                </div>
                <p className="articulos-descripcion">   
                    En un mundo cada vez más consciente de la salud y el bienestar, los productos orgánicos han ganado un protagonismo considerable. Estos productos, cultivados sin el uso de pesticidas ni fertilizantes químicos sintéticos, representan una alternativa más saludable para quienes desean cuidar su cuerpo, el entorno y su economía familiar. Pero ¿qué son realmente los productos orgánicos y por qué son tan importantes para tu bienestar y el de tu familia? A continuación, analizaremos su definición y los beneficios en distintos aspectos: económico, de salud, social y emocional.
                </p>
                <h2 id="articulos-titulo">¿Qué es un producto orgánico?</h2>
                <p className="articulos-descripcion">
                    Los productos orgánicos son aquellos que se cultivan siguiendo prácticas agrícolas naturales que respetan los ciclos de la tierra y evitan el uso de productos químicos artificiales. Se rigen por normativas que prohíben el uso de pesticidas, herbicidas y organismos genéticamente modificados (OGM), así como ciertos aditivos en su procesamiento. Para que un producto sea considerado orgánico, debe cumplir con certificaciones específicas que avalen que se ha cultivado en condiciones respetuosas con el medio ambiente y con el bienestar animal, en el caso de productos derivados de animales.
                </p>
                <p className="articulos-descripcion">
                    Esta forma de producción se basa en técnicas sostenibles como la rotación de cultivos, el compostaje y el control biológico de plagas, que no solo protegen la salud del consumidor, sino también la biodiversidad del suelo y la calidad del agua.
                </p>
                
                <h2 id="articulos-titulo">Beneficios para la salud</h2>
                <p className="articulos-descripcion">
                    Uno de los principales motivos para elegir productos orgánicos es el impacto positivo en la salud. Los productos convencionales suelen estar expuestos a una gran cantidad de pesticidas, que pueden tener efectos adversos en el cuerpo a largo plazo. El consumo continuo de alimentos cargados con residuos químicos ha sido vinculado con un mayor riesgo de padecer enfermedades crónicas como cáncer, problemas hormonales y afecciones del sistema nervioso.
                </p>

                <p className="articulos-descripcion">
                    Los productos orgánicos, al no contener estos químicos, reducen la exposición a sustancias tóxicas. Además, se ha demostrado que tienen un mayor contenido de nutrientes. Diversos estudios indican que las frutas y verduras orgánicas contienen mayores concentraciones de antioxidantes, vitaminas y minerales que sus equivalentes convencionales. Estos nutrientes son esenciales para reforzar el sistema inmunológico, mejorar la digestión y promover el buen funcionamiento del organismo en general.
                </p>

                <p className="articulos-descripcion">
                    Para las familias con niños, el consumo de productos orgánicos es aún más relevante. Los cuerpos en desarrollo son más vulnerables a las toxinas, y ofrecerles alimentos libres de químicos asegura un crecimiento más saludable y un menor riesgo de problemas de salud a futuro.
                </p>



                <Link to="/products" className="articulos-boton">Descubre nuestros productos</Link>
            </div>
        </div>
    );
}
