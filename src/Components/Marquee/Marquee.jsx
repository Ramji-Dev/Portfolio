import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function About({text, svg}) {

    const container = useRef()

    useGSAP(() => {

        const body = document.querySelector('body')

        gsap.to('h3', {
            xPercent: -100,
            ease: 'power1.out',
            scrollTrigger: {
                scroller: body,
                trigger: 'h3',
                start: 'top 85%',
                end: 'top -310%',
                scrub: true,
            }
        })
    }, {scope: container})

  return (
    <div ref={container}>
        <div className='text-black dark:text-white text-[6.8vw] md:text-[5vw] font-monu whitespace-nowrap px-[5%]'>
            <h3 className='flex items-center justify-start gap-[5vw]'> {text} <img src={svg} className='w-[6vw] md:w-[4.6vw]' alt={text} /> {text} <img src={svg} className='w-[6vw] md:w-[4.6vw]' alt={text} /> {text} <img src={svg} className='w-[6vw] md:w-[4.6vw]' alt={text} /> {text} <img src={svg} className='w-[6vw] md:w-[4.6vw]' alt={text} /></h3> 
        </div>
    </div>
  )
}

export default About