import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='my-3'>
            <Link style={{ textDecoration: 'none', color: 'orangered', margin: '10px' }} to='/addproduct'>Add Product</Link>
            <Link style={{ textDecoration: 'none', color: 'orangered', margin: '10px' }} to='/manageproduct'>Manage Product</Link>
        </div>
    );
};

export default Header;