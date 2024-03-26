import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
function Error() {

  return (
    <div className='w-full min-h-svh flex flex-col items-center justify-center text-black dark:text-loki relative '>
        <h1 className='font-monu text-[5vw] mb-[5%] pointer-events-none'>I think you are lost!</h1>
        <div className='border-[0.2vw] border-black dark:border-white rounded-full hover:drop-shadow-[0_0px_15px_rgba(157,255,45)] transition-all ease-in-out duration-700'>
          <Link to={'/'}>
            <h4 className='font-drugReg px-[4vw] py-[2vw] md:text-[2vw]'><i className="ri-arrow-right-up-line text-[4vw] md:text-[2vw] mr-2"></i> Do you wanna go home?</h4>
          </Link>
        </div>
    </div>
  )
}

export default Error