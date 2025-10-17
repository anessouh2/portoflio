import './App.css'
import Home from './pages/home'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './pages/about'
function App() {
 useEffect(() => {
  AOS.init() ;
 },[]);

  return (
    <div className='big-container'>
       <Home/>
       <About/>
    </div>
  )
}

export default App
