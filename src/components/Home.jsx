import React, { useEffect, useRef } from 'react'
import {animate, motion} from 'framer-motion'
import Typewriter from 'typewriter-effect'
import {BsArrowUpRight , BsChevronDown} from 'react-icons/bs'

const Home = ({ratio}) => {

  useEffect(()=>{
    let downicon = document.getElementById('downicon');
  window.addEventListener('scroll', function(){
    if(window.pageYOffset >= 50){
      downicon.style.display = 'none';
    }else{
      downicon.style.display = 'unset';
    }
}) 
  })
  

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
            Namastee, I Am <br /> Rajesh Kumar
          </motion.h1>

          <Typewriter className='typewriterpara' options={{
            strings:['A Developer', 'A Coder', 'A Programmer', 'A Creator'],
            autoStart:true,
            loop:true,
            wrapperClassName: 'typewriterpara',
          }} />

          <div>
          <a href="mailto:official.raml03807@gmail.com">Hire Me</a>
          <a href="#work">Projects <BsArrowUpRight /></a>
          </div>

          <article>
            <p>
            +{
              ratio < 2 && (<motion.span whileInView={animationClintsCount} ref={clintCount}></motion.span>)
            }
            </p>
                
            <span>Clients Worldwide</span>
          </article>

          <aside>
          <article>
            <p>
            +{
              ratio < 2 && (<motion.span whileInView={animationProjectsCount}  ref={projectCount}>200</motion.span>)
            }
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
        <img src={'https://firebasestorage.googleapis.com/v0/b/ecommerce-raja.appspot.com/o/ecommerce%2F1719826369710-8ngr6cf3z9-141056953_3624618620919255_2018376255090419524_n.jpg?alt=media&token=f885ce4a-8dd9-4e0e-81e5-a4ec32b0d9ac'} alt="Rajesh" />
      </section>

      <a href="#footer" ><BsChevronDown id='downicon' /></a>
      
    </div>
  )
}

export default Home
