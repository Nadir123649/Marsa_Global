import { useState, useEffect } from 'react';
import { FooterLogoNew } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(null);
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);
    return (
        <footer className='pb-[50px]'>
            <Container className='footer text-[#FFFFFF] bg-[linear-gradient(188.43deg,_#373737_7.17%,_#313131_94.35%)] rounded-[29px]'>
                <div className='footer-top grid grid-cols-12 gap-4'>
                    <div className='col-span-12 sm:col-span-4'>
                        <Image src={FooterLogoNew} alt="Footer Logo" className='footer-logo' />
                    </div>
                    <div className='col-span-12 sm:col-span-8'>
                        <ul className="flex sm:flex-row flex-col sm:items-center justify-between gap-[6px] list-none padding-footer">
                            <li>
                                <Link href="/" className="text-white text-[18px] font-[400] not-italic leading-normal hover transition-all duration-300 ease-in-out">
                                    Home
                                </Link>
                            </li>
                            <li className='text-seprator text-white text-[14px] not-italic leading-normal font-[400] '>
                                |
                            </li>
                            <li>
                                <Link href="/" className="text-white text-[18px] font-[400] not-italic leading-normal hover transition-all duration-300 ease-in-out">
                                    B2C Platform
                                </Link>
                            </li>
                            <li className='text-seprator text-white text-[14px] not-italic leading-normal font-[400]'>
                                |
                            </li>
                            <li>
                                <Link href="/" className="text-white text-[18px] font-[400] not-italic leading-normal hover transition-all duration-300 ease-in-out">
                                    B2B Platform
                                </Link>
                            </li>
                            <li className='text-seprator text-white text-[14px] not-italic leading-normal font-[400]'>
                                |
                            </li>
                            <li>
                                <Link href="/" className="text-white text-[18px] font-[400] not-italic leading-normal hover transition-all duration-300 ease-in-out">
                                    Resources
                                </Link>
                            </li>
                            <li className='text-seprator text-white text-[14px] not-italic leading-normal font-[400]'>
                                |
                            </li>
                            <li>
                                <Link href="/" className="text-white text-[18px] font-[400] not-italic leading-normal hover transition-all duration-300 ease-in-out">
                                    Download App
                                </Link>
                            </li>
                        </ul>
                        <div className='flex flex-col md:flex-row  justify-end py-[24px] gap-[12px] items-start md:items-end'>
                            <div className='flex flex-col  gap-[2px]'>
                                <label htmlFor="email" className='pb-2'>Subscribe to our weekly news letter.</label>
                                <input
                                    className='bg-[#5454543B] text-[#FFFFFF] border-none px-[24px] max-w-[346px] w-full h-[50px] rounded-[16px] placeholder-[#FFFFFF] focus:outline-none focus:border-none'
                                    type="email"
                                    placeholder='Enter Email' />
                            </div>
                            <button className='flex justify-center items-center text-[#8BC34A] border-1 border-[#8BC34A] h-[50px] px-[24px] py-[16px] rounded-[16px] max-w-[130px] w-full hover:bg-[#8BC34A] transition-all duration-300 ease-in-out hover:text-white  hover:border-[#8BC34A] hover:border-[1px]'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom flex flex-col sm:flex-row justify-between items-center pt-[20px]'>
                    <div className='flex items-center justify-center gap-4 mb-[10px] sm:mb-0'>
                        <Link href="https://www.facebook.com/share/1BXfd9RBFn/" target='_blank'>
                            <FaFacebookF size={18} className='text-white hover:text-[#8BC34A] transition-all duration-300 ease-in-out hover' />
                        </Link>
                        <Link href="https://www.linkedin.com/company/get-cigma/" target='_blank'>
                            <FaLinkedinIn size={18} className='text-white hover:text-[#8BC34A] transition-all duration-300 ease-in-out hover' />
                        </Link>
                        <Link href="https://www.instagram.com/getcigma?igsh=MTZmaGFod2F1eWtlYQ==" target='_blank' >
                            <FaInstagram size={18} className='text-white hover:text-[#8BC34A] transition-all duration-300 ease-in-out hover' />
                        </Link>
                    </div>
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-[8px] md:gap-[24px]'>
                        <Link href="/privacy" className='text-white text-[12px] not-italic font-[500] leading-normal underline hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                            Privacy Policy
                        </Link>
                        <Link href="/consent" className='text-white text-[12px] not-italic font-[500] leading-normal underline hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                            Patient Consent Disclaimer
                        </Link>
                        <Link href="/terms-&-services" className='text-white text-[12px] not-italic font-[500] leading-normal underline hover:text-[#8BC34A] transition-all duration-300 ease-in-out'>
                            Terms of Service
                        </Link>
                        <p className='text-white text-center text-[12px] not-italic font-[500] leading-normal mb-0'>
                            © {currentYear} Cigma. All rights reserved. | Designed by &nbsp;
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
