import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contactus from '@/components/Contactus';
import Banner from '@/components/Banner';
import CoreFeatures from '@/components/CoreFeatures';

const Home = () => {

    return (
        <>
            <Head>
                <title>Cigma</title>
                <meta name="description" content="Cigma: Connect, Thrive, Be Well." />
                <meta name="keywords" content="Cigma: Connect, Thrive, Be Well." />
            </Head>
            <Header />
            <Banner />
            <main>
                <CoreFeatures />
            </main>
            <Contactus/>
            <Footer />
        </>
    );
}
export default Home;