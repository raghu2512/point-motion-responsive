import React from 'react';
import { BsPlayCircleFill } from 'react-icons/bs';

import '../styles/header.css';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className='header'>
        <Navbar />
        <div className="container">
            <div className="headline">
                <h1>Managing your crypto portfolio has never been easier</h1>
                <p className='mt-3'>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                <div className="buttons mt-3 d-flex align-items-center">
                    <button className="btn pallet me-3">Get Started</button>
                    <span><BsPlayCircleFill className='ms-3' /> See How It Works</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;