import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import '../styles/globals.css';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {


    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
