import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import "./page.scss"
// import "./global.scss"
import p1 from '../image/1.jpg'
import p2 from '../image/2.jpg'
import p3 from '../image/3.jpg'
import p4 from '../image/4.jpg'
import p5 from '../image/5.jpg'
import p6 from '../image/6.jpg'
import p7 from '../image/7.jpg'
import p8 from '../image/8.jpg'
import p9 from '../image/9.jpg'
import p10 from '../image/10.jpg'
import p11 from '../image/10.jpg'
import p12 from '../image/10.jpg'

import { useTransform, useScroll, motion, MotionValue  } from 'framer-motion';
import Lenis from 'lenis';
import useDimension from './useDimension';




function SlideablePage() {
  const images = [
    `${p1}`,
    `${p2}`,
    `${p3}`,
    `${p4}`,
    `${p5}`,
    `${p6}`,
    `${p7}`,
    `${p8}`,
    `${p9}`,
    `${p10}`,
    `${p11}`,
    `${p12}`,
  ]

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target:container,
    // start end is when you want to start tracking
    // stop when it's at the end of the window a new item starts
    offset:['start end', 'end start']
})

const {height} = useDimension();
  
const y = useTransform(scrollYProgress, [0, 1], [0,height *2.5])
const y2 = useTransform(scrollYProgress, [0, 1], [height * 2.5, 0]);
const y3 = useTransform(scrollYProgress, [0, 1], [0,height *2.5])
const y4 = useTransform(scrollYProgress, [0, 1], [height * 2.5, 0]);



  // useEffect(() => {
  //   const lenis = new Lenis()

  //     function raf(time: number){
  //       lenis.raf(time)
  //       requestAnimationFrame(raf)
  //     }

  //     requestAnimationFrame(raf)
  // }, [])
  

  return (
    <main className='main'>
      <div ref={container} className='gallery'>
      <Column name={[images[0], images[1], images[2]]} y={y}/>
      <Column name={[images[3], images[4], images[5]]} y={y2}/>
      <Column name={[images[6], images[7], images[8]]} y={y3}/>
      <Column name={[images[9], images[10], images[11]]} y={y4}/>
      </div>

    </main>
  );
}
interface Photo{
  name:string[]
  y:MotionValue<number> | 0
}

const Column = (images: Photo) =>{
  const {name, y } = images;
  return ( 
    <motion.div style={{y}} className='column'>
        {name.map((src, index)=>{
          return(
            <div key={index} className='imageContainer'>
            <img src={`${src}`}  alt="test"/>
            </div>
          )
        })}
    </motion.div>
  )
}

export default SlideablePage;
