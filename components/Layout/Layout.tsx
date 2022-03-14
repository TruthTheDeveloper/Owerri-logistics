import type {NextPage} from 'next';

//Ui import
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