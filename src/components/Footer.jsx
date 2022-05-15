import React from 'react';
import { BsPlayCircle } from 'react-icons/bs';

import '../styles/footer.css';
import Rectangle from '../assets/Rectangle.png';
import Vector from '../assets/Vector.png';
import Vector2 from '../assets/Vector363.png';
import Ellipse from '../assets/Ellipse55.png';
import Frame from '../assets/Frame.png';
import Frame1 from '../assets/Frame3.png';
import Frame2 from '../assets/Frame2.png';

const Footer = () => {
  return (
    <>
    <div className='footer-upper container-fluid py-5'>
        <div className="footer-heading">
            <div className="col-md-7 col-10">
                <h1>Yet preference connection unpleasant yet melancholy but end appearance</h1>
            </div>
            <div className="col-md-4 col-10">
                <button className="btn">Get Started Now</button>
            </div>
        </div>
        <div className="row first pt-5">
            <div className="col-md-4 col-10 d-flex flex-column col-first">
                <div className="contents" id='one'>
                    <span>1</span>
                    <div className='point'>
                        <h3>First Working Process</h3>
                        <p>Blessing it ladyship on sensible judgment settling outweigh.</p>
                    </div>
                </div>
                <div className="contents" id='two'>
                    <span>2</span>
                    <div className='point'>
                        <h3>Dedicated Team</h3>
                        <p>Warmly little before cousin sussex entire men set.</p>
                    </div>
                </div>
                <div className="contents" id='three'>
                    <span>3</span>
                    <div className='point'>
                        <h3>24/7 Hours Support</h3>
                        <p>And excellence partiality estimating terminated day everything.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-5 col-10 imageFeature">
                <img src={Rectangle} alt="rectangle" className='rectangle' />
                <img src={Vector} alt="Vector" className='vector' />
                <img src={Vector2} alt="Vector2" className='vector2' />
                <img src={Ellipse} alt="Ellipse" className='ellipse' />
                <img src={Ellipse} alt="Ellipse" className='ellipse2' />
            </div>
        </div>
    </div>

    <div className="footer-lower">
        <div className="container second d-flex align-items-center justify-content-evenly my-5">
            <div className="col-md-3 col-5">
                <h2>Germany-based & GDPR Compliant</h2>
            </div>
            <div className="col-md-3 col-5 service">
                <img src={Frame} alt="Frame" />
                <h4>Data does not leave our servers</h4>
            </div>
            <div className="col-md-3 col-5 service">
                <img src={Frame1} alt="Frame1" />
                <h4>Own infrastructure</h4>
            </div>
            <div className="col-md-3 col-5 service">
                <img src={Frame2} alt="Frame2" />
                <h4>Most renowed data centers</h4>
            </div>
        </div>
        <div className="container d-flex align-items-center justify-content-between my-5 third">
            <div className="col-md-5 col-10 d-flex align-items-center flex-column text-center foot-col p-5">
                <h1>Outward clothes promise at gravity.</h1>
                <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                <button className="btn">Read More</button>
            </div>
            <div className="col-md-5 col-10 d-flex align-items-center flex-column text-center foot-col p-5">
                <h1>Sufficient particular impossible.</h1>
                <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                <button className="btn">Read More</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer;