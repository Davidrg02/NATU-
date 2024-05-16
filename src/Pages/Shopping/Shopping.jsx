import React from 'react';
import "./Shopping.css"; // Importa los estilos CSS

export default function Shopping() {
    return (
    <div id='container-compras'>
        <div id="container-producto">
            <div className="item-content">
                <img  src="https://blog.lexmed.com/images/librariesprovider80/blog-post-featured-images/shutterstock_1896755260.tmb-medium.jpg?sfvrsn=52546e0a_1" alt="img-producto" />
                <div className="item-text">
                    <p  id='fecha'>fecha</p>
                    <p  id='estado'>estado de entrega</p>
                    <hr id='estilo-linea'></hr>
                    <p id='nombre-producto'>Titulo</p> 
                    <p  id='descripcion-producto'>Descripcion de producto</p> 
                    <button type="button" className="boton-compras" value="ver-compra">Ver compra</button>
                    <button type="button" className="boton-compras" value="volver-a-comprar">Volver a comprar</button>
                </div>
            </div>
        </div>
    </div>
    )
}
