import Nav from '../components/Nav'; 
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Special from '../components/Special';



function HomePage() {
  return (
    <div className="HomePage">
      <Nav/> 
      <HeroSection/> 
      <Special/>
      <Footer /> 
    </div>
  );
}

export default HomePage;
