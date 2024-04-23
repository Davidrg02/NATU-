import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import './SearchBar.css';

export default function SearchBar({ handleSubmit, handleSearch, searchTerm }) {
    return (
        <div className="d-flex align-items-center" style={{ marginLeft: '20px', marginRight: '20px' }}>
            <form onSubmit={handleSubmit} className="d-flex align-items-center">
                <input 
                    className="form-control me-2" 
                    type="search" 
                    placeholder="Buscar" 
                    aria-label="Buscar" 
                    value={searchTerm}
                    onChange={handleSearch}
                    style={{ width: '400px', marginRight: '5px' }} 
                />
                <button className="btn btn-outline-success" type="submit">
                    <BiSearch />
                </button>
            </form>
        </div>
    );
}
