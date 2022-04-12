// Next import
import type { NextPage } from 'next';
import Head from 'next/head';

//UI Components
import Header from './HomePage/Header';
import Main from './HomePage/Main';
import ContactUs from './HomePage/ContactUs';
import Footer from '../page/HomePage/Footer';


import deliveryImage4 from '../../images/deliveryImage4.jpg';
import delivery5 from '../../images/delivery5.jpg';
import delivery7 from '../../images/delivery7.jpg';

// import TrackItem from './HomePage/TrackItem';
import MoreInfo from './HomePage/MoreInfo';
import ReactFullpage from '@fullpage/react-fullpage';

//React
import {useEffect} from 'react'

// Aos Animation
import AOS from "aos";
import "aos/dist/aos.css";
import ReactWOW from 'react-wow'
const LandingPage: NextPage = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);


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
              <h1 data-aos="zoom-in" className="text-white text-3xl md:text-4xl lg:text-5xl text-center font-bold" >Get Goods Delivered To You <span className="text-green-500">Any Where Around Owerri</span></h1>

              <div className="flex justify-center mt-16">
                <input className="md:w-72 lg:w-96 rounded-md h-14 pl-4" placeholder="Input track ID"/>
                <button className="text-white bg-green-500 ml-4 py-3 px-2 sm:px-6 md:text-lg md:font-semibold rounded-md">Track Item</button>
              </div>
            </div>


            <div className="section" style={{
              backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + delivery5.src + ")",
              backgroundRepeat:'no-repeat',
              backgroundSize:'cover',
              height:'100vh'
              }}>
                {/* <div style={{height:'120vh'}}>

                </div> */}
                
              <div  >
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl text-center font-bold leading-relaxed" >We have the best dispatch riders in the city,<br/> we do not dissapoint, we deliver  at the<br/> <span className="text-green-500">right location</span> at the <span className="text-green-500" >right time</span></h1>
              </div>
            </div>

            
            <div className="section " style={{
              backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + delivery7.src + ")",
              backgroundRepeat:'no-repeat',
              backgroundSize:'cover',
              // height:'100vh'
              }}>

            
              
            {/* </ReactWOW> */}
              <div className='flex justify-between'>
                <div className="bg-green-500 w-64 h-64 ml-10">

                </div>
                <div className="bg-red-400 w-64 h-64">

                </div>
                <div className="bg-yellow-600 w-64 h-64 mr-10">

                </div>
              </div>
              
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
