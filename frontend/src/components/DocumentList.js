import React from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
const DocumentList=({documents,fetchDocuments})=>{
    const handleDelete=async(id)=>{
        try{
            await axios.delete(`http://localhost:1000/api/Document/${id}`);
            alert('Deleted Successfully');
            fetchDocuments();
        }
        catch(err){
            alert('Error deleting Post');
        }
    }

    return (
        <div>
            {documents.length > 0 ? (
                documents.map((doc) => (
                    <Card key={doc._id} className="mb-4 shadow-sm">
                        <Card.Body>
                            <Card.Title>{doc.title}</Card.Title>
                            <Card.Text>{doc.content}</Card.Text>
                            <Button variant="info" className="mt-2">View Details</Button>
                            <Button variant="danger" className="mt-2" onClick={()=>handleDelete(doc.id)}>Delete</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Added on {new Date(doc.createdAt).toLocaleDateString()}</Card.Footer>
                    </Card>
                ))
            ) : (
                <p className="text-center mt-5">No documents found</p>
            )}
        </div>
    );
};


export default DocumentList;
