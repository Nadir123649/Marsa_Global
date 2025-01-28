import { LogoHeader } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header className='py-[14px]'>
            <Container className='flex justify-between items-center p-0'>
                <Link href="/">
                    <Image
                        src={LogoHeader}
                        alt="Cigma"
                        width={200}
                        height={100}
                    />
                </Link>
                <div className='flex items-center gap-[32px]'>
                    <nav>
                        <ul className='flex items-center gap-[32px]'>
                            <li>
                                <Link href="/" className='text-[#373737] text-[16px] not-italic font-[400] leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/btoc-platform" className='text-[#373737] text-[16px] not-italic font-[400] leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                    B2C Platform
                                </Link>
                            </li>
                            <li>
                                <Link href="/btob-platform" className='text-[#373737] text-[16px] not-italic font-[400] leading-normal hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                    B2B Platform
                                </Link>
                            </li>
                            <li>
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
            </Container>
        </header>
    )
}
export default Header