import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-between px-4 '>
            <h1 className='text-3xl font-bold '>JerdnStore.<span className='text-red-500'>Co</span></h1>
            <ul className='text-left'>
                <h1 className='pb-4 font-bold  text-3xl'>Portofolio</h1>
                <li className='py-3 text-xl'>Admin Dashboard</li>
                <li className='py-3 text-xl'>Mini E-commerce</li>
                <li className='py-3 text-xl'>Company Profile</li>
                <li className='py-3 text-xl'>More Porto</li>
            </ul>
            <ul className='text-left py-4'>
                <h1 className='pb-4 font-bold text-3xl'>Contact</h1>
                <li className='py-3 text-xl'>Instagram</li>
                <li className='py-3 text-xl'>Whatsapp</li>
                <li className='py-3 text-xl'>linkedin</li>
                <li className='py-3 text-xl'>Upwork</li>
            </ul>
        </div>
    )
}

export default Footer