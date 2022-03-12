import type {NextPage} from 'next';
import Navbar from '../HomePage/Navbar';
import Footer from '../HomePage/Footer';

const Layout: NextPage = (props) => {
    return(
        <>
        <Navbar/>
        {props.children}
        <Footer/>
        </>
    )
}

export default Layout