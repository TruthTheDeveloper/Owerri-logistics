import type { NextPage } from 'next';
import Navbar from './HomePage/Navbar';
import Header from './HomePage/Header';
import Main from './HomePage/Main';
import ContactUs from './HomePage/ContactUs';
import Footer from './HomePage/Footer';
import TrackItem from './HomePage/TrackItem';
import Head from 'next/head';


const LandingPage: NextPage = () => {
  return (
    <>
    <Head>
    
    </Head>
      <Navbar/>
      <header className="mx-6  mb-8">
        <Header/>
        <TrackItem/>
      </header>
      <Main/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default LandingPage;
