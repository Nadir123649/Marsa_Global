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
                <div className='custom-border py-[30px] '>
                    <h2 className='font-semibold text-[24px]'>Effective Date: <span className='text-[#8BC34A] font-medium'>January 23, 2025</span> </h2>
                </div>
                <div className=' py-[30px] '>
                    <p className='text-[24px] text-[#494949] leading-[35px]'>Welcome to Cigma! Your privacy is important to us. This Privacy Policy and Patient Consent Disclaimer outlines how we collect, use, disclose, and protect your information while using our mobile application (“App”) or website (“Services”). By using our Services, you consent to the practices described in this Privacy Policy.</p>
                </div>
                {/* info we collect */}
                <div className='custom-border py-[30px]  '>
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
                <div className='custom-border py-[30px]  '>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] pb-[10px]'>2- We use the information to:</h2>
                    <ul className='info-list flex flex-col gap-[14px] list-disc'>
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
                {/* sahring info */}
                <div className='custom-border py-[30px]  '>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] pb-[10px]'>3- Sharing Your Information</h2>
                    <p className='text-[#4E4E4E] text-[24px] font-medium pt-[20px]'>We do not sell your personal information. We may share data:</p>
                    <ul className='info-list flex flex-col gap-[14px] list-disc '>
                        <li className=''>
                            <p className='text-[#4E4E4E] text-[24px]  leading-[35px]'>With service providers to maintain the App.</p>
                        </li>
                        <li>
                            <p className='text-[#4E4E4E] text-[24px]   leading-[30px]'>For legal requirements, such as complying with applicable laws.
                            </p>
                        </li>
                        <li>
                            <p className='text-[#4E4E4E] text-[24px]  leading-[30px]'>With your consent, for specific features like connecting with mental health professionals.</p>
                        </li>

                    </ul>
                </div>
                {/* data security */}
                <div className='custom-border py-[30px]  '>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] pb-[10px]'>4- Data Security</h2>
                    <p className='text-[#4E4E4E] text-[24px]  pt-[20px] leading-[37px]'>We use end-to-end encryption (E2EE), secure cloud storage, and other measures to protect your
                        information. However, no system is entirely secure, and we encourage you to report any
                        concerns immediately.
                    </p>
                </div>
                {/*Your Rights */}
                <div className='custom-border py-[30px]  '>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] pb-[10px]'>5- Your Rights</h2>
                    <p className='text-[#4E4E4E] text-[24px] font-medium pt-[20px]'>You have the right to:</p>
                    <ul className='info-list flex flex-col gap-[14px] list-disc '>
                        <li className=''>
                            <p className='text-[#4E4E4E] text-[24px]  leading-[35px]'>Access, update, or delete your personal data.</p>
                        </li>
                        <li>
                            <p className='text-[#4E4E4E] text-[24px]   leading-[30px]'>Opt-out of non-essential data collection and communications.
                            </p>
                        </li>
                        <li>
                            <p className='text-[#4E4E4E] text-[24px]  leading-[30px]'>Withdraw consent where applicable</p>
                        </li>

                    </ul>
                </div>

                 {/* data retention */}
                 <div className='custom-border py-[30px]  '>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] pb-[10px]'>6- Data Retention</h2>
                    <p className='text-[#4E4E4E] text-[24px]  pt-[20px] leading-[37px]'>
                    We retain data as long as it is necessary for the purposes outlined in this policy or required by 
                    law.
                    </p>
                </div>

                {/* 3rd party services*/}
                <div className='custom-border py-[30px]  '>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] pb-[10px]'>7- Third-Party Services</h2>
                    <p className='text-[#4E4E4E] text-[24px]  pt-[20px] leading-[37px]'>
                    We may use third-party analytics tools or integrate with platforms (e.g., Google, Apple) to 
                    enhance our Services. These providers have their privacy policies governing data use.
                    </p>
                </div>

                  {/* Children's Privacy*/}
                  <div className='custom-border py-[30px]  '>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] pb-[10px]'>8- Children's Privacy</h2>
                    <p className='text-[#4E4E4E] text-[24px]  pt-[20px] leading-[37px]'>
                    Cigma is not intended for children under 13. We do not knowingly collect information from 
                    minors.
                    </p>
                </div>

                
                  {/*Updates to This Policy*/}
                  <div className='custom-border py-[30px]  '>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] pb-[10px]'>9- Updates to This Policy</h2>
                    <p className='text-[#4E4E4E] text-[24px]  pt-[20px] leading-[37px]'>
                    We may update this Privacy Policy from time to time. Changes will be communicated via the 
                    App or email.
                    </p>
                </div>

                  {/*  Contact Us*/}
                  <div className='custom-border py-[30px]  '>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] pb-[10px]'>10- Contact Us</h2>
                    <p className='text-[#4E4E4E] text-[24px] font-medium pt-[20px]'>If you have any questions or concerns, contact us at:</p>
                    <ul className='flex flex-col gap-[14px] list-disc '>
                        <li className=''>
                            <p className='text-[#4E4E4E] text-[24px]  leading-[35px]'>url</p>
                        </li>
                        <li>
                            <p className='text-[#4E4E4E] text-[24px]   leading-[30px]'>url
                            </p>
                        </li>
                        <li>
                            <p className='text-[#4E4E4E] text-[24px]  leading-[30px]'>url</p>
                        </li>

                    </ul>
                </div>
            </Container>
        </section>
    )
}
export default PrivacyPolicy