import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

export default function Crear() {
    const [idPersona, setIdPersona] = useState(0)
    const [personaNombre, setPersonaNombre] = useState("")
    const [personaApellido, setPersonaApellido] = useState("")
    const [personaSexo, setPersonaSexo] = useState(null)
    const [personaEdad, setPersonaEdad] = useState(null)
    const [personaTelefono, setPersonaTelefono] = useState(0)
    const [PERSONA_idPersona, setPERSONA_idPersona] = useState(0) // Documento de la persona cabeza de familia

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

    const validarTelefono = (event) => {
        const caracteresNoDeseados = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (!event.target.value || caracteresNoDeseados.test(event.target.value) || event.target.value.toString().length > 13 || event.target.value.toString().length < 7 || event.target.value<0 ) {
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

        if (!personaNombre || personaNombre.trim() === "" || /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g.test(personaNombre) || /\d/.test(personaNombre) || personaNombre.length > 100) {
            return true; // Deshabilita si el nombre está vacío, contiene caracteres especiales, dígitos o es demasiado largo
        }
        
        if (!personaApellido || personaApellido.trim() === "" ||  /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g.test(personaApellido) || /\d/.test(personaApellido) ||  personaApellido.length > 100){
            return true; // Deshabilita si el apellido está vacío, contiene caracteres especiales, dígitos o es demasiado largo
        }
    
        if (personaEdad === null || personaEdad < 0 || personaEdad > 112) {
            return true; // Deshabilita si la edad no está presente o está fuera del rango
        } 
    
        if (!personaTelefono || personaTelefono.toString().length > 13 || personaTelefono.toString().length < 6 || personaTelefono<1){
            return true; // Deshabilita si el documento de identificación no está presente o es demasiado largo
        } 
    
        if (PERSONA_idPersona.toString().length == 0 ||  // Campo vacío
            (PERSONA_idPersona.toString().length >= 7 && PERSONA_idPersona.toString().length <= 10)  // Longitud entre 7 y 10
        ) {
            // Habilita si el documento de la persona cabeza de familia está vacío o tiene longitud entre 7 y 10
            return false; // Aquí cambiamos a false, indicando que es válido
        } else {
            // Si no cumple con ninguno de los criterios anteriores, es decir, es demasiado largo, demasiado corto o no está vacío, lo deshabilitamos
            return true;
        }
        
        
        
        
        
        return false; // Si todas las condiciones se cumplen, devuelve false (habilitado)
    }
    
    
    // Función para enviar los datos al backend

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/personas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idPersona: idPersona,
                personaNombre: personaNombre,
                personaApellido: personaApellido,
                personaSexo: personaSexo,
                personaEdad: personaEdad,
                personaTelefono: personaTelefono,
                PERSONA_idPersona: PERSONA_idPersona
            })
        })
        const responseData = await response.json()
        console.log(responseData.body)
        if (!responseData.error) {
            toast.success(responseData.body)
            setIdPersona(null)
            setPersonaNombre("")
            setPersonaApellido("")
            setPersonaSexo(null)
            setPersonaEdad(null)
            setPersonaTelefono(null)
            setPERSONA_idPersona(null)
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
                    min="1" // Establecer el valor mínimo permitido
                    max="112" // Establecer el valor máximo permitido
                    value={personaEdad}
                    onBlur={validarCampo}
                />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Telefono</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="" 
                    onChange={(event) => setPersonaTelefono(event.target.value)}
                    value={personaTelefono}
                    onBlur={validarTelefono}
                />
            </div>
            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Documento de la persona cabeza de familia: <b style={{ display: 'inline-block', marginLeft: '5px' }}>(dejar vacío en caso de vivir solo)</b></label>


                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="" 
                    onChange={(event) => setPERSONA_idPersona(event.target.value)}
                    value={PERSONA_idPersona}
                    onBlur={validarCdF}
                />
            </div>
            <button type="submit" class="btn btn-primary" onClick={handleSubmit}
            disabled={botonDesactivado()}
            >Crear persona</button>
        </div>
    )
}