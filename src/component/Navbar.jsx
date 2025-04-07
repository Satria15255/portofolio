import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll)
        return (() => window.removeEventListener("scroll", handleScroll))
    }, [])

    return (
        <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-gray-800 shadow-lg" : "bg-black"}`}>
            <div className='flex w-full justify-between items-center text-white px-8 py-6'>
                <h1 className='text-2xl font-bold '>JerdnCode.<span className='text-red-500'>Co</span></h1>
                    <ul className='flex justify-between text-xl font-bold gap-10'>
                    <Link to="/" className='hover:underline transition duration-300'>Home </Link>
                    <Link to="/about" className='hover:underline transition duration-300'>About</Link>
                    <Link to="/portofolio" className='hover:underline'>Portofolio</Link>
                    <Link to="/contact" className='hover:underline'>Contact</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar