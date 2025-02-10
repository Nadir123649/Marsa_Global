import { Logo, SearchIcon } from '@/utils'
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
            <Container className='flex justify-center items-center gap-[40px] py-0 px-[20px]'>
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={148}
                        height={72}
                    />
                </Link>
                {/* Desktop Menu */}
                <div className='hidden md:flex items-center gap-[32px]'>
                    <nav>
                        <ul className='flex items-center gap-[32px]'>
                            <li className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                <Link href="/" className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                    Services
                                </Link>
                            </li>
                            <li className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                <Link href="/" className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                    Products
                                </Link>
                            </li>
                            <li className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                <Link href="/" className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                    Sourcing
                                </Link>
                            </li>
                            <li className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                <Link href="/" className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                    Solutions
                                </Link>
                            </li>
                            <li className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                <Link href="/" className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                    Success
                                </Link>
                            </li>
                            <li className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                <Link href="/" className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                    Partners
                                </Link>
                            </li>
                            <li className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                <Link href="/" className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                    FAQ
                                </Link>
                            </li>
                            <li className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                <Link href="/" className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                    Contact
                                </Link>
                            </li>
                        </ul>

                    </nav>
                    <Image
                        src={SearchIcon}
                        alt="search"
                        width={18}
                        height={12}
                    />

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
                <Image
                    src={Logo}
                    alt="Logo"
                    width={148}
                    height={72}
                />
                {/* Close Button - Positioned at the top right */}
                <div className="absolute top-[30px] right-[20px]">
                    <button onClick={toggleMenu}>
                        <FaTimes size={30} color="#373737" />
                    </button>
                </div>

                <nav className='p-4'>

                    <ul className='flex flex-col gap-4'>
                        <li className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                            <Link href="/" className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                Services
                            </Link>
                        </li>
                        <li className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                            <Link href="/" className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                Products
                            </Link>
                        </li>
                        <li className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                            <Link href="/" className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                Sourcing
                            </Link>
                        </li>
                        <li className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                            <Link href="/" className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                Solutions
                            </Link>
                        </li>
                        <li className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                            <Link href="/" className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                Success
                            </Link>
                        </li>
                        <li className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                            <Link href="/" className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                Partners
                            </Link>
                        </li>
                        <li className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                            <Link href="/" className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                FAQ
                            </Link>
                        </li>
                        <li className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                            <Link href="/" className='text-[#00121C] text-[16px] not-italic font-bold leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                Contact
                            </Link>
                        </li>

                    </ul>

                </nav>

            </div>
        </header>
    )
}

export default Header
