
import React from 'react'
import { Container } from 'react-bootstrap'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import { FooterLogo } from '@/utils';

const Footer = () => {
    return (
        <footer className='pb-[50px]'>
            <Container className='p-4 text-[#FFFFFF] bg-[linear-gradient(188.43deg,_#373737_7.17%,_#313131_94.35%)]  rounded-[29px]'>
                <div className='footer-top grid grid-cols-12'>
                    <div className='col-span-4'> <Image src={FooterLogo} /></div>
                    <div className='col-span-8'>
                        <ul className="flex items-center justify-center gap-4 list-none pb-2 ">
                            <li className="text-center  border-white border-l border-[#ffffff]">
                                <Link href="/" className="text-[#FFFFFF] text-[18px]">
                                    Home
                                </Link>
                            </li>
                            <li className="text-center  border-white border-l border-[#ffffff]">
                                <Link href="/" className="text-[#FFFFFF] text-[18px]">
                                    B2C Platform
                                </Link>
                            </li>
                            <li className="text-center border-l border-[#ffffff]">
                                <Link href="/" className="text-[#FFFFFF] text-[18px]">
                                    B2B Platform
                                </Link>
                            </li>
                            <li className="text-center border-l border-[#ffffff]">
                                <Link href="/" className="text-[#FFFFFF] text-[18px]">
                                    Resources
                                </Link>
                            </li>
                            <li className="text-center border-l border-[#ffffff]">
                                <Link href="/" className="text-[#FFFFFF] text-[18px]">
                                    Download Application
                                </Link>
                            </li>
                        </ul>
                        <div className='flex justify-end  py-8 gap-4 items-end'>
                            <div className='flex flex-col'>
                                <label htmlFor="email" className='pb-2'>Subscribe to our weekly news letter.</label>
                                <input
                                    className='bg-[#5454543B] text-[#FFFFFF] border-none h-[60px] px-[24px] py-[16px] rounded-[16px] placeholder-[#FFFFFF]'
                                    type="email"
                                    placeholder='Enter Email' />
                            </div>
                            <button className='text-[#8BC34A] border-1 border-[#8BC34A] h-[60px] px-[24px] py-[16px] rounded-[16px]'>Subscribe</button></div>
                        </div>
                </div>
                <div className=' footer-bottom flex justify-between items-center pt-3'>
                    <div className='flex items-center justify-center gap-4'>
                        <FaFacebookF />
                        <FaTwitter />
                        <FaLinkedinIn />
                        <FaInstagram />
                    </div>
                    <div className=' flex items-center justify-center gap-4 '>
                        <Link href="/" className='text-[#FFFFFF] text-[12px]'>
                            Privacy Policy
                        </Link>
                        <Link href="/" className='text-[#FFFFFF] text-[12px]'>
                            Patient Consent Disclaimer
                        </Link>
                        <Link href="/" className='text-[#FFFFFF] text-[12px]'>
                            Terms of Service
                        </Link>
                        <Link href="/" className='text-[#FFFFFF] text-[12px]'>
                            © 2024 Cigma. All rights reserved. | Designed by Novatore Solutions
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>

    );
}

export default Footer;
