import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product, handleDeleteProduct }) => {
    const { _id, name, price, img } = product;

    return (
        <div className='col'>
            <Card className='mb-3'>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <Card.Text>{img}</Card.Text>
                    <Link to={`/updateproduct/${_id}`}><button className='btn btn-primary fs-0 mx-2' style={{ padding: '3px 12px', fontSize: '15px' }}>Update</button></Link>
                    <button onClick={() => handleDeleteProduct(_id)} className='btn btn-danger fs-0 mx-2' style={{ padding: '3px 12px', fontSize: '15px' }}>Delete</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;

