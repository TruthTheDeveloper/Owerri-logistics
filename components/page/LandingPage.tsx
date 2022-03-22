// Next import
import type { NextPage } from 'next';
import Head from 'next/head';

//UI Components
import Header from './HomePage/Header';
import Main from './HomePage/Main';
import ContactUs from './HomePage/ContactUs';
// import TrackItem from './HomePage/TrackItem';
import Layout from '../Layout/Layout';
import MoreInfo from './HomePage/MoreInfo';

const LandingPage: NextPage = () => {
  return (
    <>
    <Head>
    {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link> */}
    </Head>
    <Layout>
        <header className="mx-6  mb-8">
          <Header/>
        </header>
        <Main/>
        <MoreInfo/>
        <ContactUs/>
    </Layout>
    </>
  )
}

export default LandingPage;
