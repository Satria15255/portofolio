import React from 'react'
import Background from "../assets/bg-test.jpg"

const Home = () => {
    return (
        <div className=' relative z-0'>
            <img src={Background} className='h-screen bg-cover bg-center' />
            <div className='absolute flex flex-col items-center justify-center inset-0 bg-black/50'>
                <p className='text-6xl text-white font-bold '>"Hello, I'm Satria Zafarani"</p>
                <p className='text-md text-white font-bold text-center py-3 w-3/4 max-w-2xl'>"I am a Frontend Developer who is skilled in building modern,
                    responsive and interactive web interfaces using HTML, CSS and JavaScript."</p>
                <button className='border text-lg rounded-4xl px-8 py-3 text-white hover:bg-yellow-500 hover:text-black hover:border-black transition duration-300 font-sans font-bold'>Contact Now</button>
            </div>
        </div>
    )
}

export default Home