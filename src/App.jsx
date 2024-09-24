import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './components/Navbar';
import Help from './Pages/Help';
import Privacy from './Pages/Privacy';
import Contact from './Pages/Contact';
import Cards from './components/Cards';  // Updated path to Cards component
import Surah from './components/Surah';  // Updated path to SurahPage component
import Footer from './components/Footer';




const App = () => {
  return (
    <>
      <Navbar />
      <div>
        




        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='help' element={<Help />} />
          <Route path='privacy' element={<Privacy />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cards' element={<Cards />} />
          <Route path=':surahId' element={<Surah />} /> {/* Use SurahPage instead of Surah */}

            
         
        </Routes>
     
            
       
      </div>
      <Footer/>
    </>
  );
};

export default App;
