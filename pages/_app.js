import '../styles/globals.css';
import DashBoard from '../components/Dash-board';

function MyApp({ Component, pageProps }) {
    return (
        <DashBoard>
            <Component {...pageProps} />
        </DashBoard>
    );
}

export default MyApp;
