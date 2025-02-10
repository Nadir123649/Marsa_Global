import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Head from 'next/head';

const Home = () => {

    return (
        <>
            <Head>
                <title>Marsa</title>
                <meta name="description" content="Marsa" />
                <meta name="keywords" content="Marsa" />
            </Head>
            <Header />
            <Banner />
            <main>

            </main>

        </>
    );
}
export default Home;