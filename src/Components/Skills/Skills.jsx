import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP)

function Skills() {

    const body = document.querySelector("body");

    const container = useRef()
    
    useGSAP(() => {
        gsap.to('h1',{
            transform: 'translateY(0)',
            stagger: 0.4,
            ease: 'expo',
            duration: 4,
            scrollTrigger: {
              scroller: body,
              trigger: 'h1',
              start: 'top 100%',
              end: 'top 0%',
              scrub: true,
            }
          })

        gsap.to('.bento', {
            duration: 2.5,
            transform: 'translateY(0)',
            stagger: 0.2,
            ease: 'expo',
            scrollTrigger: {
                scroller: body,
                trigger: '.bento',
                start: 'top -20%',
                end: 'top -30'
            }
        })

        let mm = gsap.matchMedia()

        mm.add("(max-width: 640px)", () => {
            gsap.to('.bento', {
                duration: 2.5,
                transform: 'translateY(0)',
                stagger: 0.2,
                ease: 'expo',
                scrollTrigger: {
                    scroller: body,
                    trigger: '.bento',
                    start: 'top 20%',
                    end: 'top -30',
                }
            })
        })

    }, {scope: container})

  return (
    <div ref={container} className='mb-[15%]' id='skills'>
        <div className='flex items-center justify-center text-black dark:text-white font-monu text-center uppercase text-[6.6vw] mb-[4%] overflow-hidden'>
            {
            ['S', 'K', 'I', 'L', 'L', 'S'].map((text, i) => {
                return (
                <div key={i}>
                    <h1 className='translate-y-[130%] rotate-45'>{text}</h1>
                </div>
                )
            })
            }
        </div>
        <div className='text-black drop-shadow-neon flex flex-col 2md:flex-row items-center justify-center gap-[0.5vw]'>
            <div className='overflow-hidden rounded-[1.5vw] md:rounded-[0.7vw]'>
                <div className='bg-loki font-drugReg h-[28vh] w-[82vw] sm:h-[35.4vh] sm:w-[48.2vw] md:h-[30vh] md:w-[70vw] 2md:h-[59.2vh] 2md:w-[20vw] rounded-[1.5vw] md:rounded-[0.7vw] p-[2.8vw] relative -translate-y-[120%] bento'>
                    <div className='absolute top-[20%] md:top-[35%] text-[3.5vw] xsm:text-[2.5vw] sm:text-[2vw] md:text-[1.25vw]'>
                        <h1 className='font-monu inline translate-x-full'>Technologies</h1>
                        <div className='flex flex-col translate-x-[10%]'>
                            {
                                [{text: 'Javascript', id: 1},
                                {text: 'C++', id: 2},
                                {text: 'React JS', id: 3},
                                {text: 'HTML', id: 4},
                                {text: 'TailwindCSS', id: 5},
                                {text: 'CSS', id:6}].map(({text, id}) => {
                                    return (
                                        <div key={id}>
                                            <div className='flex items-center gap-[0.5vw]'>
                                                <div className='text-black w-[1vw] sm:w-[0.8vw] md:w-[0.5vw] '>
                                                    <svg viewBox="0 0 131 131" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="65.4658" y="-1" width="93.997" height="93.997" rx="3" transform="rotate(45 65.4658 -1)"/>
                                                    </svg>
                                                </div>
                                                <h4 className=''>{text}</h4>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-[0.5vw]'>

                <div className='flex gap-[0.5vw]'>
                    <div className='overflow-hidden rounded-[1.5vw] md:rounded-[0.7vw]'>
                        <div className='bg-lightGreen font-drugReg h-[25vh] w-[40vw] sm:h-[20vh] sm:w-[30vw] md:h-[19.3vh] md:w-[33vw] 2md:h-[29.3vh] 2md:w-[31vw] text-[1.25vw] rounded-[1.5vw] md:rounded-[0.7vw] p-[2.8vw] relative -translate-y-[120%] bento'>
                            <div className='absolute top-[40%] md:top-[50%] text-[3.5vw] xsm:text-[2.5vw] sm:text-[2vw] md:text-[1.25vw]'>
                                <h1 className='font-monu inline'>What i can do?</h1>
                                <div className='flex flex-col translate-x-[10%] '>
                                    {
                                        [{text: 'Websites', id: 1},
                                        {text: 'Designing', id: 2}].map(({text, id}) => {
                                            return (
                                                <div key={id}>
                                                    <div className='flex items-center gap-[0.5vw]'>
                                                        <div className='text-black w-[1vw] sm:w-[0.8vw] md:w-[0.5vw]'>
                                                            <svg viewBox="0 0 131 131" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="65.4658" y="-1" width="93.997" height="93.997" rx="3" transform="rotate(45 65.4658 -1)"/>
                                                            </svg>
                                                        </div>
                                                        <h4 className=''>{text}</h4>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='overflow-hidden rounded-[1.5vw] md:rounded-[0.7vw]'>
                            <div className='bg-black text-white font-drugReg h-[25vh] w-[41.5vw] sm:h-[20vh] sm:w-[18vw] md:h-[19.3vh] md:w-[37vw] 2md:h-[29.3vh] 2md:w-[17vw] text-[1.25vw] rounded-[1.5vw] md:rounded-[0.7vw] p-[1vw] relative -translate-y-[120%] bento'>
                                <div className='absolute top-[40%] sm:top-[30%] md:top-[50%] text-[3.5vw] xsm:text-[2.5vw] sm:text-[2vw] md:text-[1.25vw]'>
                                    <h1 className='font-monu inline'>Version Control</h1>
                                    <div className='flex flex-col translate-x-[10%] '>
                                        {
                                            [{text: 'GitHub', id: 1},
                                            {text: 'Git', id: 2}].map(({text, id}) => {
                                                return (
                                                    <div key={id}>
                                                        <div className='flex items-center gap-[0.5vw]'>
                                                            <div className='w-[1vw] sm:w-[0.8vw] md:w-[0.5vw]'>
                                                                <svg viewBox="0 0 131 131" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <rect x="65.4658" y="-1" width="93.997" height="93.997" rx="3" transform="rotate(45 65.4658 -1)"/>
                                                                </svg>
                                                            </div>
                                                            <h4 className=''>{text}</h4>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex gap-[0.5vw]'>
                    <div className='overflow-hidden rounded-[1.5vw] md:rounded-[0.7vw]'>
                        <div className='bg-white font-drugReg h-[45vw] w-[44.5vw] sm:h-[23vw] sm:w-[23.3vw] md:w-[38vw] 2md:h-[29.3vh] 2md:w-[24vw] rounded-[1.5vw] md:rounded-[0.7vw] p-[2.8vw] relative -translate-y-[120%] bento'>
                            <div className='absolute top-[21%] sm:top-[30%] md:top-[40%] 4xsm:text-[0.8vw] 2xsm:text-[3.5vw] xsm:text-[2.5vw] sm:text-[2vw] md:text-[1.25vw]'>
                                <h1 className='font-monu inline'>Professional Skills</h1>
                                <div className='flex flex-col translate-x-[10%] '>
                                    {
                                        [{text: 'Creativity', id: 1},
                                        {text: 'Team Work', id: 2},
                                        {text: 'Organization', id: 3}].map(({text, id}) => {
                                            return (
                                                <div key={id}>
                                                    <div className='flex items-center gap-[0.5vw]'>
                                                        <div className='text-black w-[1vw] sm:w-[0.8vw] md:w-[0.5vw]'>
                                                            <svg viewBox="0 0 131 131" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="65.4658" y="-1" width="93.997" height="93.997" rx="3" transform="rotate(45 65.4658 -1)"/>
                                                            </svg>
                                                        </div>
                                                        <h4 className=''>{text}</h4>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='overflow-hidden rounded-[1.5vw] md:rounded-[0.7vw]'>
                        <div className='bg-darkGray text-white font-drugReg h-[45vw] w-[37vw] sm:h-[23vw] sm:w-[24.5vw] md:w-[32vw] 2md:h-[29.3vh] 2md:w-[24vw] text-[1.25vw] rounded-[1.5vw] md:rounded-[0.7vw]  2xsm:p-[2.8vw] p-[2vw] relative -translate-y-[120%] bento'>
                            <div className='absolute top-[0%] 2xsm:top-[20%] sm:top-[30%] md:top-[25%] text-[3.5vw] xsm:text-[2.5vw] sm:text-[2vw] md:text-[1.25vw]'>
                                <h1 className='font-monu inline'>What i use?</h1>
                                <div className='flex flex-col translate-x-[10%] '>
                                    {
                                        [{text: 'VS Code', id: 1},
                                        {text: 'Windows', id: 2},
                                        {text: 'Photoshop', id: 3},
                                        {text: 'Figma', id: 4}].map(({text, id}) => {
                                            return (
                                                <div key={id}>
                                                    <div className='flex items-center gap-[0.5vw]'>
                                                        <div className='w-[1vw] sm:w-[0.8vw] md:w-[0.5vw]'>
                                                            <svg viewBox="0 0 131 131" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="65.4658" y="-1" width="93.997" height="93.997" rx="3" transform="rotate(45 65.4658 -1)"/>
                                                            </svg>
                                                        </div>
                                                        <h4 className=''>{text}</h4>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills