
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
            <Container className='footer text-[#FFFFFF] bg-[linear-gradient(188.43deg,_#373737_7.17%,_#313131_94.35%)] rounded-[29px]'>
                <div className='footer-top grid grid-cols-12'>
                    <div className='col-span-4'>
                        <Image src={FooterLogo} />
                    </div>
                    <div className='col-span-8'>
                        <ul className="flex items-center justify-between gap-4 list-none padding-footer">
                            <li>
                                <Link href="/" className="text-white text-[18px] font-[400] not-italic leading-normal hover transition-all duration-300 ease-in-out">
                                    Home
                                </Link>
                            </li>
                            <li className='text-white text-[14px] not-italic leading-normal font-[400]'>
                                |
                            </li>
                            <li>
                                <Link href="/" className="text-white text-[18px] font-[400] not-italic leading-normal hover transition-all duration-300 ease-in-out">
                                    B2C Platform
                                </Link>
                            </li>
                            <li className='text-white text-[14px] not-italic leading-normal font-[400]'>
                                |
                            </li>
                            <li>
                                <Link href="/" className="text-white text-[18px] font-[400] not-italic leading-normal hover transition-all duration-300 ease-in-out">
                                    B2B Platform
                                </Link>
                            </li>
                            <li className='text-white text-[14px] not-italic leading-normal font-[400] '>
                                |
                            </li>
                            <li>
                                <Link href="/" className="text-white text-[18px] font-[400] not-italic leading-normal hover transition-all duration-300 ease-in-out">
                                    Resources
                                </Link>
                            </li>
                            <li className='text-white text-[14px] not-italic leading-normal font-[400] '>
                                |
                            </li>
                            <li>
                                <Link href="/" className="text-white text-[18px] font-[400] not-italic leading-normal hover transition-all duration-300 ease-in-out">
                                    Download Application
                                </Link>
                            </li>
                        </ul>
                        <div className='flex justify-end py-[24px] gap-[12px] items-end'>
                            <div className='flex flex-col max-w-[346px] w-full gap-[2px]'>
                                <label htmlFor="email" className='pb-2'>Subscribe to our weekly news letter.</label>
                                <input
                                    className='bg-[#5454543B] text-[#FFFFFF] border-none  px-[24px] max-w-[346px] w-full h-[50px] rounded-[16px] placeholder-[#FFFFFF] focus:outline-none focus:border-none'
                                    type="email"
                                    placeholder='Enter Email' />
                            </div>
                            <button className='text-[#8BC34A] border-1 border-[#8BC34A] h-[50px] px-[24px] py-[16px] rounded-[16px] max-w-[130px] w-full hover:bg-[#8BC34A] transition-all duration-300 ease-in-out hover:text-white  hover:border-[#8BC34A] hover:border-[1px]'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom flex justify-between items-center pt-[20px]'>
                    <div className='flex items-center justify-center gap-4'>
                        <Link href="https://www.facebook.com/share/1BXfd9RBFn/" target='_blank'>
                            <FaFacebookF size={18} className='text-white hover:text-[#8BC34A] transition-all duration-300 ease-in-out hover' />
                        </Link>
                        <Link href="" target='_blank' >
                            <FaTwitter size={18} className='text-white hover:text-[#8BC34A] transition-all duration-300 ease-in-out hover' />
                        </Link>
                        <Link href="www.linkedin.com/in/get-cigma-101172341" target='_blank'>
                            <FaLinkedinIn size={18} className='text-white hover:text-[#8BC34A] transition-all duration-300 ease-in-out hover' />
                        </Link>
                        <Link href="https://www.instagram.com/getcigma?igsh=MTZmaGFod2F1eWtlYQ==" target='_blank' >
                            <FaInstagram size={18} className='text-white hover:text-[#8BC34A] transition-all duration-300 ease-in-out hover' />
                        </Link>
                    </div>
                    <div className='flex items-center justify-center gap-[24px] '>
                        <Link href="/privacy" className='text-white text-[12px] not-italic font-[500] leading-normal underline hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                            Privacy Policy
                        </Link>
                        <Link href="/consent" className='text-white text-[12px] not-italic font-[500] leading-normal underline hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                            Patient Consent Disclaimer
                        </Link>
                        <Link href="/terms-&-services" className='text-white text-[12px] not-italic font-[500] leading-normal underline hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                            Terms of Service
                        </Link>
                        <p className='text-white text-[12px] not-italic font-[500] leading-normal mb-0'>
                            © 2024 Cigma. All rights reserved. | Designed by &nbsp;
                            <Link href="https://novatoresols.com" target='_blank' className='text-white text-[12px] not-italic font-[500] leading-normal underline hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                                Novatore Solutions
                            </Link>
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
