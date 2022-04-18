// Next import
// import type { NextPage } from 'next';
import Head from 'next/head';

//UI Components
import Header from './HomePage/Header';
import Main from './HomePage/Main';
import ContactUs from './HomePage/ContactUs';
import Footer from './HomePage/Footer';

import deliveryImage4 from '../../public/assets/images/deliveryImage4.jpg';
import delivery5 from '../../public/assets/images/delivery5.jpg';
import delivery7 from '../../public/assets/images/delivery7.jpg';

// import TrackItem from './HomePage/TrackItem';
import MoreInfo from './HomePage/MoreInfo';
import ReactFullpage from '@fullpage/react-fullpage';

//FontAwesome
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';
import { faBiking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//React
import {useEffect, useState} from 'react'

// Aos Animation
import AOS from "aos";
import "aos/dist/aos.css";
import ReactWOW from 'react-wow'
const LandingPage= () => {

  const [trackValidation, setTrackValidation] = useState('')
  const [loading, setLoading] = useState(false)

  const [clicked, setClicked] = useState(false)

  const trackIdHandler = () => {
    setLoading(true)
    setClicked(true)
    
    


  }

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  useEffect(() => {
    if(clicked){
      setTimeout(() => {
        setLoading(false)
      }, 2000);
      loading === false && setTrackValidation('Invalid track Id')
    }
  },[loading])


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
                <input className="md:w-72 lg:w-96 rounded-md h-14 pl-4 outline-none" placeholder="Input track ID"/>
                {loading ? <button className="text-white bg-green-500 ml-4 py-3 px-2 outline-none sm:px-6 md:text-lg md:font-semibold rounded-md">Tracking...</button>:<button className="text-white bg-green-500 ml-4 py-3 px-2 outline-none sm:px-6 md:text-lg md:font-semibold rounded-md" onClick={trackIdHandler}>Track Item</button>}
              </div>
              <p className="text-red-700 text-center text-3xl">{trackValidation}</p>
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
              <div className='flex flex-col md:flex-row md:justify-between ' >
                <div className="bg-red-500 text-white w-60 h-60 md:w-64 md:h-64  mx-auto md:mx-4 lg:mx-12 shadow-xl rounded-sm my-2">
                  <p className="text-4xl text-center my-5 font-bold mt-10">550+</p>
                  <div className="h-10 mx-auto my-6 w-10"><FontAwesomeIcon icon={faReceipt}  /></div>
                  <p className="text-3xl text-center font-semibold">Daily Request</p>
                </div>
                <div className="bg-green-500 text-white w-60 h-60 md:w-64 md:h-64 mx-auto md:mx-4 lg:mx-12 shadow-xl rounded-sm my-2">
                  <p className="text-4xl text-center my-5 font-bold mt-10">5000+</p>
                  <div className="h-10 mx-auto my-4 w-10"><FontAwesomeIcon icon={faCircleCheck}  /></div>
                  <p className="text-3xl text-center font-semibold">Goods Delivered</p>
                </div>
                <div className="bg-blue-500 text-white w-60 h-60 md:w-64 md:h-64 mx-auto md:mx-4 lg:mx-12 shadow-xl rounded-sm  my-2">
                  <p className="text-4xl text-center my-4 font-bold mt-10">200+</p>
                  <div className="h-14 mx-auto my-2 w-14"><FontAwesomeIcon icon={faBiking}  /></div>
                  <p className="text-3xl text-center font-semibold">Standby Dispatcher</p>
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
