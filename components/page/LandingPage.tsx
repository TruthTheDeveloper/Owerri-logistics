// Next import
import type { NextPage } from 'next';
import Head from 'next/head';

//UI Components
import Header from './HomePage/Header';
import Main from './HomePage/Main';
import ContactUs from './HomePage/ContactUs';
import Footer from '../page/HomePage/Footer';
import Navbar from './HomePage/Navbar';

import logistics from '../../images/logistics.jpg';
import deliver2 from '../../images/deliver2.jpg';
import delivery from '../../images/delivery1.jpg';

import deliveryImage1 from '../../images/deliverImage1.jpg';
import deliveryImage2 from '../../images/deliveryImage2.jpg';
import deliveryImage3 from '../../images/deliveryImage3.jpg';
import deliveryImage4 from '../../images/deliveryImage4.jpg';
import delivery1 from '../../images/delivery1.jpg';
import delivery5 from '../../images/delivery5.jpg';
import delivery6 from '../../images/delivery6.jpg';
import delivery7 from '../../images/delivery7.jpg';

// import TrackItem from './HomePage/TrackItem';
import MoreInfo from './HomePage/MoreInfo';
import ReactFullpage from '@fullpage/react-fullpage';

const LandingPage: NextPage = () => {
  return (
    <>
    <Head>
    {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link> */}
    </Head>
      <ReactFullpage
      
      scrollingSpeed = {1000} 
      /* Options here */
      navigation = {true}
      scrollOverflow ={true}
      

      render={({ state, fullpageApi }) => {
        return (
          
          <>
           
            <ReactFullpage.Wrapper>
            <div className="section bg-rd-500 flex flex-col z-10" style={{
              backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + deliveryImage4.src + ")",
              backgroundRepeat:'no-repeat',
              backgroundSize:'cover',
              
              }}>
                {/* <div style={{height:'80vh'}}>

                </div> */}
              <p>Section 1 (welcome to fullpage.js)</p>
            </div>


            <div className="section" style={{
              backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + delivery5.src + ")",
              backgroundRepeat:'no-repeat',
              backgroundSize:'cover',
              height:'100vh'
              }}>
                {/* <div style={{height:'120vh'}}>

                </div> */}
              <p>Section 2</p>
            </div>

            
            <div className="section " style={{
              backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + delivery7.src + ")",
              backgroundRepeat:'no-repeat',
              backgroundSize:'cover',
              // height:'100vh'
              }}>
              <p>Section 3</p>
              
            </div>

            <div className="section">
              {/* <p>Section 3</p> */}
              
            <Main/>
              <MoreInfo/>
              <ContactUs/>
              <Footer/>
            </div>
            
          </ReactFullpage.Wrapper>
          </>
        );
      }}
    />
        <header className="mx-6  mb-8">
          <Header/>
        </header>
        
        
    </>
  )
}

export default LandingPage;
