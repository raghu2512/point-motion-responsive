import React from 'react';

import '../styles/feature.css';
import featureImage from '../assets/Illustration.png'
import featureImage2 from '../assets/Logos2.png';

const Feature = () => {
  return (
    <div className='feature container py-5'>
        <div className='feature1 d-flex align-items-center justify-content-between'>
            <div className="col-md-5 col-10">
                <img src={featureImage} alt="featureImage" className='featureImage' />
            </div>
            <div className="col-md-5 col-10 feature-heading c_one">
                <h4 className='mb-3'>OUR FEATURE</h4>
                <h1 className='mb-3'>All of your portfolios are linked to your AR Shakir account</h1>
                <p className='mb-3'>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
                <button className="btn violet">Get Started</button>
            </div>
        </div>

        <div className="feature2 d-flex align-items-center justify-content-between">
            <div className="col-md-5 col-10 feature-heading">
                <h4 className='mb-3'>OUR FEATURE</h4>
                <h1 className='mb-3'>All payments can be managed from one account</h1>
                <p className='mb-3'>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
                <button className="btn violet">Get Started</button>
            </div>
            <div className="col-md-5 col-10">
                <img src={featureImage2} alt="featureImage2" className='featureImage2' />
            </div>
        </div>
    </div>
  )
}

export default Feature;