import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import DocumentList from './components/DocumentList';
import AddDocumentForm from './components/AddDocumentForm';
import { Container, Row, Col, Form, Navbar, Nav } from 'react-bootstrap';

const App = () => {
    const [documents, setDocuments] = useState([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('createdAt');
    const [limit, setLimit] = useState(10);

    const fetchDocuments = async () => {
        try {
            const response = await axios.get('http://localhost:1000/api/Document/pipeline', {
                params: { search, sort, limit },
            });
            setDocuments(response.data);
        } catch (error) {
            console.error('Error fetching documents', error);
        }
    };

    useEffect(() => {
        fetchDocuments();
    }, [search, sort, limit]);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#">TodoApp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#add">Add Document</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            <Container className="mt-5">
                <Row>
                    <Col md={8} className="mx-auto">
                        <h1 className="text-center mb-4">Todo App</h1>

                        <SearchBar search={search} setSearch={setSearch} />

                        <Form.Group as={Row} className="mb-4">
                            <Form.Label column sm="2">
                                Sort By:
                            </Form.Label>
                            <Col sm="4">
                                <Form.Select
                                    value={sort}
                                    onChange={(e) => setSort(e.target.value)}
                                    className="shadow-sm"
                                >
                                    <option value="createdAt">Date Created</option>
                                    <option value="title">Title</option>
                                </Form.Select>
                            </Col>
                            <Form.Label column sm="2">
                                Limit:
                            </Form.Label>
                            <Col sm="4">
                                <Form.Control
                                    type="number"
                                    value={limit}
                                    onChange={(e) => setLimit(e.target.value)}
                                    className="shadow-sm"
                                />
                            </Col>
                        </Form.Group>

                        <DocumentList documents={documents} fetchDocuments={fetchDocuments} />
                        <hr />
                        <h2 id="add" className="text-center mb-4">Add New Document</h2>
                        <AddDocumentForm fetchDocuments={fetchDocuments} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;
