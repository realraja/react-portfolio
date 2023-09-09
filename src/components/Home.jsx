import React, { useRef } from 'react'
import {animate, motion} from 'framer-motion'
import Typewriter from 'typewriter-effect'
import {BsArrowUpRight , BsChevronDown} from 'react-icons/bs'
import me from '../assets/logo.png'

const Home = () => {

  const clintCount = useRef(null);
  const projectCount = useRef(null);

  const animationClintsCount = () =>{
    animate(0,100,{
      duration:1,
      onUpdate:(v)=>(clintCount.current.textContent = v.toFixed()),
    })
  }
  const animationProjectsCount = () =>{
    animate(0,500,{
      duration:1,
      onUpdate:(v)=>(projectCount.current.textContent = v.toFixed()),
    })
  }

    const animations = {
        h1:{
            initial:{
                x:'-100%',
                opacity:0,
              },
              whileInView:{
                x:0,
                opacity:1,
              }
        },
        button:{
            initial:{
                y:'-100%',
                opacity:0,
              },
              whileInView:{
                y:0,
                opacity:1,
              }
        }
    }
  return (
    <div id='home'>
      <section><div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Rajesh Kumar
          </motion.h1>

          <Typewriter options={{
            strings:['A Developer', 'A Coder', 'A Programmer', 'A Creator'],
            autoStart:true,
            loop:true,
            wrapperClassName: 'typewriterpara'
          }} />

          <div>
          <a href="mailto:official.raml03807@gmail.com">Hire Me</a>
          <a href="#work">Projects <BsArrowUpRight /></a>
          </div>

          <article>
            <p>
            +<motion.span whileInView={animationClintsCount} ref={clintCount}></motion.span>
            </p>
                
            <span>Clients Worldwide</span>
          </article>

          <aside>
          <article>
            <p>
            +<motion.span whileInView={animationProjectsCount}  ref={projectCount}>200</motion.span>
            </p>
                
            <span>Projects Done</span>
          </article>

          <article data-special>
            <p>Contact </p>
                
            <span>raml03807@gmail.com</span>
          </article>
          </aside>

        </div></section>


      <section>
        <img src={me} alt="Rajesh" />
      </section>
      <BsChevronDown />
    </div>
  )
}

export default Home
