import React, { useState } from 'react'
import vg from '../assets/vg.png'
import { motion } from 'framer-motion';
import  toast  from 'react-hot-toast';

import {addDoc,collection} from 'firebase/firestore';
import {db} from '../firebase'

const Contact = () => {

  const [inputs,setInputs] = useState({name:'',email:'',massage:''});
  const [disableBtn,setDisableBtn] = useState(false);

    // const [name,setName] = useState("");
    // const [email,setEmail] = useState('');
    // const [massage,setMassage] = useState('');

    const changeHandler = (e) =>{
      // console.log(e.target.name)
      // console.log(e.target.value)
      setInputs({...inputs,[e.target.name]:e.target.value})
    }

    const submitHandler = async(e) =>{
      e.preventDefault();
      setDisableBtn(true);
      // console.log(name,email,massage)

      try {
        console.log(inputs);
        
        await addDoc(collection(db,'contacts'),{
          inputs
        })

        await setInputs({name:'',email:'',massage:''});
        toast.success('Successfully! Message Sent');
        setDisableBtn(false);
      } catch (error) {
        toast.error("Error! Massage can't send");
        console.log(error);
        setDisableBtn(false);
      }
      
      
    }


    const animations ={
      inputt:{
        initial:{
          x:'-100%',
          opacity:0
        },
        whileInView:{
          x:0,
          opacity:1
        }
      },
      input:{
        initial:{
          x:'100%',
          opacity:0
        },
        whileInView:{
          x:0,
          opacity:1
        }
      },

      button:{
        initial:{
          y:'-100%',
          opacity:0
        },
        whileInView:{
          y:0,
          opacity:1
        }
      }
    }

  return (    
    <div id='contact'>
      <section>
        <form onSubmit={submitHandler}>
            <h2>Contact Me</h2>

            <motion.input {...animations.inputt} transition={{delay:0.1}} type="text" name='name' value={inputs.name} onChange={changeHandler} placeholder='Your name'required />
            <motion.input {...animations.input} transition={{delay:0.2}} type="email" name='email' value={inputs.email} onChange={changeHandler} placeholder='Your Email'required />
            <motion.input {...animations.inputt} transition={{delay:0.3}} type="text" name='massage' value={inputs.massage} onChange={changeHandler} placeholder='Your Massage'required />


            {/* <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder='Your name'required />
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder='Your Email'required />
            <input type="text" value={massage} onChange={e=>setMassage(e.target.value)} placeholder='Your Massage'required /> */}

            <motion.button {...animations.button}  transition={{delay:0.4}} type='submit'  disabled={disableBtn} className={disableBtn?'disableBtn':''}>Send</motion.button>
        </form>
      </section>

      <aside>
        <img src={vg} alt="vg.png" />
      </aside>
    </div>
  )
}

export default Contact
