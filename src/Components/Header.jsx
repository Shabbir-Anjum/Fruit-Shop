import { faBarsStaggered, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

export default function Header() {
    const [nav, setnav]= useState(false);
    const shownav=()=>{
        setnav(!nav);
    }
    useEffect(()=>
    {
        
    }
    ,[])
  return (
    <>
        <header className=' bg-WhiteColor fixed top-0 w-full'>
            <nav className='flex  justify-between p-2 items-center relative'>
                <div className='font-bold text-xl'>
                <img src="../Images/logo.png" alt="error" className='inline'/> TROPIKO
                </div>
                <div className='flex  items-center gap-10 font-Kanit '>
                    <div className={`${nav? 'block': 'hidden'} md:block absolute top-0 right-0 w-[50%] h-screen bg-WhiteColor py-16 md:py-0 md:static md:h-[100%] md:w-full`}>
                    <ul className=' flex gap-10 flex-col md:flex-row justify-center items-center '>
                        <li className='hover:text-orange-400 ' ><a href="#">Home</a></li>
                        <li className='hover:text-orange-400'><a href="#fruit">Fruits</a></li>
                        <li className='hover:text-orange-400'><a href="#services">Services</a></li>
                        <li className='hover:text-orange-400'><a href="#contact">Contact Us</a></li>
                    </ul>
                    <div className='md:hidden absolute top-6 right-2'>
                    <FontAwesomeIcon icon={faX} onClick={shownav}/> 
                    </div>
                    </div>
                    <div className='md:hidden'>
                    <FontAwesomeIcon icon={faBarsStaggered} onClick={shownav}/> 
                    </div>
                    <div className=' hidden md:block'>
                    <img src="../Images/search-icon.png" className=' cursor-pointer' alt="error" />
                </div>
                <div className=' hidden md:block'>
                    <button className=' bg-OrangeColor btn w-32'>Get A Quite</button>
                </div>
                </div>
              
            </nav>
        </header>
    </>
  )
}
