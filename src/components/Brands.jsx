import React from 'react';

import '../styles/brands.css';
import logo from '../assets/Logos.png';

const Brands = () => {
  return (
    <div className='container brands'>
        <h3>Over 32k+ software  businesses growing with AR Shakir.</h3>
        <img src={logo} alt="logo" className='mt-5' />
    </div>
  )
}

export default Brands;