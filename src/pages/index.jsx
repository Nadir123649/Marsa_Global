import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contactus from '@/components/Contactus';

const Home = () => {
    
    return (
        <>
            <Head>
                <title>Cigma</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Head>
            <Header />
            <Contactus/>
            <Footer />
        </>
    );
}
export default Home;