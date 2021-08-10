import Head from 'next/head';
import Home from '../components/Home';
import CustomHead from '../components/CustomHead';

export default function HomePage() {
    return (
        <div>
            <CustomHead>
                <title>Xplor | All Tours</title>
            </CustomHead>

            <Home />
        </div>
    );
}
