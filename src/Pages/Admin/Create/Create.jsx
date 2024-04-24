import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Crear() {
    const [idPersona, setIdPersona] = useState(0);
    const [personaNombre, setPersonaNombre] = useState('');
    const [personaApellido, setPersonaApellido] = useState('');
    const [personaSexo, setPersonaSexo] = useState(null);
    const [personaEdad, setPersonaEdad] = useState(null);
    const [personaTelefono, setPersonaTelefono] = useState(0);
    const [PERSONA_idPersona, setPERSONA_idPersona] = useState(0); // Documento de la persona cabeza de familia

    const validarPalabra = (event) => {
        const caracteresNoDeseados = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (
            !event.target.value ||
            caracteresNoDeseados.test(event.target.value) ||
            event.target.value.toString().length > 100 ||
            event.target.value.trim() === ''
        ) {
            event.target.style.boxShadow = '0 0 5px red';
        } else {
            event.target.style.boxShadow = 'none';
            event.target.style.boxShadow = '0 0 5px green';
        }
    };

    const validarCampo = (event) => {
        const caracteresNoDeseados = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (
            !event.target.value ||
            caracteresNoDeseados.test(event.target.value) ||
            event.target.value > 112 ||
            event.target.value < 0 ||
            event.target.value.trim() === ''
        ) {
            event.target.style.boxShadow = '0 0 5px red';
        } else {
            event.target.style.boxShadow = 'none';
            event.target.style.boxShadow = '0 0 5px green';
        }
    };

    const validarNumero = (event) => {
        const caracteresNoDeseados = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (
            !event.target.value ||
            caracteresNoDeseados.test(event.target.value) ||
            event.target.value.toString().length > 11 ||
            event.target.value.toString().length < 7
        ) {
            event.target.style.boxShadow = '0 0 5px red';
        } else {
            event.target.style.boxShadow = 'none';
            event.target.style.boxShadow = '0 0 5px green';
        }
    };

    const validarTelefono = (event) => {
        const caracteresNoDeseados = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (
            !event.target.value ||
            caracteresNoDeseados.test(event.target.value) ||
            event.target.value.toString().length > 13 ||
            event.target.value.toString().length < 7 ||
            event.target.value < 0
        ) {
            event.target.style.boxShadow = '0 0 5px red';
        } else {
            event.target.style.boxShadow = 'none';
            event.target.style.boxShadow = '0 0 5px green';
        }
    };

    const validarCdF = (event) => {
        const caracteresNoDeseados = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (
            caracteresNoDeseados.test(event.target.value) ||
            event.target.value.toString().length > 11 ||
            (event.target.value.toString().length < 7 && event.target.value.toString().length > 1)
        ) {
            event.target.style.boxShadow = '0 0 5px red';
        } else {
            event.target.style.boxShadow = 'none';
            event.target.style.boxShadow = '0 0 5px green';
        }
    };

    const botonDesactivado = () => {
        if (!idPersona || idPersona.toString().length > 11 || idPersona.toString().length < 7) {
            return true;
        }

        if (
            !personaNombre ||
            personaNombre.trim() === '' ||
            /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g.test(personaNombre) ||
            /\d/.test(personaNombre) ||
            personaNombre.length > 100
        ) {
            return true;
        }

        if (
            !personaApellido ||
            personaApellido.trim() === '' ||
            /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g.test(personaApellido) ||
            /\d/.test(personaApellido) ||
            personaApellido.length > 100
        ) {
            return true;
        }

        if (personaEdad === null || personaEdad < 0 || personaEdad > 112) {
            return true;
        }

        if (
            !personaTelefono ||
            personaTelefono.toString().length > 13 ||
            personaTelefono.toString().length < 6 ||
            personaTelefono < 1
        ) {
            return true;
        }

        if (PERSONA_idPersona.toString().length === 0 || (PERSONA_idPersona.toString().length >= 7 && PERSONA_idPersona.toString().length <= 10)) {
            return false;
        } else {
            return true;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
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
        });
        const responseData = await response.json();
        console.log(responseData.body);
        if (!responseData.error) {
            toast.success(responseData.body);
            setIdPersona(null);
            setPersonaNombre('');
            setPersonaApellido('');
            setPersonaSexo(null);
            setPersonaEdad(null);
            setPersonaTelefono(null);
            setPERSONA_idPersona(null);
        } else {
            toast.error(responseData.body);
        }
    };

    return (
        <div>
            <ToastContainer position='bottom-right'/>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Documento de identificación</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder=""
                    onChange={(event) => setIdPersona(event.target.value)}
                    value={idPersona}
                    onBlur={validarNumero}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="exampleFormControlInput2" placeholder=""
                    onChange={(event) => setPersonaNombre(event.target.value)}
                    value={personaNombre}
                    onBlur={validarPalabra}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput3" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="exampleFormControlInput3" placeholder=""
                    onChange={(event) => setPersonaApellido(event.target.value)}
                    value={personaApellido}
                    onBlur={validarPalabra}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput4" className="form-label">Sexo</label>
                <select className="form-select" id="exampleFormControlInput4"
                    onChange={(event) => setPersonaSexo(event.target.value)}
                    value={personaSexo}
                >
                    <option value="">Seleccione</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput5" className="form-label">Edad</label>
                <input type="number" className="form-control" id="exampleFormControlInput5" placeholder=""
                    onChange={(event) => setPersonaEdad(event.target.value)}
                    value={personaEdad}
                    onBlur={validarCampo}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput6" className="form-label">Teléfono</label>
                <input type="number" className="form-control" id="exampleFormControlInput6" placeholder=""
                    onChange={(event) => setPersonaTelefono(event.target.value)}
                    value={personaTelefono}
                    onBlur={validarTelefono}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput7" className="form-label">Documento de la persona cabeza de familia</label>
                <input type="number" className="form-control" id="exampleFormControlInput7" placeholder=""
                    onChange={(event) => setPERSONA_idPersona(event.target.value)}
                    value={PERSONA_idPersona}
                    onBlur={validarCdF}
                />
            </div>
            <button className="btn btn-primary" onClick={handleSubmit} disabled={botonDesactivado()}>Guardar</button>
        </div>
    );
}
