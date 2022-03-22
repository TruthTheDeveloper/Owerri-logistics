import type { NextPage } from 'next';
import LandingPage from '../components/page/LandingPage';
import AuthContext from '../context/auth-context';
import {useState} from 'react';

const Home: NextPage = () => {

  const [deliveryDetail, setDeliveryDetail] = useState({
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
    cattegory:"",
    item:"",
    weight:"",
    value:"",
    quantity:""
  })
  return (
    <AuthContext.Provider value={{deliveryDetail, setDeliveryDetail}}>
      <LandingPage/>
    </AuthContext.Provider>
  )
}

export default Home;
