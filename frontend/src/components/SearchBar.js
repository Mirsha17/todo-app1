import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = ({ search, setSearch }) => {
    return (
        <Form.Group className="mb-3">
            <Form.Control
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="shadow-sm"
            />
        </Form.Group>
    );
};

export default SearchBar;



