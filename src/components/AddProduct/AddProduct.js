import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });
    };

    return (
        <div className='w-75 mx-auto'>
            <h2 className='my-4 fs-4'>Add Product Here</h2>
            <form className='d-flex flex-column w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='my-2 px-2 py-1 fs-0' autoComplete='off' placeholder='Product Name' {...register("name", { required: true })} />
                <input className='my-2 px-2 py-1 fs-0' autoComplete='off' placeholder='Product Price' type="number" {...register("price")} />
                <input className='my-2 px-2 py-1 fs-0' autoComplete='off' placeholder='Product Image URL' type="text" {...register("img")} />
                <input className='my-2 px-2 py-1' type="submit" value='Add Product' />
            </form>
        </div>
    );
};

export default AddProduct;