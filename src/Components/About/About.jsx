import React, { useRef } from 'react'
import Marquee from '../Marquee'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function About() {

  const container = useRef()

  useGSAP(() => {
    const body = document.querySelector('body');

    gsap.timeline({
      scrollTrigger: {
        scroller: body,
        trigger: '.image, .text, .res-container',
        start: '30% 0%',
        end: 'top -50%',
      }
    })
    .to('.image',{
      transform: 'translateY(0)',
      ease: 'expo',
      duration: 2.5
    },'sim')
    .to('.text', {
      transform: 'translateY(0)',
      stagger: 0.2,
      duration: 1.5,
      delay: 0.8,
      ease: 'expo'
    },'sim')
    .to('.res-container', {
      opacity: 1,
      delay: 1
    },'sim')
    .to('.resume', {
      transform: 'translateY(0)',
      ease: 'expo',
      duration: 1,
      delay: 2
    },'sim')
    
  }, {scope: container})

  return (
    <div className='mb-[20%] md:mb-[10%]' ref={container} id='About'>
        <div className='mb-[7%]'>
          <Marquee text={'About Me'} svg={'./svg/star.svg'}/>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center gap-[8%] px-[2%]'>
          <div className='w-[75vw] md:w-[25vw] object-cover rounded-[3.5vw] md:rounded-[1.5vw] overflow-hidden mb-[10%] md:mb-0'>
            <img src="./images/ramji.webp" alt="ramji" className='-translate-y-[110%] rounded-[3.5vw] md:rounded-[1.5vw] image' />
          </div>
          <div className='relative md:-top-[2vw]'>
            <div className='text-black dark:text-white text-[3vw] md:text-[1.5vw] font-drugReg tracking-[0.2vw] mb-[8%] text-left 3xsm:text-left 4xsm:px-[16%] 3xsm:px-[0%]'>
              <div className='overflow-hidden'>
                <h4 className='translate-y-[120%] text'>I blend code and design for enchanting websites, </h4>
              </div>
              <div className='overflow-hidden'>
                <h4 className='translate-y-[120%] text'>transcending the ordinary with captivating visuals.</h4>
              </div>
              <div className='overflow-hidden'>
                <h4 className='translate-y-[120%] text'>Curious to learn when it come’s to new technologies</h4>
              </div>
              <div className='overflow-hidden'>
                <h4 className='translate-y-[120%] text'>and, in the symphony of creation, music <span className='bg-loki px-[2vw] md:px-[0.9vw] py-[0.4vw] md:py-[0.2vw] rounded-full'><img src="./images/eye.png" alt="" className='w-[4vw] md:w-[1.8vw] inline-block' /></span> is my </h4>
              </div>
              <div className='overflow-hidden'>
                <h4 className='translate-y-[120%] text'>muse. Let's turn ideas into pixels!</h4>
              </div>
            </div>
              <div className='bg-lightGreen inline-block text-black px-[2vw] py-[1.5vw] font-monu text-[4vw] md:text-[2vw] rounded-[1.5vw] hover:scale-110 hover:shadow-2xl hover:shadow-[#9dff2d] transition-all duration-700 delay-150 ease-[cubic-bezier(0.46, 0.48, 0.54, 0.8)] opacity-0 overflow-hidden res-container'>
                <a href="./resume.pdf"><h2 className='inline-block -translate-y-[150%] resume'>Resume</h2></a>
              </div>
          </div>
        </div>
    </div>
  )
}

export default About