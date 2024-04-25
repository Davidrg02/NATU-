import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

export default function Editar({ data }) {
    const [idPersona, setIdPersona] = useState(data.idPersona)
    const [personaNombre, setPersonaNombre] = useState(data.personaNombre)
    const [personaApellido, setPersonaApellido] = useState(data.personaApellido)
    const [personaSexo, setPersonaSexo] = useState(data.personaSexo)
    const [personaEdad, setPersonaEdad] = useState(data.personaEdad)
    const [personaTelefono, setPersonaTelefono] = useState(data.personaTelefono)

    const validarPalabra = (event) => {//Vacio,Longitudes, caracteres
        const caracteresNoDeseados = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (!event.target.value || caracteresNoDeseados.test(event.target.value) || event.target.value.toString().length > 100 ||
            event.target.value.trim() === ""  ) {
            event.target.style.boxShadow = '0 0 5px red'; // Aplicar sombra de color rojo si está vacío
        }
        else {
            event.target.style.boxShadow = 'none'; // Limpiar la sombra si no está vacío
            event.target.style.boxShadow = '0 0 5px green';
        }
    };
    const validarCampo = (event) => {//Vacio,Longitudes, caracteres
        const caracteresNoDeseados = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (!event.target.value || caracteresNoDeseados.test(event.target.value) || event.target.value > 112 ||
         event.target.value < 0 || event.target.value.trim() === ""  ) {
            event.target.style.boxShadow = '0 0 5px red'; // Aplicar sombra de color rojo si está vacío
        }

        else {
            event.target.style.boxShadow = 'none'; // Limpiar la sombra si no está vacío
            event.target.style.boxShadow = '0 0 5px green';
        }
    };

    const validarNumero = (event) => {
        const caracteresNoDeseados = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (!event.target.value || caracteresNoDeseados.test(event.target.value) || event.target.value.toString().length > 11 || event.target.value.toString().length < 7 ) {
            event.target.style.boxShadow = '0 0 5px red'; // Aplicar sombra de color rojo si está vacío
        }

        else {
            event.target.style.boxShadow = 'none'; // Limpiar la sombra si no está vacío
            event.target.style.boxShadow = '0 0 5px green';
        }
    };

    const validarCdF = (event) => {
        const caracteresNoDeseados = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (caracteresNoDeseados.test(event.target.value) || event.target.value.toString().length > 11 || (event.target.value.toString().length < 7 && event.target.value.toString().length > 1   )) {
            event.target.style.boxShadow = '0 0 5px red'; // Aplicar sombra de color rojo si está vacío
        }

        else {
            event.target.style.boxShadow = 'none'; // Limpiar la sombra si no está vacío
            event.target.style.boxShadow = '0 0 5px green';
        }
    };
    const botonDesactivado = () => {
        if (!idPersona || idPersona.toString().length > 11 || idPersona.toString().length < 7){
            return true; // Deshabilita si el documento de identificación no está presente o es demasiado largo
        } 

        if (!personaNombre || personaNombre.trim() === "" || /[!@#$%^/?<>"']/g.test(personaNombre) || /\d/.test(personaNombre) || personaNombre.length > 100) {
            return true; // Deshabilita si el nombre está vacío, contiene caracteres especiales, dígitos o es demasiado largo
        }
        
        if (!personaApellido || personaApellido.trim() === "" ||  /[@!#$%^/?<>"]/g.test(personaApellido) || /\d/.test(personaApellido) ||  personaApellido.length > 100){
            return true; // Deshabilita si el apellido está vacío, contiene caracteres especiales, dígitos o es demasiado largo
        }
    
        if (personaEdad === null || personaEdad < 0 || personaEdad > 112) {
            return true; // Deshabilita si la edad no está presente o está fuera del rango
        } 
    
        if (!personaTelefono || personaTelefono.toString().length > 11 || personaTelefono.toString().length < 6){
            return true; // Deshabilita si el documento de identificación no está presente o es demasiado largo
        } 
        return false; // Si todas las condiciones se cumplen, devuelve false (habilitado)
    }

    // Función para enviar los datos al backend

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/personas/${data.idPersona}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idPersona: idPersona,
                personaNombre: personaNombre,
                personaApellido: personaApellido,
                personaSexo: personaSexo,
                personaEdad: personaEdad,
                personaTelefono: personaTelefono
            })
        })
        const responseData = await response.json()
        console.log(responseData.body)
        if (!responseData.error) {
            toast.success(responseData.body)
        }else{
            toast.error(responseData.body)
        }
    }

    return (
        <div>
            <ToastContainer position='bottom-right'/>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Documento de identificación</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="" 
                    onChange={(event) => setIdPersona(event.target.value)}
                    value={idPersona}
                    onBlur={validarNumero}
                />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" 
                    onChange={(event) => setPersonaNombre(event.target.value)}
                    value={personaNombre}
                    onBlur={validarPalabra}
                />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Apellido</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" 
                    onChange={(event) => setPersonaApellido(event.target.value)}
                    value={personaApellido}
                    onBlur={validarPalabra}
                />
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Sexo</label>
                <select class="form-select" aria-label="Default select example"
                    onChange={(event) => setPersonaSexo(event.target.value)}
                    value={personaSexo}
                >
                    <option selected>Seleccione una opción</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                </select>
            </div>

            
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Edad</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="" 
                    onChange={(event) => setPersonaEdad(event.target.value)}
                    value={personaEdad}
                    onBlur={validarCampo}
                />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Telefono</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="" 
                    onChange={(event) => setPersonaTelefono(event.target.value)}
                    value={personaTelefono}
                    onBlur={validarNumero}
                />
            </div>
            <button type="submit" class="btn btn-primary" onClick={handleSubmit} 
            disabled={botonDesactivado()}
            >Guardar</button>
        </div>
    )
}