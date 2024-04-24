import React from 'react'
import "./Seller.css"
import "../../App.jsx"

// Importar componentes de Material-UI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Checkbox from '@mui/material/Checkbox';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SearchIcon from '@mui/icons-material/Search';
import UploadIcon from '@mui/icons-material/Upload';
import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Icon } from '@mui/material';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

// Importar componentes de la aplicación 
import Crear from './Crear/Crear.jsx';
import Editar from './Editar/Editar.jsx';

const headerStyles = { 
    backgroundColor: '#2f8042', 
    color: 'white', 
    fontWeight: 'bold',
};


const personas = [{
    idPersona: 10255410021,
    personaNombre: "Juan",
    personaApellido: "Perez",
    personaSexo: "M",
    personaEdad: 20,
    personaTelefono: 1234567890,
    },
    {
    idPersona: 10255410022,
    personaNombre: "Maria",
    personaApellido: "Gomez",
    personaSexo: "F",
    personaEdad: 25,
    personaTelefono: 1234567890,
    }
];
    

export default function Personas() {

    const [rows, setRows] = useState(personas); // rows es el estado que guarda los datos de la tabla

    // Define el estado para la página actual y el número de filas por página
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    // Funciones para manejar el cambio de página y el cambio en el número de filas por página
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Asegúrate de que solo se muestren las filas correspondientes a la página actual
    
    const paginatedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);


    
    // ----- Selección de filas ----- //


    const [selected, setSelected] = useState([]);

    const handleCheckboxChange = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    }


    //----- Dialogos -----//

    // Dialogo para agregar una nueva persona

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    // Dialogo para editar una persona

    const [editRow, setEditRow] = useState({});
    const [editOpen, setEditOpen] = useState(false);

    const handleEdit = (row) => {
        setEditOpen(true);
        setEditRow(row);
        console.log(row);
    }

    const handleEditClose = () => {
        setEditOpen(false);
        setEditRow({});
    };
       
    
    //----- Conexion con el backend -----//

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/personas`);
                const data = await response.json();
                setRows(data.body);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [open == false, editOpen === false, selected]);

    // ----- Búsqueda ----- //

    const [inputValue, setInputValue] = useState('');

    const fetchPersonas = async (searchParam = '') => {
        const url = searchParam ? 
                    `${process.env.REACT_APP_API_URL}/api/personas/search/${encodeURIComponent(searchParam)}` : 
                    `${process.env.REACT_APP_API_URL}/api/personas`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setRows(data.body);
            setPage(0);
            if (searchParam) {
                console.log(data.body);
            }
        } catch (error) {
            console.error('Error fetching personas:', error);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchPersonas(inputValue);
    }


    //----- Eliminación de personas -----//

    const deleteItems = async (event) => {

        event.preventDefault();

        console.log(selected);
        
        for (let i = 0; i < selected.length; i++) {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/personas/${selected[i]}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const responseData = await response.json();
            console.log(responseData.body);

            if (responseData.error) {
                toast.error(responseData.body);
            }
            else {
                toast.success(responseData.body);
            }
        }
        setSelected([]);
    }

    return (
        <div className='container'>
            <ToastContainer position="bottom-right"/>

            {/*Dialogo para agregar una nueva persona*/}
            <Dialog 
                open={open} 
                onClose={handleClose} 
                maxWidth="lg" // puedes cambiar esto a 'xs', 'sm', 'md', 'lg', 'xl' o false
                PaperProps={{
                    style: {
                        width: '80%', // puedes cambiar esto al tamaño que desees
                        maxHeight: '80vh',
                    },
                }}
            >
                <DialogTitle sx={{fontWeight: 600}}>Crear persona</DialogTitle>
                <DialogContent>
                    <Crear />                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                </DialogActions>
            </Dialog>

            {/*Dialogo para editar una persona*/}
            <Dialog 
                open={editOpen} 
                onClose={handleEditClose} 
                maxWidth="lg"
                PaperProps={{
                    style: {
                        width: '80%',
                        maxHeight: '80vh',
                    },
                }}
            >
                <DialogTitle sx={{fontWeight: 600}}>Editar persona</DialogTitle>
                <DialogContent>
                    <Editar data={editRow}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEditClose}>Cancelar</Button>
                </DialogActions>
            </Dialog>

            {/*Titulo de la página*/}
            <h1 className='titulo'>Personas</h1>
            <EmojiPeopleIcon sx={{height: "150px", width: "150px"}}/>

            {/*Formulario de búsqueda*/}
            <form id="historial-search" className='input-group mb-3' onSubmit={handleSearch}>
                <input 
                    type="text" 
                    id="search" name="search" 
                    placeholder="Buscar persona" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className='form-control'
                    />
                <button id="search-btn" type="submit" className='btn btn-outline-secondary'>
                    <SearchIcon />
                    Buscar
                </button>
            </form>

            {/*Opciones de la tabla*/}
            <div style={{...headerStyles, width: "100%", borderRadius: "10px 10px 0px 0px", display: "flex", justifyContent: "right", borderBottom: '3px solid white'}}>
                    <div>
                        {selected.length === 0 && (
                            <button type="button" class="btn-create" onClick={handleClickOpen}>
                                Crear
                                <AddCircleOutlineIcon sx={{fontSize: '30px'}}/>
                            </button>
                        )}
                        {selected.length > 0 && (
                            <div id="selected-container">
                                <p>
                                    Seleccionados: {selected.length}
                                </p>
                                <IconButton edge="end" color="inherit" sx={{marginInline: "10px"}} title="Eliminar" onClick={deleteItems}>
                                    <DeleteIcon sx={{fontSize: '30px'}}/>
                                </IconButton>
                            </div>
                        )}
                    </div>
            </div>
            
            {/*Tabla de datos*/}
            <TableContainer component={Paper} sx={{borderRadius: "0px"}} stickyHeader>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell style={headerStyles} align="center" >
                            <EditIcon />
                        </TableCell>
                        <TableCell style={headerStyles} padding="checkbox">
                        </TableCell>
                        <TableCell style={headerStyles}>Documento</TableCell>
                        <TableCell style={headerStyles} align="left">Nombre(s)</TableCell>
                        <TableCell style={headerStyles} align="left">Apellidos</TableCell>
                        <TableCell style={headerStyles} align="center">Sexo</TableCell>
                        <TableCell style={headerStyles} align="center">Edad</TableCell>
                        <TableCell style={headerStyles} align="center">Teléfono</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {paginatedRows.map((row) => (
                    <TableRow
                        hover
                        role="checkbox"
                        aria-checked={selected.indexOf(row.idPersona) !== -1}
                        tabIndex={-1}
                        key={row.idPersona}
                        selected={selected.indexOf(row.idPersona) !== -1}
                    >
                        <TableCell>
                            <IconButton color="inherit" title="Editar" onClick={() => handleEdit(row)}>
                                <EditIcon />
                            </IconButton>
                        </TableCell>
                        <TableCell padding="checkbox">
                            <Checkbox
                                color="primary"
                                checked={selected.indexOf(row.idPersona) !== -1}
                                inputProps={{
                                    'aria-labelledby': `enhanced-table-checkbox-${row.idPersona}`,
                                }}
                                onClick={(event) => handleCheckboxChange(event, row.idPersona)}
                            />
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.idPersona}
                        </TableCell>
                        <TableCell align="left">{row.personaNombre}</TableCell>
                        <TableCell align="left">{row.personaApellido}</TableCell>
                        <TableCell align="center">{row.personaSexo}</TableCell>
                        <TableCell align="center">{row.personaEdad}</TableCell>
                        <TableCell align="center">{row.personaTelefono}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>

            {/*Paginación*/}
            <TablePagination
                rowsPerPageOptions={[10, 25, 50]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{
                    border: "1px solid #e0e0e0",
                    backgroundColor: "white",
                    width: "100%", 
                    borderRadius: "0px 0px 10px 10px", 
                    minHeight: "55px" }}
                />

            <div id="separador"></div>

        </div>
    )
}