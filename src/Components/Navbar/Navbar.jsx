import React, { useRef, useEffect } from 'react'
import ThemeBtn from '../ThemeBtn'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

gsap.registerPlugin(useGSAP);

function Navbar() {

    const container = useRef();

    const { contextSafe } = useGSAP({scope: container})
    
    const openMenu = contextSafe(() => {
        gsap.to('.menu', {
            x: '0%',
            duration: 1.5,
            ease: 'expo'
        })
        gsap.to('.text', {
            transform: 'translateY(0%) rotate(0deg)',
            delay: 0.6,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'expo'
        })
        document.querySelector('.ri-close-fill').style.display = 'inline';
        document.querySelector('.ri-menu-line').style.display = 'none';
    })
    
    const closeMenu = contextSafe(() => {
        let mm = gsap.matchMedia()
        
        mm.add("(max-width: 768px)", () => {
            
            gsap.to('.menu', {
                x: '100%',
                duration: 1.5,
                ease: 'expo'
            })
            gsap.to('.text', {
                transform: 'translateY(110%) rotate(12deg)',
                opacity: 1,
                delay: 0.6,
                duration: 0.8,
                ease: 'expo'
            })
        })
        
        
        const media = () => {
            if (query.matches) {
                document.querySelector('.ri-close-fill').style.display = 'none';
                document.querySelector('.ri-menu-line').style.display = 'inline';
            }
        }
        let query = window.matchMedia("(max-width: 768px)")
        media();
    })
    
    const tl = useSelector(state => state.timeline.tl)
    useGSAP(() => {
        tl.to('.logo', {
            scale: 1,
            duration: 1,
            rotate: 0
        })
        
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            tl.to('.anima-text', {
                transform: 'translateY(0) ',
                opacity: 1,
                stagger: 0.2,
            })
        })

        mm.add("(max-width: 768px)", () => {
            tl.to('.capsule', {
                opacity: 1,
            })
        })

        tl.to('.ri-menu-line', {
            opacity: 1,
            duration: 1,
            rotate: 0,
        })

    },{scope: container})

  return (
    <div className='w-[100vw] min-h-[18vw] md:min-h-[6vw] flex items-center justify-between md:px-[3%] md:pt-[2%] fixed z-50' ref={container}>
        <div className='logo scale-0  w-[6vw] md:w-[3.5vw] text-black dark:text-white ml-[5%] md:ml-0'>
            <Link to={'/'}>
                <svg viewBox="0 0 54 61" className='logo rotate-45' fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16.569 3.339C16.569 4.263 16.884 5.04 17.514 5.67C18.144 6.3 18.921 6.615 19.845 6.615C20.769 6.615 21.546 6.3 22.176 5.67C22.848 5.04 23.184 4.263 23.184 3.339C23.184 2.415 22.848 1.638 22.176 1.008C21.546 0.335999 20.769 0 19.845 0C18.921 0 18.144 0.335999 17.514 1.008C16.884 1.638 16.569 2.415 16.569 3.339ZM22.546 36.1825C22.5513 35.7432 22.554 35.2954 22.554 34.839V12.663H22.546V8.543L35.386 8.483C37.266 8.483 38.946 8.763 40.426 9.323C41.946 9.883 43.226 10.943 44.266 12.503C45.346 14.023 45.886 15.963 45.886 18.323C45.886 19.803 45.686 21.083 45.286 22.163C44.926 23.243 44.426 24.103 43.786 24.743C43.186 25.343 42.406 25.823 41.446 26.183C40.486 26.543 39.546 26.783 38.626 26.903C37.746 26.983 36.686 27.023 35.446 27.023L28.186 27.083V28.223C28.186 31.183 28.846 33.703 30.166 35.783C31.486 37.863 33.126 39.463 35.086 40.583C37.086 41.703 39.086 42.663 41.086 43.463C43.126 44.263 45.026 45.123 46.786 46.043C48.546 46.963 49.706 48.003 50.266 49.163H53.986C53.506 43.803 50.146 40.323 43.906 38.723C38.946 37.723 35.166 36.443 32.566 34.883C29.966 33.283 28.666 31.083 28.666 28.283H37.786C41.106 28.243 44.286 27.183 47.326 25.103C50.366 22.983 51.886 20.663 51.886 18.143C51.886 15.183 50.406 12.683 47.446 10.643C44.486 8.603 40.906 7.583 36.706 7.583H17.086V47.6421C16.9529 49.1954 16.7386 50.6187 16.443 51.912C16.107 53.424 15.624 54.537 14.994 55.251C14.364 56.007 13.587 56.364 12.663 56.322C11.613 56.322 10.374 56.217 8.946 56.007C7.56 55.839 6.384 55.671 5.418 55.503C4.494 55.377 3.57 55.314 2.646 55.314C1.764 55.356 1.113 55.608 0.693 56.07C0.231 56.574 0 57.309 0 58.275C0 58.989 0.252 59.493 0.756 59.787C1.26 60.123 2.016 60.228 3.024 60.102C4.032 59.976 4.977 59.808 5.859 59.598C6.783 59.388 7.959 58.989 9.387 58.401C10.857 57.855 11.928 57.435 12.6 57.141C13.314 56.847 14.259 56.427 15.435 55.881C17.703 54.873 19.446 52.857 20.664 49.833C20.743 49.6461 20.8195 49.4512 20.8935 49.2485C21.5006 47.134 22.335 43.4079 22.546 39.5176V36.1825Z" />
                </svg>
            </Link>
        </div>
        <div className='min-h-[5vh] font-drugReg text-[6vw] sm:text-[3vw] md:text-[1.5vw] flex items-center justify-end gap-[5vw] md:relative'>
            <div className='menu gap-[5vw] flex flex-col md:flex-row items-start justify-center bg-[#9dff2de2] backdrop-blur-sm md:backdrop-blur-0 md:bg-transparent text-black md:dark:text-white space-y-[5vw] md:space-y-0 p-[10%] md:p-0 min-h-[100vh] md:min-h-0 fixed md:relative top-0 translate-x-[100%] md:translate-x-0'>
                {
                    [{text: 'Projects', id: 1}, {text: 'About', id: 2}, {text: 'Contact', id: 3}].map(({text, id}) => {
                        return (
                            <div key={id} className='w-fit h-fit overflow-hidden' onClick={closeMenu}>
                                <h1 className='text anima-text opacity-0 uppercase translate-y-[120%] rotate-12'><a href={`/#${text}`}>{text}</a></h1>
                            </div>      
                        )
                    })
                }
            </div>
            <div className='capsule flex items-center justify-center text-[4vw] sm:text-[2vw] md:text-[1.2vw] gap-[5vw] bg-[#9dff2de3] md:bg-transparent text-black md:dark:text-white px-[6vw] py-[2vw] sm:px-[3vw] sm:py-[1vw] md:px-0 md:py-0 rounded-[99vw] fixed md:relative top-[85vh] sm:top-[90vh] md:top-0 left-[70vw] sm:left-[80vw] md:left-0 opacity-0 md:opacity-100'>
                <ThemeBtn />
                <i className="ri-menu-line md:hidden opacity-0 cursor-pointer" onClick={openMenu}></i>
                <i className="ri-close-fill hidden cursor-pointer" onClick={closeMenu}></i>
            </div>
        </div>
    </div>
  )
}

export default Navbar