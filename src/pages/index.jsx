import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
    
    return (
        <>
            <Head>
                <title>Cigma</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Head>
            <Header />
            <Footer />
        </>
    );
}
export default Home;