import React from 'react'
import HeroImage from '../assets/profilepic.png'
import notebookL from '../assets/notebookL.png'
import notebookM from '../assets/notebookM.png'
import mobileR from '../assets/mobileR.png'

import{ TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className='relative grid sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8'>
      <img className='absolute z-[-1] w-[400px] bottom-0 left-[-170px]' src={notebookL} alt=''/>
      <img className='absolute z-[-1] w-[400px] bottom-0 left-[320px]' src={notebookM} alt=''/>
      <img className='absolute z-[-1] w-[200px] bottom-[500px] left-[450px]' src={mobileR} alt=''/>
      <div className='glass px-5 py-3 col-span-2 my-auto'>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
            <p className='mb-4 text-gray-400'>
              I'am a
            </p>
          <TypeAnimation sequence={[
            "FrontEnd Web Developer",
            1000,
            "Full Stack Web Developer",
            1000,
            "Mobile App Developer",
            1000,
          ]}
          wrapper='span'
          speed={40}
          repeat={Infinity}
          >

          </TypeAnimation>
        </h1>
        <p className=' font-bold my-6 sm:text-lg lg:text-xl max-w-[200px] md:max-w-[600px] ml-4
        text-gray-400'>
          My name is Mohamed Abed Allah and I am a 5+ years experienced Full Stack software Developer
        </p>
      </div>
      <div className='absolute bottom-0 right-0 lg:w-[600px] w-[200px] '>
      <img className='' src={HeroImage} alt=''/>
      </div>
    </div>
  )
}

export default Hero