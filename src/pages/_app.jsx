import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [videoWatched, setVideoWatched] = useState(false); // State to track video watched

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
        const handleRouteChange = () => {
            window.scrollTo(0, 0);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    const handleVideoEnd = () => {
        setVideoWatched(true);
    };

    return (
        <>
            {!videoWatched ? (
                <div className='h-[100vh] relative'>
                    <video autoPlay width="100%" height="100vh" onEnded={handleVideoEnd} controls>
                    <source src="/images/video-intro.mp4"  type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    
                    <button 
                    className='video-btn'
                        onClick={() => setVideoWatched(true)} 
                        style={{ display: 'block', margin: '20px auto' }}
                    >
                       Skip Introduction
                    </button>
                </div>
            ) : (
                <Component {...pageProps} />
            )}
        </>
    );
}

export default MyApp;
