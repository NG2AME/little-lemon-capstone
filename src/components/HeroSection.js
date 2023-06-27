import React from 'react';
import "../styles/HeroSection.css";
import { Link } from 'react-router-dom';
import HeroImage from "../assets/gourmet.jpg"

const HeroSection = () => {
  return (
    <div className='herosection'>
        <div className='herocontent'>
            <div className="section-left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                  <div >
                      <Link to="/ReservationRouter" className='btn'>Reserve a Table</Link>
                </div>
            </div>
            <div className="section-right">
                <div className="image-box">
                    <img src={HeroImage} alt="Serving delicious dish" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
