import './App.css';
import Nav from './components/Nav'; 
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Special from './components/Special';
import Form from './components/Form';
import ReservationsPage from './components/ReservationPage';
import HomePage from './components/HomePage';
import ReservationRouter from './components/ReservationRouter';
import SpecialRouter from './components/SpecialRouter';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="HomePage" element={<HomePage />} />
          <Route path="ReservationRouter" element={<ReservationRouter />} />
          <Route path="SpecialRouter" element={<SpecialRouter />} />
      </Routes>
    </BrowserRouter>
    
      
   
      
    </div>
  );
}

export default App;
