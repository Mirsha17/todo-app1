import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Card } from 'react-bootstrap';

const AddDocumentForm = ({ fetchDocuments }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:1000/api/Document/create', { title, content });
            setTitle('');
            setContent('');
            fetchDocuments();
        } catch (error) {
            console.error('Error adding document', error);
        }
    };
    
    return (
        <Card className="shadow-sm p-4 bg-light">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="shadow-sm"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="shadow-sm"
                    />
                </Form.Group>

                <Button variant="success" type="submit" className="shadow-sm">
                    Add Document
                </Button>
            </Form>
        </Card>
    );
};

export default AddDocumentForm;


