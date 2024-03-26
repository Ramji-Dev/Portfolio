import React, { useRef } from 'react'
import {loaderText} from '../Loader/data'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { useSelector } from 'react-redux'

gsap.registerPlugin(useGSAP);

function Loader() {
    
    let random;
    for (let i = 0; i < loaderText.length; i++) {
        random = Math.floor(Math.random() * loaderText.length);
    }
    const text = loaderText[random];

    const newText = text.split(' ');
    const loaderRef = useRef();
    
    const tl = useSelector(state => state.timeline.tl)

    useGSAP(() => {
        tl.from('h2', {
            x: 50,
            duration: 1,
            opacity: 0,
            stagger: 0.1
        }).to('h2', {
            x: -50,
            duration: 1,
            opacity: 0,
            stagger: 0.1
        }).to(loaderRef.current, {
            yPercent: -1000,
            ease: 'power1.inOut'
        })
    }, {scope: loaderRef})
    
  return (
    <div className='overflow-hidden'>
        <div className='min-h-svh w-full absolute z-[100] text-black dark:text-white bg-white dark:bg-black text-center text-[4vw] md:text-[2.3vw] flex items-center justify-center overflow-hidden' ref={loaderRef}>
            <div className='flex'>
                {
                    newText.map((el, i) => {
                        return (
                            <div className='mr-[1.5vw] md:mr-[1vw] font-monu' key={i}><h2>{el}</h2></div>
                            )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Loader