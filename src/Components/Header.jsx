import React from 'react'

export default function Header() {
  return (
    <>
        <header className=' bg-WhiteColor fixed top-0 w-full'>
            <nav className='flex  justify-between p-2 items-center relative'>
                <div className='font-bold text-xl'>
                <img src="../Images/logo.png" alt="error" className='inline'/> TROPIKO
                </div>
                <div className='flex items-center gap-10 font-Kanit'>
                    <div>
                    <ul className=' flex gap-10'>
                        <li className='hover:text-orange-400 ' ><a href="#">Home</a></li>
                        <li className='hover:text-orange-400'><a href="#fruit">Fruits</a></li>
                        <li className='hover:text-orange-400'><a href="#services">Services</a></li>
                        <li className='hover:text-orange-400'><a href="#contact">Contact Us</a></li>
                    </ul>
                    </div>
                    <div>
                    <img src="../Images/search-icon.png" className=' cursor-pointer' alt="error" />
                </div>
                <div>
                    <button className=' bg-OrangeColor btn'>Get A Quite</button>
                </div>
                </div>
              
            </nav>
        </header>
    </>
  )
}
