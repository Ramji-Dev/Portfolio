import React, { useEffect, useRef } from 'react'
import { details } from '../../assets/details'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Projects() {

  const container = useRef();
  const { contextSafe } = useGSAP({scope: container})

  const handleMove = contextSafe((e) => {
    const logo = e.target.children[0];
    gsap.to(logo, {
      opacity: 1,
      scale: 1,
      top: e.clientY,
      left: e.clientX,
      duration: 1
    })
  })
  
  const handleLeave = contextSafe((e) => {
    const logo = e.target.children[0];
    gsap.to(logo, {
      opacity: 0,
      scale: 0,
      top: e.clientY,
      left: e.clientX,
      duration: 1
    })
  })

  useGSAP(() => {

    const body = document.querySelector("body");
    
    gsap.to('h1',{
      transform: 'translateY(0)',
      stagger: 0.4,
      ease: 'expo',
      duration: 4,
      scrollTrigger: {
        scroller: body,
        trigger: 'h1',
        start: 'top 90%',
        end: 'top 0%',
        scrub: true
      }
    })

    gsap.to('.project, .logo', {
      opacity: 1,
      visibility: 'visible',
      stagger: 0.1,
      scrollTrigger: {
        scroller: body,
        trigger: '.project',
        start: 'top 50%',
        end: 'top 0',
      }
    })

    gsap.to('.circle', {
      opacity: 1,
      scrollTrigger: {
        scroller: body,
        trigger: '.circle',
        start: 'top 80%',
        end: 'top 10%',
      }
    })

  },{scope: container})

  return (
    <div ref={container} className='relative mb-[15%]' id='Projects'>
      <div className='flex items-center justify-center text-black dark:text-white font-monu text-center uppercase text-[6.6vw] mb-[4%] overflow-hidden h-fit'>
        {
          ['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S'].map((text, i) => {
            return (
              <div key={i}>
                <h1 className='translate-y-[350%] lg:translate-y-[120%] rotate-45'>{text}</h1>
              </div>
            )
          })
        }
      </div>
      <div className='text-black dark:text-white  text-[3.5vw] md:text-[3.2vw] lg:text-[2.3vw] px-[5%] md:px-[3%] font-drugReg'>
        {
          details.map(({id, projectName, type, year, logo}) => {
            return (
              <div key={id} >
                <Link to={`/project/${projectName}`}> 
                  <div className='flex items-center justify-between relative z-20' onMouseMove={handleMove} onMouseLeave={handleLeave}>
                    
                    <img src={logo} alt={projectName} className='w-[15%] fixed z-[99999] pointer-events-none -translate-x-[50%] -translate-y-[50%] opacity-0 scale-0 mix-blend-difference invisible logo'/>

                  <div className='mb-[4vh] md:mb-[8vh] pointer-events-none opacity-0 project'>
                    <svg className=' w-[6vw] md:w-[4.6vw]' viewBox="0 0 123 123" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.19873 61.1989C33.8881 61.1989 61.1987 88.5095 61.1987 122.199C61.1987 88.5095 88.5093 61.1989 122.199 61.1989C88.5093 61.1989 61.1987 33.8882 61.1987 0.198853C61.1987 33.8882 33.8881 61.1989 0.19873 61.1989Z"/>
                    </svg>
                  </div>

                  <div className='mb-[4vh] md:mb-[8vh] text-start h-fit w-[29vw] xsm:w-[22vw] md:w-[20vw] pointer-events-none opacity-0 project'>
                    <h3>{projectName}</h3>
                  </div>


                  <div className='mb-[4vh] md:mb-[8vh] text-end h-fit w-[20vw] pointer-events-none opacity-0 project'>
                    <h3>{type}</h3>
                  </div>

                  <div className='mb-[4vh] md:mb-[8vh] text-end h-fit w-[20vw] font-ivyIt pointer-events-none opacity-0 project'>
                    <h3>{year}</h3>
                  </div>
                </div>
                </Link>
              </div>
            )
          })
        }
      </div>
      <div className='h-[30vw] w-[30vw] lg:h-[21.5vw] lg:w-[21.5vw] bg-loki rounded-full blur-[7vw] md:blur-[5vw] absolute -bottom-[15%] -left-[13%] lg:-bottom-[20%] lg:-left-[10%] z-10 opacity-0 circle'></div>
    </div>
  )
}

export default Projects