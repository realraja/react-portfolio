import React from "react";
import {AiOutlineMenu} from 'react-icons/ai'

const Header = ({menuOpen,setMenuOpen}) => {
  return (
    <>
    <nav>

      <NaveContent setMenuOpen={setMenuOpen} />
    </nav>
    <button  className="navButton" onClick={()=>setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
    </button>


    </>
  );
};

export const HeaderPhone = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={`navPhone ${menuOpen? 'navPhoneComes':''}`}>
      <NaveContent setMenuOpen={setMenuOpen} />
    </div>
  )
}


const NaveContent = ({setMenuOpen}) =>(
  <>
    <h2 onClick={()=>setMenuOpen(false)}><a href="/">Raja.</a></h2>
      
      <div>
        <a href="#home"  onClick={()=>setMenuOpen(false)}>Home</a>
        <a href="#work"  onClick={()=>setMenuOpen(false)}>Work</a>
        <a href="#timeline"  onClick={()=>setMenuOpen(false)}>Experience</a>
        <a href="#services"  onClick={()=>setMenuOpen(false)}>Services</a>
        <a href="#testimonial"  onClick={()=>setMenuOpen(false)}>Testimonial</a>
        <a href="#contact"  onClick={()=>setMenuOpen(false)}>Contact</a>
      </div>
      <a href="mailto:official.raml03807@gmail.com">
        <button>Email</button>
      </a>
  </>
)

export default Header;
