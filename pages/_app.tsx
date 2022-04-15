import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {wrapper} from '../store/index';
import AuthContext from '../context/auth-context';
import {useState} from 'react';
import Layout from '../components/Layout/Layout';




function MyApp({ Component, pageProps }: AppProps) {

  const [initialState, setInitialState] = useState({
    allItems:[],
    deliveryAddress:'',
    pickUpAddress:"",
    //=== SENDER ===//
    senderAddressLine1:"",
    senderAddressLine2:"",
    senderName:"",
    senderPhoneNumber:"",
    senderLocation:"",
    // === SENDERERROR ==//
    senderAddressLine1Error:"",
    senderAddressLine2Error:"",
    senderNameError:"",
    senderPhoneNumberError:"",
    senderLocationError:"",
    // == RECEIVER ==//
    receiverAddressLine1:"",
    receiverAddressLine2:"",
    receiverName:"",
    receiverPhoneNumber:"",
    receiverLocation:"",
    //== RECEIVER ERROR ==//
    receiverAddressLine1Error:"",
    receiverAddressLine2Error:"",
    receiverNameError:"",
    receiverPhoneNumberError:"",
    receiverLocationError:"",

    category:"",
    categoryError:"",

    item:"",
    itemError:"",

    weight:"",
    weightError:"",

    value:"",
    valueError:"",

    quantity:"",
    quantityError:"",
    
    deliveryMethod:"",
    image:""
  })


  return <AuthContext.Provider value={{initialState, setInitialState}}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AuthContext.Provider>
}

export default wrapper.withRedux(MyApp)
