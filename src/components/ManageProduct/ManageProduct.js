import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Product from '../Product/Product';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/product`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleDeleteProduct = id => {
        const deleteStatus = window.confirm('Are you sure to delete this product?');
        if (deleteStatus) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                        toast.success('Product Deleted Successfully');
                    }
                })
        }
    }

    return (
        <div className='container'>
            <h2>Manage Product Here</h2>
            <div className='row row-cols-1 row-cols-md-4 g-4 mt-3'>
                {
                    products.map(product => <Product key={product._id} handleDeleteProduct={handleDeleteProduct} product={product}></Product>)
                }
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            ></Toaster>
        </div>
    );
};

export default ManageProduct;