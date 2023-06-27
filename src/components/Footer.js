import React from 'react';
import favilogo from '../assets/favilogo.png'
import '../styles/Footer.css'


export default function Footer() {
  return (
    <footer className="footer-container">
    <div className='part1'>
            <div>
              <img src={favilogo}/>
          </div>

        <div className="locations">
                        <h5>LOCATIONS</h5>
                        <ul>
                            <li>Mahnattan</li>
                            <li>Bronx</li>
                            <li>Queen</li>
                            <li>Brooklyn</li>
                        </ul>
        </div>
         <div className="opening-times">
                        <h5>OPENING TIMES</h5>
                        <ul>
                            <li>Mon - Wed: 10:30AM - 12:00AM</li>
                            <li>Fri: 12:00PM - 1:00AM</li>
                            <li>Sat - Sun: 10:30AM - 12:00AM</li>
                        </ul>
        </div>
        <div className="contact">
                        <h5>CONTACT US</h5>
                        <ul>
                            <li>666 , New York - Bronx</li>
                            <li>Tel: +1 000 000 0000</li>
                            <li>Email: info@littlelemon.com</li>
                        </ul>
         </div>
           </div>  

          
    <div className="part2">
              <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
      </div>
          
          
    </footer>
  )
}
