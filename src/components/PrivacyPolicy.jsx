import { LogoHeader } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

const PrivacyPolicy = () => {
    return (
        <section>
            <Container>
                <h1 className='text-[#8BC34A] text-[48px] font-bold pb-[10px]'>Our Privacy <span className='text-[#494949]'>Policy</span></h1>
                <div className='custom-border py-[20px] '>
                    <h2 className='font-semibold text-[24px]'>Effective Date: <span className='text-[#8BC34A] font-medium'>January 23, 2025</span> </h2>
                </div>
                <div className=' py-[20px] '>
                    <p className='text-[24px] text-[#494949] leading-[35px]'>Welcome to Cigma! Your privacy is important to us. This Privacy Policy and Patient Consent Disclaimer outlines how we collect, use, disclose, and protect your information while using our mobile application (“App”) or website (“Services”). By using our Services, you consent to the practices described in this Privacy Policy.</p>
                </div>
                {/* info we collect */}
                <div className='custom-border py-[20px]  '>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] pb-[10px]'>1- Information We Collect</h2>
                    <p className='text-[#4E4E4E] text-[24px] font-medium py-[14px]'>We collect the following types of information:</p>
                    <ul className='flex flex-col gap-[14px] '>
                        <li className=''>
                            <h2 className='font-medium text-[24px] text-[#8BC34A] pb-[10px]'>1.1- Personal Information</h2>
                            <p className='text-[#4E4E4E] text-[24px] leading-[35px]'>Name, email address, phone number, or other identifiers you provide during registration. Customized user profile details, if entered.</p>
                        </li>
                        <li>
                            <h2 className='font-medium text-[24px] text-[#8BC34A] pb-[10px]'>1.2- Usage Information</h2>
                            <p className='text-[#4E4E4E] text-[24px] leading-[30px]'>Data about your use of the App, such as activity logs, interaction with features, and preferences.</p>
                        </li>
                        <li>
                            <h2 className='font-medium text-[24px] text-[#8BC34A] pb-[10px]'>1.3- Device Information</h2>
                            <p className='text-[#4E4E4E] text-[24px] leading-[30px]'>Device type, operating system, unique device identifiers, and IP address.</p>
                        </li>
                        <li>
                            <h2 className='font-medium text-[24px] text-[#8BC34A] pb-[10px]'>1.4- Sensitive Data</h2>
                            <p className='text-[#4E4E4E] text-[24px] leading-[30px]'>Mood tracking and journaling inputs are encrypted and stored securely to protect your privacy.</p>
                        </li>
                        <li>
                            <h2 className='font-medium text-[24px] text-[#8BC34A] pb-[10px]'>1.5- Location Information</h2>
                            <p className='text-[#4E4E4E] text-[24px] leading-[30px]'>Approximate location for regional content recommendations (optional and user-controlled).</p>
                        </li>
                    </ul>
                </div>
                 {/* we use info to  */}
                 <div className='custom-border py-[20px]  '>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] pb-[10px]'>2- We use the information to:</h2>
                    <ul className='flex flex-col gap-[14px] '>
                        <li className=''>
                            <p className='text-[#4E4E4E] text-[24px] font-medium leading-[35px]'>Provide and improve our Services.</p>
                        </li>
                        <li>
                            <p className='text-[#4E4E4E] text-[24px]  font-medium leading-[30px]'>Personalize your experience, including content and recommendations.
                            </p>
                        </li>
                        <li>
                            <p className='text-[#4E4E4E] text-[24px] font-medium leading-[30px]'>Enhance security and prevent fraudulent activities.</p>
                        </li>
                        <li>
                            <p className='text-[#4E4E4E] text-[24px] font-medium leading-[30px]'>Communicate updates, offers, and support.</p>
                        </li>
                       
                    </ul>
                </div>
            </Container>
        </section>
    )
}
export default PrivacyPolicy