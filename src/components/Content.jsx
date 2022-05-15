import React from 'react';

import '../styles/content.css';
import frame from '../assets/Frame1.png';

const Content = () => {
  return (
    <div className='content'>
    <div className='container columns'>
        <div className="column1"></div>
        <div className="column2"></div>
        <div className="column3"></div>
        <div className="column4">
            <img src={frame} alt="frame" />
        </div>
    </div>
    </div>
  )
}

export default Content;