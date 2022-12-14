import './App.css';
import React from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Premierleague from './components/Premierleague';
import Laliga from './components/Laliga';
import Ligue1 from './components/Ligue1';

import ReactDOM from 'react-dom';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
    
      <Navbar title='Live' title1='Football'/>
    <Routes>
     <Route path='/' element = {<Home/>}/>
     <Route path='/about' element = {<About/>}/>

     <Route path='/premierleague' element = {<Premierleague/>}/>
     <Route path='/laliga' element = {<Laliga/>}/>
     <Route path='/ligue1' element = {<Ligue1/>}/>
     <Route path='/contact' element = {<Contact/>}/>
     <Route path="*" element={<Home />} />
    </Routes>
    
    <Footer/>
      
     
    </>
  );
}

export default App;
