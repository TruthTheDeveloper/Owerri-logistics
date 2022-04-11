import type {NextPage} from 'next';

//Ui import
import Navbar from '../page/HomePage/Navbar';
import Footer from '../page/HomePage/Footer';
import Head from 'next/head';

const Layout: NextPage = (props) => {
    return(
        <>
        <Head>
            <link rel="stylesheet" type="text/css" href="fullpage.css" />
            
        </Head>
        <Navbar/>
        {props.children}
        <Footer/>
        </>
    )
}

export default Layout