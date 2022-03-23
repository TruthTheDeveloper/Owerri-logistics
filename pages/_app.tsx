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
    senderAddressLine1:"",
    senderAddressLine2:"",
    senderName:"",
    senderPhoneNumber:"",
    senderLocation:"",
    receiverAddressLine1:"",
    receiverAddressLine2:"",
    receiverName:"",
    receiverPhoneNumber:"",
    receiverLocation:"",
    category:"",
    item:"",
    weight:"",
    value:"",
    quantity:"",
    deliveryMethod:""
  })


  return <AuthContext.Provider value={{initialState, setInitialState}}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AuthContext.Provider>
}

export default wrapper.withRedux(MyApp)
