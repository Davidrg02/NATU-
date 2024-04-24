import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Form, Button } from 'react-bootstrap';
import './SearchBar.css';

export default function SearchBar({ handleSubmit, handleSearch, searchTerm }) {
    return (
        <Form className="d-flex" onSubmit={handleSubmit} >
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-3"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearch}
            />
            <Button variant="outline-success" type="submit">
                <BiSearch />
            </Button>
        </Form>
    );
}
