import {BrowserRouter} from 'react-router-dom'

import Header, { HeaderPhone } from './components/Header'
import Home from './components/Home'
import Work from './components/Work';
import TimeLine from './components/TimeLine';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [ratio,setRatio] = useState(window.innerWidth/window.innerHeight);

  useEffect(()=>{
    const ResizeRatio =() =>{
      setRatio(window.innerWidth/window.innerHeight);
    }

    window.addEventListener('resize',ResizeRatio);

    return()=>{
      window.removeEventListener('resize',ResizeRatio);
    }
  },[ratio]);

  return ratio < 2?(
    <BrowserRouter >
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home ratio={ratio} />
      <Work />
      <TimeLine />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </BrowserRouter>
  ) : (<em id='customMessage'> Please change the ration to View!</em>)
}



export default App;
