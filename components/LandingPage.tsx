import type { NextPage } from 'next';
import Navbar from './HomePage/Navbar';
import Header from './HomePage/Header';
import Main from './HomePage/Main';
import ContactUs from './HomePage/ContactUs';

const LandingPage: NextPage = () => {
  return (
    <>
      <Navbar/>
      <header className="mx-6  mb-8">
        <Header/>
      </header>
      <Main/>
      <ContactUs/>
    </>
  )
}

export default LandingPage;
