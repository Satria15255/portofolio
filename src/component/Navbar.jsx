import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

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
        <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-gray-800 shadow-lg" : "bg-transparant"}`}>
            <div className='flex w-full justify-between items-center text-white px-8 py-6'>
                <h1 className='text-2xl font-bold '>JerdnStore.<span className='text-red-500'>Co</span></h1>
                <Router>
                    <ul className='flex justify-between text-xl font-bold gap-10'>
                        <li
                        ><Link to="/" className='hover:underline transition duration-300'>Home </Link>
                        </li>
                        <li>
                            <Link to="/about" className='hover:underline transition duration-300'>About</Link></li>
                        <li className='hover:underline'>Portofolio</li>
                        <li className='hover:underline'>Contact</li>
                    </ul>
                </Router>
            </div>
        </nav>
    )
}

export default Navbar