import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

const UpdateProduct = () => {
    const { id } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Product Updated Successfully');
            });
    };

    return (
        <div className='w-75 mx-auto'>
            <h2 className='my-4 fs-4'>Update Product</h2>
            <form className='d-flex flex-column w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='my-2 px-2 py-1 fs-0' autoComplete='off' placeholder={product.name} {...register("name", { required: true })} />
                <input className='my-2 px-2 py-1 fs-0' autoComplete='off' placeholder={product.price} type="number" {...register("price")} />
                <input className='my-2 px-2 py-1 fs-0' autoComplete='off' placeholder={product.img} type="text" {...register("img")} />
                <input className='my-2 px-2 py-1' type="submit" value='Update Product' />
            </form>
            <Toaster
                position="top-right"
                reverseOrder={false}
            ></Toaster>
        </div>
    );
};

export default UpdateProduct;