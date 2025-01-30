import { LogoHeader } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { FaBars, FaTimes } from 'react-icons/fa' 

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'; 
        } else {
            document.body.style.overflow = 'auto';   
        }

     
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [menuOpen])


    return (
        <header className='fixed inset-0 bg-[#FFF] z-50 h-[100px] flex flex-col justify-center items-center'>
            <Container className='flex justify-between items-center py-0 px-[20px]'>
                <Link href="/">
                    <Image
                        src={LogoHeader}
                        alt="Cigma"
                        width={200}
                        height={100}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className='hidden md:flex items-center gap-[32px]'>
                    <nav>
                        <ul className='flex items-center gap-[32px]'>
                            <li className='text-[#373737] text-[16px] not-italic font-[400] leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                <Link href="/" className='text-[#373737] text-[16px] not-italic font-[400] leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                    Home
                                </Link>
                            </li>
                            <li className='text-[#373737] text-[16px] not-italic font-[400] leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                <Link href="/btoc-platform" className='text-[#373737] text-[16px] not-italic font-[400] leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                For Users
                                </Link>
                            </li>
                            <li className='text-[#373737] text-[16px] not-italic font-[400] leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                <Link href="/btob-platform" className='text-[#373737] text-[16px] not-italic font-[400] leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                For Businesses
                                </Link>
                            </li>
                            <li className='text-[#373737] text-[16px] not-italic font-[400] leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'> 
                                <Link href="/resources" className='text-[#373737] text-[16px] not-italic font-[400] leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                    Resources
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <button className='btn-download text-[#FFF] text-[16px] font-[500] leading-normal not-italic rounded-[50px] bg-[#8BC34A] px-[26px] h-[48px] transition-all duration-300 border-[1px] border-transparent  ease-in-out hover:bg-[#fff] hover:text-[#8BC34A] hover:border-[#8BC34A] hover:border-[1px]'>
                        Download
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className='md:hidden flex items-center'>
                    <button onClick={toggleMenu}>
                        {menuOpen ? (
                            <FaTimes size={30} color="#373737" />
                        ) : (
                            <FaBars size={30} color="#373737" />
                        )}
                    </button>
                </div>
            </Container>

            {/* Mobile Menu with Slide-in effect */}
            <div 
                className={`md:hidden p-[30px] fixed top-0 left-0 h-full w-full bg-[#FFF] transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} z-60`}
            >
                {/* Close Button - Positioned at the top right */}
                <div className="absolute top-[30px] right-[20px]">
                    <button onClick={toggleMenu}>
                        <FaTimes size={30} color="#373737" />
                    </button>
                </div>

                <nav className='p-4'>
                    <ul className='flex flex-col gap-4'>
                        <li className='text-[#373737] text-[16px] not-italic font-[400] leading-normal hover:text-[#8BC34A]'>
                            <Link href="/" className='text-[#373737] text-[16px]'>
                                Home
                            </Link>
                        </li>
                        <li className='text-[#373737] text-[16px] not-italic font-[400] leading-normal hover:text-[#8BC34A]'>
                            <Link href="/btoc-platform" className='text-[#373737] text-[16px]'>
                               For Users
                            </Link>
                        </li>
                        <li className='text-[#373737] text-[16px] not-italic font-[400] leading-normal hover:text-[#8BC34A]'>
                            <Link href="/btob-platform" className='text-[#373737] text-[16px]'>
                            For Businesses
                            </Link>
                        </li>
                        <li className='text-[#373737] text-[16px] not-italic font-[400] leading-normal hover:text-[#8BC34A]'>
                            <Link href="/resources" className='text-[#373737] text-[16px]'>
                                Resources
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button className='btn-download text-[#FFF] text-[16px] font-[500] leading-normal not-italic rounded-[50px] bg-[#8BC34A] px-[26px] h-[48px] transition-all duration-300 border-[1px] border-transparent ease-in-out hover:bg-[#fff] hover:text-[#8BC34A] hover:border-[#8BC34A] hover:border-[1px]'>
                    Download
                </button>
            </div>
        </header>
    )
}

export default Header
