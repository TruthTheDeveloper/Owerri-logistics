import type {NextPage} from 'next';

//Ui import
import Navbar from '../page/HomePage/Navbar';
import Footer from '../page/HomePage/Footer';

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