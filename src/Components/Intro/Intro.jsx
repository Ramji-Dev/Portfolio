import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useSelector } from 'react-redux'


gsap.registerPlugin(useGSAP);

function Intro() {

  const tl = useSelector(state => state.timeline.tl);

  const container = useRef();

  useGSAP(() => {

    tl.to('.animated-text', {
      yPercent: -100,
      stagger: 0.2,
      duration: 1,
      ease: 'expo'
    })

  },{scope: container})

  return (
    <div ref={container}>
      <div className='pt-[30%] sm:pt-[14%] md:pt-[10%] px-[5%] flex flex-col '>
        <div className='px-[3%] sm:px-[7%] md:px-[5%] mb-[15%] sm:mb-[10%] md:mb-[5%]'>
          <div className='mb-[5%] sm:mb-[3%] md:mb-[1%] overflow-hidden'>
            <h6 className='animated-text w-fit h-fit text-fadeWhite dark:text-loki font-drugReg text-[4vw] sm:text-[3vw] md:text-[1.8vw] translate-y-[110%] '>Hey, I'm</h6>
          </div>

          <div className='overflow-hidden'>
            <h1 className='animated-text w-fit h-fit translate-y-[110%]  font-monu text-black dark:text-white text-[7vw] sm:text-[5.5vw] md:text-[3.6vw]'>Ram Ji</h1>
          </div>

          <div className='text-fadeWhite font-drugL text-[4.9vw] sm:text-[4.4vw] md:text-[3.1vw] tracking-[0.2vw]'>
            <div className='overflow-hidden'>
              <h2 className='animated-text w-fit h-fit translate-y-[110%] '>Trying to bridge the gap between </h2>
            </div>
            <div className='overflow-hidden'>
              <h2 className='animated-text w-fit h-fit translate-y-[110%] '>digital <span className='font-ivyIt'>aesthetics</span> and exceptional</h2>
            </div>
            <div className='overflow-hidden'>
              <h2 className='font-ivyIt animated-text w-fit h-fit translate-y-[110%] translate-x-[5%]'>functionality.</h2>
            </div>
          </div>
        </div>
          
      </div>

    </div>
  )
}

export default Intro