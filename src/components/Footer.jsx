
import React from 'react'
import { Container } from 'react-bootstrap'
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
import Link from 'next/link'; 


const Footer = () => {
    return (
        <footer>
            <Container className='text-[#FFFFFF] bg-[linear-gradient(188.43deg,_#373737_7.17%,_#313131_94.35%)] min-h-[267px] rounded-[29px]'>
                <div className='footer-top'>
                    Footer top
                </div>
                <div className='footer-bottom flex justify-between items-center py-4'>
                    <div className='flex items-center justify-center gap-4'>
                        {/* <FaFacebookF />
                        <FaTwitter />
                        <FaLinkedinIn />
                        <FaInstagram /> */}
                    </div>
                    <div className='flex items-center justify-center gap-4'>
                        <Link href="https://linkedin.com">
                           gggg
                        </Link>
                    </div>

                </div>
            </Container>
        </footer>

    );
}

export default Footer;
