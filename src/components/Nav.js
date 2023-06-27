import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.jpg'
import '../styles/Nav.css'
import HomePage from './HomePage'
import ReservationsPage from './ReservationPage'
import Special from './Special'
import ReorderIcon from '@mui/icons-material/Reorder';
import  { useState } from "react";



export default function Nav ()
{
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <header className='header'>
      <div className='leftside' id={openLinks ? "open" : "close"}>
        <img src={logo} />
        <div className='hiddenLinks'>
        <Link to="HomePage">home</Link>
        <Link to="">about</Link>
        <Link to="SpecialRouter">menu</Link>
        <Link to="ReservationRouter">reservations</Link>
        <Link to="">order online</Link>
        <Link to="">login</Link>  
      </div>
      </div>
      <div className='rightside' >
        <Link to="/HomePage">home</Link>
        <Link to="">about</Link>
        <Link to="/SpecialRouter">menu</Link>
        <Link to="/ReservationRouter">reservations</Link>
        <Link to="">order online</Link>
        <Link to="">login</Link>
      </div>
      <button onClick={toggleNavbar}>
          <ReorderIcon/>
        </button>
    </header>
  )
}
