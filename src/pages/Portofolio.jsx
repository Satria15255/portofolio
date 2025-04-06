import React from 'react'
import landingPage from './../assets/indotma.png'
import miniEcommerce from './../assets/e-comm.png'
import portfolio from '../assets/portfolio.png'
import 'swiper/css/navigation'
import 'swiper/css'

const projects = [
    { id: 1, title: "Company Profile", image: landingPage },
    { id: 2, title: "Mini E-Commerce", image: miniEcommerce },
    { id: 4, title: "Portfolio Website", image: portfolio },
]

const Portofolio = () => {
    return (
        <div className="h-screen w-full py-4 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold py-8">My <span className="text-red-500">Project</span></h1>
            <div className='grid gris-cols-1 md:grid-cols-3 gap-4'>
                {projects.map((project) => (
                    <div key={project.id} className="p-4 ">
                        <div className="bg-white w-full shadow-lg rounded-lg hover:scale-105 transition duration-300">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-cover rounded-t-lg"
                            />
                            <h3 className="flex items-center justify-center text-xl text-center font-semibold p-3">{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portofolio