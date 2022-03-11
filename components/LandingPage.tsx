import type { NextPage } from 'next';
import Navbar from './HomePage/Navbar';
import Header from './HomePage/Header';
import Main from './HomePage/Main';

const LandingPage: NextPage = () => {
  return (
    <>
      <Navbar/>
      <header className="mx-6">
        <Header/>
      </header>
      <Main/>
    </>
  )
}

export default LandingPage;
