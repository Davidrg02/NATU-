import React from 'react';
import "./Shopping.css"; // Importa los estilos CSS

export default function Shopping() {
    const compras = [
        {
            fecha: "12/05/2024",
            estado: "Pendiente de envío",
            nombre: "Producto A",
            descripcion: "Descripción del producto A",
            imagen: "https://blog.lexmed.com/images/librariesprovider80/blog-post-featured-images/shutterstock_1896755260.tmb-medium.jpg?sfvrsn=52546e0a_1"
        },
        {
            fecha: "10/05/2024",
            estado: "En tránsito",
            nombre: "Producto B",
            descripcion: "Descripción del producto B",
            imagen: "https://blog.lexmed.com/images/librariesprovider80/blog-post-featured-images/shutterstock_1896755260.tmb-medium.jpg?sfvrsn=52546e0a_1"
        },
        {
            fecha: "05/05/2024",
            estado: "Entregado",
            nombre: "Producto C",
            descripcion: "Descripción del producto C",
            imagen: "https://blog.lexmed.com/images/librariesprovider80/blog-post-featured-images/shutterstock_1896755260.tmb-medium.jpg?sfvrsn=52546e0a_1"
        }
    ];

    const getColorForEstado = (estado) => {
        switch (estado) {
            case "Pendiente de envío":
                return "green";
            case "En tránsito":
                return "orange";
            case "Entregado":
                return "blue";
            default:
                return "black";
        }
    };

    return (
        <div id='container-compras'>
            {compras.map((compra, index) => (
                <div key={index} id="container-producto">
                    <div className="item-content">
                        <img src={compra.imagen} alt="img-producto" />
                        <div className="item-text">
                            <p id='fecha'>{compra.fecha}</p>
                            <p id='estado' style={{ color: getColorForEstado(compra.estado) }}>{compra.estado}</p>
                            <hr id='estilo-linea'></hr>
                            <p id='nombre-producto'>{compra.nombre}</p>
                            <p id='descripcion-producto'>{compra.descripcion}</p>
                            <button type="button" id="boton-compras" value="ver-compra">Ver compra</button>
                            <button type="button" id="boton-compras" value="volver-a-comprar">Volver a comprar</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
