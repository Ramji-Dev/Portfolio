import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { details } from '../../assets/details';
import './Showcase.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Showcase() {

  useEffect(() => {
    window.scroll(0,0)
  },[])

  const container = useRef()

  useGSAP(() => {
    gsap.timeline()
    .to('.blur-elem', {
      opacity: 1,
      duration: 1.5,
    },'sim')
    .to('.name', {
      transform: 'translateY(0)',
      duration: 1,
      ease: 'expo',
      delay: 0.5
    },'sim')
    .to('.image', {
      transform: 'translateY(0)',
      ease: 'expo',
      duration: 2.5,
      delay: 1
    },'sim')
    .to('.text', {
      transform: 'translateY(0)',
      opacity: 1,
      duration: 0.7,
      delay: 1.5
    },'sim')
    .to('.tech', {
      transform: 'translateY(0)',
      stagger: 0.2,
      delay: 2
    },'sim')
    .to('.button', {
      opacity: 1
    })
  },{scope: container})

  const { name } = useParams()

  const projectDetails = details.find((item) => item.projectName === name)
  
  const {projectName, image, about, techs, links} = projectDetails 

  return (
    <div className='w-full min-h-screen text-black dark:text-white pt-[20%] sm:pt-[14%] md:pt-[8%] pb-[2%] px-[5%] flex flex-col 3md:flex-row items-center relative overflow-hidden' ref={container}>
      <div className='mr-[3%] mb-[5%] md:mb-0 relative z-10'>
        <div className='overflow-hidden'>
          <h2 className='text-[5vw] sm:text-[3.5] md:text-[2.5vw] font-monu name translate-y-full'>{projectName}</h2>
        </div>
        <div className='overflow-hidden rounded-[2vw] w-full h-[56.5vw] sm:h-[56.4vw] md:h-[56.7vw] 3md:h-[35.7vw]'>
          <img src={image} alt={projectName} className='rounded-[2vw] w-full 3md:w-[55vw] -translate-y-full image' />
        </div>
      </div>

      <div className=' 3md:w-[30%] flex flex-col items-center justify-end mt-[5%] relative z-10'>
        <div className='font-drugL text-[3.5vw] sm:text-[2vw] 3md:text-[1.25vw] mb-[10%] 3md:mb-[25%] '>
          <p className='translate-y-[20%] opacity-0 text'>{about}</p>
        </div>

        <div className='w-full flex 3md:flex-col sm:justify-between relative z-10'>
          <div className='mb-[30%] sm:mb-[10%] text-[3.5vw] sm:text-[2vw] 3md:text-[1.25vw]'>
              <div className='overflow-hidden'>
                <h3 className='font-monu translate-y-full tech'>Tech Used</h3>
              </div>
              <div className='font-drugL'>
                  {
                    techs.map((tech, id) => {
                      return (
                      <div key={id} className='overflow-hidden'>
                        <h5 className='translate-y-full tech'>{tech}</h5>
                      </div>
                      )})
                  }
              </div>
          </div>

          <div className='flex items-end justify-evenly sm:justify-around font-monu w-full sm:w-[40%] 3md:w-full gap-[10vw] sm:gap-[5vw] absolute sm:relative bottom-0 z-10 opacity-0 button'>
            <a href={links.github} target='_blanck' className='bg-lightGreen text-black px-[8vw] py-[3.5vw] sm:px-[1vw] sm:py-[0.5vw] rounded-[2vw] sm:rounded-[0.5vw] flex items-center hover:shadow-2xl hover:shadow-[#9dff2d] transition-all duration-500 ease-[cubic-bezier(0.46, 0.48, 0.54, 0.8)]'><i className="ri-github-fill text-[4vw] md:text-[2vw] mr-2"></i> Code</a>
            <a href={links.live} target='_blanck' className='bg-lightGreen text-black px-[8vw] py-[3.5vw] sm:px-[1vw] sm:py-[0.5vw] rounded-[2vw] sm:rounded-[0.5vw] flex items-center hover:shadow-2xl hover:shadow-[#9dff2d] transition-all duration-500 ease-[cubic-bezier(0.46, 0.48, 0.54, 0.8)]'><i className="ri-arrow-right-up-line text-[4vw] md:text-[2vw] mr-2"></i> Live</a>
          </div>
        </div>
      </div>
      <div className='bg-loki w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] blur-[15vw] md:blur-[7vw] rounded-full absolute -right-[35%] top-20 md:-top-[20%] z-0 opacity-0 blur-elem'></div>
    </div>
  )
}

export default Showcase