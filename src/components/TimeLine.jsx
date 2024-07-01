import React from 'react';
import data from '../assets/data.json'
import { motion } from 'framer-motion';

const TimeLine = () => {



  const animations = {
    0:{
      x:'50%',
      opacity:0,
    },
    1:{
      x:'-50%',
      opacity:0,
    },
    2:{
      x:'50%',
      opacity:0,
    },
    3:{
      x:'-50%',
      opacity:0,
    },
    4:{
      x:'50%',
      opacity:0,
    },
    whileInViews:{
        x:0,
        opacity:1
    },
}
  return (
    <div id='timeline'>
        
      <div className='timelineBox'>
        {
            data.projects.map((item,index)=>(
                <TimelineItems whileInViews={animations.whileInViews} Initials={animations[index]}  heading={item.title} text={item.date} index={index}  key={item.title} />
              
            ))
        }

        

      </div>
    </div>
  )
}

const TimelineItems = ({heading,text,index,whileInViews,Initials}) =>(
  
    <motion.div  whileInView={whileInViews} initial={Initials} className={`timelineItem ${index%2 === 0 ? 'leftTimeline':'rightTimeline'}` }>
        <div>
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    </motion.div>
);



export default TimeLine
