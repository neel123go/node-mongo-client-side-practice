import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='my-5'>
            <Link style={{ textDecoration: 'none', color: 'orangered', margin: '10px' }} to='/addproduct'>Add Product</Link>
            <Link style={{ textDecoration: 'none', color: 'orangered', margin: '10px' }} to='/manageproduct'>Manage Product</Link>
        </div>
    );
};

export default Home;