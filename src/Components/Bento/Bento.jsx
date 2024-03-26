import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useSelector } from 'react-redux';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(useGSAP, ScrollTrigger);

function Bento() {

  const container = useRef()

  const tl = useSelector(state => state.timeline.tl);

  useGSAP(() => {
    tl.to('.bento', {
      yPercent: -20,
      duration: 1
    },'a')
    tl.to('.block-anim', {
      opacity: 1,
      duration: 1
    },'a')

    tl.to('.animated-text', {
      yPercent: -100,
      stagger: 0.1,
      duration: 1.5,
      ease: 'expo'
    },'sim')
    tl.to('.moving-text',{
      opacity: 1,
    },'sim')

    const body = document.querySelector('body');

    gsap.timeline({
      scrollTrigger: {
        scroller: body,
        trigger: '.text-one, .text-two',
        start: 'top 70%',
        end: 'top -100%',
        scrub: true,
      }
    }).to('.text-one', {
      xPercent: 80
    },'sim').to('.text-two', {
      xPercent: -80
    },'sim')


  },{scope: container})

  return (
    <div ref={container}>
      <div className='bento translate-y-[20%] font-monu text-[4vw] md:text-[2vw] grid grid-cols-6 md:grid-cols-10 gap-[1vw] mb-[20%] sm:mb-[15%] md:mb-[10%] capitalize'>
              <div className='block-anim opacity-0 flex items-center justify-center rounded-[1.5vw] bg-gradient-to-tl from-loki to-lightGreen row-span-3 col-span-3 row-start-1 md:row-start-0'>
                <div className='w-fit h-fit overflow-hidden '>
                  <h5 className='animated-text translate-y-full'>React JS</h5>
                </div>
              </div>
            <div className='block-anim opacity-0 flex items-center justify-center rounded-[1.5vw] bg-lightGreen col-span-7 md:col-span-6 md:row-span-2 h-[5vh] xsm:h-[8vh] sm:h-[10vh] md:h-[6vh] 2md:h-[8vh] 3md:max-h-[12vh] lg:h-[12vh] row-start-4 md:row-start-1'>
              <div className='w-fit h-fit overflow-hidden '>
                <h5 className='animated-text translate-y-full'>Front-End Developer</h5>
              </div>
            </div>
            <div className='block-anim opacity-0 md:flex flex-col items-center justify-evenly text-[3vw] rounded-[1.5vw] bg-loki text-black hidden md:row-span-3 md:col-start-10 md:row-start-1'>
              <div className='w-fit h-fit  overflow-hidden'>
                <div className='animated-text translate-y-full'>
                  <a href="https://github.com/Ramji-Dev" target='_blank'><i className="ri-github-fill"></i></a>
                </div>
              </div>
              <div className='w-fit h-fit  overflow-hidden'>
                <div className='animated-text translate-y-full'>
                  <a href="https://www.linkedin.com/in/ram-ji" target='_blank'><i className="ri-linkedin-box-fill"></i></a>
                </div>
              </div>
            </div>
            <div className='block-anim opacity-0 flex items-center justify-center rounded-[1.5vw] text-black dark:text-white bg-lightGray dark:bg-darkGray h-[5vh] xsm:h-[8vh] sm:h-[10vh] md:h-[6vh] 2md:h-[8vh] 3md:max-h-[12vh] lg:h-[12vh] col-span-3 md:col-span-4 md:row-start-3'>
              <div className='w-fit h-fit overflow-hidden '>
                <h5 className='animated-text translate-y-full'>Javascript</h5>
              </div>
            </div>
            <div className='block-anim opacity-0 flex items-center justify-center rounded-[1.5vw] text-white dark:text-black bg-black dark:bg-white h-[5vh] xsm:h-[8vh] sm:h-[10vh] md:h-[6vh] 2md:h-[8vh] 3md:max-h-[12vh] lg:h-[12vh] col-span-3 row-span-2 md:row-span-1 md:col-span-2 row-start-2 md:row-start-3'>
              <div className='w-fit h-fit overflow-hidden '>
                <h5 className='animated-text translate-y-full'>C++</h5>
              </div>
            </div>
          </div>

          <div className='moving-text text-black dark:text-white font-ivy text-[5vw] md:text-[4vw] flex flex-col items-center justify-center opacity-0 mb-[20%] sm:mb-[15%] md:mb-[10%]'>
            <h2 className='relative right-[15%] text-one'>And i thought you</h2>
            <h2 className='relative left-[15%] text-two'>would come here early...</h2>
          </div>
    </div>
  )
}

export default Bento