import type {NextPage} from 'next';

//Ui import
import Navbar from '../page/HomePage/Navbar';
import Footer from '../page/HomePage/Footer';
import Head from 'next/head';

const Layout: NextPage = (props) => {
    return(
        <>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=PT+Serif&display=swap" rel="stylesheet"/>
        </Head>
        <Navbar/>
        {props.children}
        <Footer/>
        </>
    )
}

export default Layout