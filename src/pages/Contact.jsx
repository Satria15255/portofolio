import React from 'react'
import { FaSquareUpwork } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Footer from '../component/Footer';

const Contact = () => {
    return (
        <div>
            <h1 className='text-4xl text-center mt-15 font-bold py-8'>Con<span className='text-red-500'>tact</span></h1>
            <div className='flex h-screen p-4'>
                <div className='w-full h-3/5 bg-gray-100 shadow-lg rounded-lg p-8'>
                    <h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
                    <p className='mb-4'>Feel free to reach out for any inquiries or collaborations.</p>
                    <p className='mb-4'>You can also find me on:</p>
                    <ul className='flex flex-col gap-3 '>
                        <li className='mb-2 flex text-2xl gap-1'>
                            <FaInstagram className='' size={40} />@jerdncode</li>
                        <li className='mb-2 flex text-2xl gap-2'>
                            <FaLinkedin className='' size={40} />jerdncode</li>
                        <li className='mb-2 flex text-2xl gap-2'>
                            <FaSquareUpwork className='' size={40} /> jerdncode</li>
                    </ul>
                </div>
                <form className='flex flex-col px-4 items-center w-full'>
                    <input type="text" placeholder='Name' className='border-2 border-gray-300 p-2 rounded-md w-full mb-4' />
                    <input type="email" placeholder='Email' className='border-2 border-gray-300 p-2 rounded-md w-full m-4' />
                    <textarea rows="5" placeholder='Message' className='border-2 border-gray-300 p-2 rounded-md w-full m-4'></textarea>
                    <button type="submit" className='bg-gray-800 text-white w-full py-2 mt-1 px-4 rounded-md'>Send</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Contact