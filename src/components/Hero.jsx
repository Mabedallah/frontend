import React from 'react'
import HeroImage from '../assets/profilepic.png'
import notebookL from '../assets/notebookL.png'
import notebookM from '../assets/notebookM.png'
import mobileR from '../assets/mobileR.png'

import{ TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div>
      <img className='' src={notebookL} alt=''/>
      <img className='' src={notebookM} alt=''/>
      <img className='' src={mobileR} alt=''/>
      <div>
        <h1>
          <span>
            <p>
              I'am a
            </p>
          </span>
          <br/>
          <TypeAnimation sequence={[
            "FrontEnd Web Developer",
            1000,
            "Full Stack Web Developer",
            1000,
            "Mobile App Developer",
            100
          ]} repeat={Infinity}>

          </TypeAnimation>
        </h1>
        <p>

        </p>
      </div>
      <div>
      <img className='' src={HeroImage} alt=''/>
      </div>
    </div>
  )
}

export default Hero