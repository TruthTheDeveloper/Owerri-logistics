import type {NextPage} from 'next';

import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';




//UI components
import VechicleHeader from '../PageComponents/VechicleHeaders';
import DeliverySummary from '../UI/components/DeliverySummary';
import PricingSummary from '../UI/components/PricingSummary';
import AddressInput from '../Inputs/AddressInput';
import BackButton from '../Buttons/BackButton';
import Inputs from '../Inputs/Inputs';
import { string } from 'prop-types';



interface Props{
    props:any
}

const ReviewItem:NextPage<Props> = (props) => {

    const config = {
        public_key: 'FLWPUBK-d2542a2ff7622c1994ace0b074b9a6ea-X',
        tx_ref: String(Date.now()),
        amount: 5000,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: 'user@gmail.com',
            phonenumber: '07064586146',
            name: 'joel ugwumadu',
        },
        customizations: {
            title: 'pay for item delivery',
            description: 'Payment for items in cart',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };

      
    const handleFlutterPayment = useFlutterwave(config);
    return (
        <>
        <div style={{background:'#F3F4F6'}} className="overflow-hidden">
            <VechicleHeader/>
            <div className="bg-white mx-8 sm:mx-16 md:mx-24 lg:mx-36 xl:mx-44 2x:56 my-8 shadow-lg pt-16">
                <div className="flex px-8 sm:px-24">
                    <div className="basis-1/3">
                        <div className="border-t-4 border-black">
                            <div style={{marginTop:'-1rem'}} className=" mx-auto py-1 w-8 bg-black text-white   rounded-full  text-center text-sm">1</div>
                        </div>
                        <h1 className="text-sm lg:text-lg text-center my-4">Pick up location</h1>
                    </div>
                    <div className="basis-1/3 border-t-4 border-black ">
                        <div style={{marginTop:'-1rem'}} className=" mx-auto py-1 w-8 bg-black text-white   z-10 rounded-full  text-center text-sm">2</div>
                        <h1 className="text-sm lg:text-lg text-center my-4">Shipment details</h1>
                    </div>
                    <div className="basis-1/3 border-t-4 border-black">
                        <div style={{marginTop:'-1rem'}} className=" mx-auto py-1 w-8    z-10 rounded-full bg-black text-white text-center text-sm">
                            3
                        </div>
                        <h1 className="text-sm lg:text-lg text-center my-4">Upload item</h1>
                    </div>
                </div>
                <div className="sm:mx-16 md:mx-24 lg:mx-32 xl:mx-44 2xl:56">
                    <div className="mx-4 my-6 pb-10">
                        <div className="text-center py-3 bg-slate-200 shadow-sm lg:mx-14 xl:mx-24 2xl:mx-36">
                            <h1>Content Details</h1>
                        </div>
                        <div className=" mx-4 my-2">
                            <AddressInput label="Pick Up Address" value={props.props.result[0].pickUpAddress} error={''} onChange={() => null} />
                            <AddressInput label="Delivery Address" value={props.props.result[0].deliveryAddress} error={''}  onChange={() => null}/>
                            <Inputs label="Sender Name" value={props.props.result[0].senderName} error={''}  onChange={() => null}/>
                            <Inputs label="Receiver Name" value={props.props.result[0].receiverName} error={''} onChange={() => null}/>
                        </div>
                        <DeliverySummary item={props.props.result[0].category} weight={props.props.result[0].weight} quantity={props.props.result[0].quantity}/>
                        <PricingSummary value={props.props.result[0].value}/> 
                    </div>
                    
                    <div className="flex justify-center">
                            <BackButton/>
                        <div className="pb-8 mx-4">
                            <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2" onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}>pay</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}




export default ReviewItem;

