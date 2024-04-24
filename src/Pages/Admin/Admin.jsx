import React, { useState, useEffect } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, TablePagination, Checkbox, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

// Importar componentes de la aplicación 
// import Create from './Create/Create.jsx';

import Edit from './Edit/Edit.jsx';

// Datos de ejemplo para la tabla
const personas = [
    {
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

const headerStyles = { 
    backgroundColor: '#3f51b5', 
    color: 'white', 
    fontWeight: 'bold',
};

export default function Personas() {
    const [rows, setRows] = useState(personas);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(false);
    const [editRow, setEditRow] = useState({});
    const [editOpen, setEditOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

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
    }, [open === false, editOpen === false, selected]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = (row) => {
        setEditOpen(true);
        setEditRow(row);
    };

    const handleEditClose = () => {
        setEditOpen(false);
        setEditRow({});
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

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
    };

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
    };

    const deleteItems = async () => {
        for (let i = 0; i < selected.length; i++) {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/personas/${selected[i]}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const responseData = await response.json();
                if (responseData.error) {
                    toast.error(responseData.body);
                } else {
                    toast.success(responseData.body);
                }
            } catch (error) {
                console.error('Error deleting persona:', error);
            }
        }
        setSelected([]);
    };

    const paginatedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <div className='container'>
            <ToastContainer position="bottom-right"/>
            <Dialog open={open} onClose={handleClose} maxWidth="lg" PaperProps={{ style: { width: '80%', maxHeight: '80vh' } }}>
                <DialogTitle sx={{ fontWeight: 600 }}>Crear persona</DialogTitle>
                <DialogContent>
                    {/* Aquí va tu componente para crear */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={editOpen} onClose={handleEditClose} maxWidth="lg" PaperProps={{ style: { width: '80%', maxHeight: '80vh' } }}>
                <DialogTitle sx={{ fontWeight: 600 }}>Editar persona</DialogTitle>
                <DialogContent>
                    {/* Aquí va tu componente para editar */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEditClose}>Cancelar</Button>
                </DialogActions>
            </Dialog>
            <h1 className='titulo'>Vista de Administrador</h1>
            <EmojiPeopleIcon sx={{ height: "150px", width: "150px" }}/>
            <form id="historial-search" className='input-group mb-3' onSubmit={handleSearch}>
                <input type="text" id="search" name="search" placeholder="Buscar persona" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='form-control'/>
                <button id="search-btn" type="submit" className='btn btn-outline-secondary'>
                    <SearchIcon />
                    Buscar
                </button>
            </form>
            <div style={{ ...headerStyles, width: "100%", borderRadius: "10px 10px 0px 0px", display: "flex", justifyContent: "right", borderBottom: '3px solid white' }}>
                <div>
                    {selected.length === 0 && (
                        <button type="button" className="btn-create" onClick={handleClickOpen}>
                            Crear
                            <AddCircleOutlineIcon sx={{ fontSize: '30px' }}/>
                        </button>
                    )}
                    {selected.length > 0 && (
                        <div id="selected-container">
                            <p>Seleccionados: {selected.length}</p>
                            <IconButton edge="end" color="inherit" sx={{ marginInline: "10px" }} title="Eliminar" onClick={deleteItems}>
                                <DeleteIcon sx={{ fontSize: '30px' }}/>
                            </IconButton>
                        </div>
                    )}
                </div>
            </div>
            <TableContainer component={Paper} sx={{ borderRadius: "0px" }} stickyHeader>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell style={headerStyles} align="center"><EditIcon /></TableCell>
                            <TableCell style={headerStyles} padding="checkbox"></TableCell>
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
                                        inputProps={{ 'aria-labelledby': `enhanced-table-checkbox-${row.idPersona}` }}
                                        onClick={(event) => handleCheckboxChange(event, row.idPersona)}
                                    />
                                </TableCell>
                                <TableCell component="th" scope="row">{row.idPersona}</TableCell>
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
                    minHeight: "55px" 
                }}
            />
        </div>
    );
}
