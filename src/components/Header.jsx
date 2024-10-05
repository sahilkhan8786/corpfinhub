import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='w-full mb-4 md:mb-0'>
            <nav className='max-w-[1440px] mx-auto  md:py-4 uppercase flex items-center justify-between px-2'>

                <div >
                    <Link to={'/'}>
                        <img src="/logoDark.png" alt="" className='cursor-pointer' />
                    </Link>
                </div>
                <ul className='md:flex items-center gap-4 hidden '>
                    <li>
                        <Link to={'/'}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/about'}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to={''}>
                            The hub
                        </Link>
                    </li>
                    <li>
                        <Link to={'/pricing'}>
                            Pricing
                        </Link>
                    </li>
                </ul>
                <div className=' gap-3 hidden md:flex'>
                    <Link to={'/sign-in'}>
                        <button className='bg-primary text-white hover:opacity-85 px-4 py-2 border border-primary font-medium uppercase'>Login</button>
                    </Link>
                    <Link to={'/sign-up'}>
                        <button className='uppercase border border-primary px-4 py-2 text-primary font-medium hover:opacity-85'>Sign up</button>
                    </Link>
                </div>
                <img src="/menu.png" alt="" className='pr-4 cursor-pointer block md:hidden' />
            </nav>
        </header>
    )
}

export default Header