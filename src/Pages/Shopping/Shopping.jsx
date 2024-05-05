import React from 'react';
import "./Shopping.css"; // Importa los estilos CSS

export default function Shopping() {
    return (
    <div id='container-compras'>
        <div id="container-item">
            <p id='fecha'>fecha</p>
            <hr></hr>
          <img src="https://thefoodtech.com/wp-content/uploads/2020/06/Componentes-de-calidad-en-el-tomate-828x548.jpg" alt="Integrante 3" />
          <h3 >Titulo</h3>
          <p id='descripcion'>Desarrollador Frontend</p>
          <button
                    type="button"
                    id="boton-compras"
                    value="Registrarse"
                >Ver compra</button>
          <button
                    type="button"
                    id="boton-compras"
                    value="Registrarse"
                    >Volver a comprar</button>
        </div>
    </div>
    )
}
