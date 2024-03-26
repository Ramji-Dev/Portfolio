import React, { useEffect, useRef } from 'react'
import Intro from '../Intro'
import Bento from '../Bento'
import Projects from '../Projects'
import Loader from '../Loader/Loader'
import About from '../About'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ReactLenis } from '@studio-freight/react-lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP);

function Home() { 
  
  const lenisRef = useRef()

  useEffect(() => {
    window.scroll(0,0);

    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100);

    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => {
      gsap.ticker.remove(update)
    }
  })

  const container = useRef()

  const { contextSafe } = useGSAP({scope: container})

  const handleMove = contextSafe((e) => {
    gsap.to('.follower', {
      top: e.pageY,
      left: e.pageX,
      opacity: 1,
      scale: 1
    })
  })
  
  const handleLeave = contextSafe((e) => {
    gsap.to('.follower', {
      top: e.pageY,
      left: e.pageX,
      opacity: 0,
      scale: 0
    })
  })

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      <div className='relative bg-darkLoki dark:bg-lightLoki' ref={container} onMouseMove={handleMove} onMouseLeave={handleLeave}>
        <div className='bg-[#6200D2] dark:bg-loki w-[2vw] h-[2vw] rounded-full absolute z-[90] -translate-x-[50%] -translate-y-[50%] opacity-0 scale-0 mix-blend-exclusion pointer-events-none blur follower'></div>
        <div className='h-[100svh] w-[100vw] fixed z-10 bg-darkLoki dark:bg-lightLoki flex flex-col items-center justify-around'>
          <div></div>
          <div className='mt-auto'>
            <img src="./images/smudge.png" alt="ramji" />
            <div className='flex items-center justify-center mix-blend-exclusion'>
              <div className='font-ivy text-[4vw] md:text-[3vw] text-white dark:text-purple-500 flex items-center justify-center absolute bottom-[2%]'>
                <h4>Coded with <span className='font-ivyIt'>LOVE</span> in VS CODE by yours truly </h4>
              </div>
            </div>
          </div>
        </div>

        <div className='relative z-50 bg-lightLoki dark:bg-darkLoki rounded-b-[8vw] md:rounded-b-[3vw]'>
        <Intro />
          <div className='px-[5%] '>
            <Bento />
            </div>
            <Projects />
            <About />
            <Skills />
            <Contact />
          </div>
          <div className='h-[40vh] sm:h-[50vh] md:h-[80vh]'></div>  
      </div>
    </ReactLenis>
  )
}

export default Home