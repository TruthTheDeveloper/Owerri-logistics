import type { NextPage } from 'next';
import Navbar from './HomePage/Navbar';
import Header from './HomePage/Header';
import Main from './HomePage/Main';
import ContactUs from './HomePage/ContactUs';
import Footer from './HomePage/Footer';

const LandingPage: NextPage = () => {
  return (
    <>
      <Navbar/>
      <header className="mx-6  mb-8">
        <Header/>
      </header>
      <Main/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default LandingPage;
