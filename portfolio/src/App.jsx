import './App.css'
import Home from './pages/home'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './pages/about'
import Projects from './pages/projects'
import Footer from './components/footer'

function App() {
 useEffect(() => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  });
 },[]);

  return (
    <div className='big-container'>
       <Home/>
       <About/>
       <Projects/>
       <Footer/>
    </div>
  )
}

export default App
