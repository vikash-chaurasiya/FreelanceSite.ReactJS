import React from 'react'
import Common from './Common'
import web from '../src/images/img2.png'


const About = () => {
  return (
    <>
        <Common
            name = "Freelance Web Designer & Developer. Highly experienced in designing & developing custom Wordpress websites."
            imgsrc={web}
            visit = '/contact'
            btnName = 'Say Hello'
        />
    </>
  )
}

export default About