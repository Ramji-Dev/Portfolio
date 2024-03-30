import React, { useRef } from 'react'
import Marquee from '../Marquee'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function Contact() {

  const container = useRef();

  useGSAP(() => {
    const body = document.querySelector('body');

    gsap.timeline({
      scrollTrigger: {
        scroller: body,
        trigger: '.text, .links',
        start: 'top 70%',
        end: 'top 0'
      }
    }).to('.text', {
      transform: 'translateY(0)',
      duration: 2,
      ease: 'expo',
      stagger: 0.2
    },'sim').to('.links',{
      transform: 'translate(0)',
      delay: 1.5,
      duration: 0.6,
      stagger: 0.2,
    },'sim')
  },{scope: container})

  return (
    <div className='pb-[2%] font-drugTI' ref={container} id='Contact'>
        <div className='mb-[10%] overflow-hidden'>
          <Marquee text={'Contact'} svg={'./svg/flower.svg'} />
        </div>

        <div className='flex flex-col'>
          <div className='text-black dark:text-white  flex flex-col-reverse md:flex-row items-center justify-center px-[8%]'>
            
            <div className='flex flex-col items-start w-full mt-[5%] md:mt-0'>
              <div className='text-[10vw] md:text-[5vw] leading-[10vw] md:leading-[5.5vw] mb-[6vw] md:mb-[3vw]'>
                <div className='overflow-hidden'>
                  <h1 className='translate-y-full text'>Want to</h1>
                </div>
                <div className='overflow-hidden'>
                  <h1 className='translate-y-full text w-[52vw] md:w-[26vw]'>reach out?</h1>
                </div>
              </div>
              <div className='text-darkGray dark:text-loki text-[3.8vw] sm:text-[2.8vw] md:text-[1.8vw] relative z-10'>
                <div className='mb-[5%] md:mb-[3%] overflow-hidden transition-all ease-in-out duration-300 dark:hover:border-loki hover:border-loki border-b-2 border-lightLoki dark:border-darkLoki hover:drop-shadow-[0_0px_15px_rgba(157,255,45)]'>
                    <h6 className='translate-y-full relative text ease-in-out '>
                      <a href="mailto:ramjirjr.9@gmail.com">ramjirjr.9@gmail.com <i className="ri-arrow-right-up-line text-black dark:text-white"></i> </a>
                    </h6>
                </div>
                <div className='overflow-hidden transition-all ease-in-out duration-300 dark:hover:border-loki hover:border-loki border-b-2 border-lightLoki dark:border-darkLoki hover:drop-shadow-[0_0px_15px_rgba(157,255,45)]'>
                  <h6 className='translate-y-full text'>
                    <a href="tel:+919720302991">+91-972-030-2991 <i className="ri-arrow-right-up-line text-black dark:text-white"></i> </a>
                  </h6>
                </div>
              </div>
            </div>

            <div>
              <div className='md:w-[40vw] md:h-[40vw] flex scale-[1.8]'>
                <div>
                  <video autoPlay loop muted>
                    <source src='./Loki.webm' type='video/webm' />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className='text-black dark:text-white font-drugLI w-full flex items-center justify-center mt-[20%] md:mt-0 relative z-20'>
            {
              [{text: 'LINKEDIN', link: 'https://www.linkedin.com/in/ram-ji/', id: 1},
               {text: 'GITHUB', link: 'https://github.com/Ramji-Dev', id: 2},
               {text: 'TWITTER', link: 'https://twitter.com/Ramji_Kd', id: 3},
               {text: 'INSTAGRAM', link: 'https://instagram.com/mosttalentedcurlyman', id: 4}].map(({text, id, link}) => {
                return (
                  <div key={id} className='flex items-center justify-center overflow-hidden '>
                    <div className=' 4xsm:mx-[1.5vw] 3xsm:mx-[2vw] 2xsm:mx-[3.5vw] md:mx-[10vw] 4xsm:text-[1vw] 3xsm:text-[4vw] sm:text-[2.6vw] md:text-[1.6vw] translate-y-[120%]  dark:hover:text-loki hover:drop-shadow-[0_0px_5px_rgba(157,255,45)] links'>
                      <a href={link} target='_blanck' className='transition-all ease-in-out duration-700'><h4>{text}</h4></a>
                    </div>
                  </div>
                )
               })
            }
          </div>
        </div>
    </div>
  )
}

export default Contact