import Nav from '../components/Nav'; 
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Special from '../components/Special';
import ReservationsPage from './ReservationPage';



function ReservationRouter() {
  return (
    <div className="ReservationRouter">
      <Nav/> 
      <ReservationsPage/>
      <Footer /> 
    </div>
  );
}

export default ReservationRouter;
