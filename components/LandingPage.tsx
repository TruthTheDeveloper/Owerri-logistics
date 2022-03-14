// Next import
import type { NextPage } from 'next';
import Head from 'next/head';

//UI Components
import Header from './HomePage/Header';
import Main from './HomePage/Main';
import ContactUs from './HomePage/ContactUs';
import TrackItem from './HomePage/TrackItem';
import Layout from './Layout/Layout';

const LandingPage: NextPage = () => {
  return (
    <>
    <Head>
    
    </Head>
    <Layout>
        <header className="mx-6  mb-8">
          <Header/>
          <TrackItem/>
        </header>
        <Main/>
        <ContactUs/>
    </Layout>
    </>
  )
}

export default LandingPage;
