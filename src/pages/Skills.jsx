import React from 'react'
import Riact from './../assets/reeact.png'
import nextjs from './../assets/next.png'
import alpine from './../assets/alpine.png'
import bootstrapp from './../assets/bootstraapps.png'
import tailwind from './../assets/taiolwindd.png'
import php from './../assets/pehape.png'

const skil = [
    { id: 1, title: "React", image: Riact },
    { id: 2, title: "Next.js", image: nextjs },
    { id: 3, title: "Alpine.js", image: alpine },
    { id: 4, title: "Bootstrap", image: bootstrapp },
    { id: 5, title: "Tailwind CSS", image: tailwind },
    { id: 6, title: "PHP", image: php },
]
const Skills = () => {
    return (
        <div className='h-screen w-full'>
            <h1 className='text-center text-4xl font-bold py-8'>Expe<span className='text-red-500'>rience</span></h1>
            <div className='grid gris-cols-1 md:grid-cols-3 place-items-center text-center overflow-hidden pb-4'>
                {skil.map((skill) => (
                    <div className='container px-4 py-4 shadow-xl justify-center rounded-lg w-4/5 p-2 '>
                        <div key={skill.id} className="px-4 w-full flex justify-center items-center ">
                            <img
                                src={skill.image}
                                alt={skill.title}
                                className="w-3/5 text-center h-auto object-cover rounded-t-lg hover:scale-105 transition duration-300"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills