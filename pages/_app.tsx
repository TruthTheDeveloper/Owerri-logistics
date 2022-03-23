import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider} from 'react-redux';
import {store} from '../store/index';
import {wrapper} from '../store/index';
import AuthContext from '../context/auth-context';
import {useState} from 'react';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



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
    <Component {...pageProps} />
  </AuthContext.Provider>
}

export default wrapper.withRedux(MyApp)
