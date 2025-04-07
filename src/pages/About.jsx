import React from 'react'
import about from '../assets/profil2.jpeg'
import Skills from './Skills'
import Footer from '../component/Footer'

const About = () => {
    return (
        <div>
        <div className='flex flex-col items-center pt-4 mt-4 justify-center h-screen items-center '>
                <h1 className='text-4xl font-bold mt-15 py-6 '>About <span className='text-red-500'>Me</span></h1>
            <img src={about} className='w-50 text-center rounded-full p-4 flex justify-center' />
            <h1 className='text-4xl font-bold pb-4  text-center'>Hello, I'am Satria Zafarani</h1>
            <p className='text-xl py-8 max-w-5xl text-center'>I am a Frontend Developer who specializes in building modern, responsive, and interactive web interfaces using HTML, CSS, and JavaScript. With experience in TailwindCSS, Bootstrap, and Alpine.js, I am able to create elegant designs and optimal user experiences.
            </p>
            <p className='text-xl max-w-4xl text-center'>
                I also have skills in React.js and Next.js, allowing me to build high-performance dynamic web applications. I always strive to produce clean, structured, and maintainable code,
                while keeping up with the latest trends in web development.
            </p>
        </div>
            <Skills />
            <Footer />
        </div>
    )
}

export default About