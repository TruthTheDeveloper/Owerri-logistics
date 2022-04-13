import type {NextPage} from 'next';
import { useRouter } from 'next/router';

//React
import {useState, useEffect, useContext} from 'react';
import { useDispatch } from 'react-redux';

// UI Components
import VechicleHeader from '../PageComponents/VechicleHeaders';
import Form from '../ShipmentPage/Form';
import BackButton from '../Buttons/BackButton';
import * as actionTypes from '../../store/actions/ActionTypes';

// Auth context
import AuthContext from '../../context/auth-context';



const ShipmentMethod: NextPage = () => {
    const dispatch = useDispatch()
    const {initialState, setInitialState} = useContext(AuthContext);

    const router = useRouter()
    const { ride } = router.query

    //Sender validation
    const [senderAddressLine1Validation, setSenderAddressLine1Validation] = useState('')
    const [senderAddressLine2Validation, setSenderAddressLine2Validation] = useState('')
    const [senderNameValidation, setSenderNameValidation] = useState('')
    const [senderPhoneNumberValidation, setSenderPhoneNumberValidation] = useState('')
    const [senderLocationValidation, setSenderLocationValidation] = useState('')


    //Receiver validation
    const [receiverAddressLine1Validation, setReceiverAddressLine1Validation] = useState('')
    const [receiverAddressLine2Validation, setReceiverAddressLine2Validation] = useState('')
    const [receiverNameValidation, setReceiverNameValidation] = useState('')
    const [receiverPhoneNumberValidation, setReceiverPhoneNumberValidation] = useState('')
    const [receiverLocationValidation, setReceiverLocationValidation] = useState('')


    const [click, setClick] = useState(false)


    const [senderShipmentInfo, setSenderShipmentInfo] = useState({
            addressLine1:"",
            addressLine2:"",
            name:"",
            phoneNumber: "",
            location:"",
            addressLine1Error:"",
            addressLine2Error:"",
            nameError:"",
            phoneNumberError:"",
            locationError:"",
    
    })


    const [receiverShipmentInfo, setReceiverShipmentInfo] = useState({
            addressLine1:"",
            addressLine2:"",
            name:"",
            phoneNumber:"",
            location:"",
            addressLine1Error:"",
            addressLine2Error:"",
            nameError:"",
            phoneNumberError:"",
            locationError:"",

    })


    console.log()

    useEffect(() => {
        
        // motorbike route
        if(click){
            ride === 'motorbike' && senderShipmentInfo.addressLine1.length > 1 && senderShipmentInfo.addressLine2.length > 1 && senderShipmentInfo.name.length > 1 && senderShipmentInfo.phoneNumber.length >= 1 && senderShipmentInfo.location.length >= 1 && receiverShipmentInfo.addressLine1.length > 1 && receiverShipmentInfo.addressLine2.length > 1 && receiverShipmentInfo.name.length > 1 && receiverShipmentInfo.phoneNumber.length >= 1 && receiverShipmentInfo.location.length >= 1   ? 
            router.push("/select/motorbike/uploadItem") : 
            setSenderShipmentInfo({...senderShipmentInfo, addressLine1Error: senderAddressLine1Validation, addressLine2Error:senderAddressLine2Validation, nameError:senderNameValidation, phoneNumberError:senderPhoneNumberValidation, locationError:senderLocationValidation}); setReceiverShipmentInfo({...receiverShipmentInfo, addressLine1Error: receiverAddressLine1Validation, addressLine2Error:receiverAddressLine2Validation, nameError:receiverNameValidation, phoneNumberError:receiverPhoneNumberValidation, locationError:receiverLocationValidation})


            // // // car route
            ride === 'car' && senderShipmentInfo.addressLine1.length > 1 && senderShipmentInfo.addressLine2.length > 1 && senderShipmentInfo.name.length > 1 && senderShipmentInfo.phoneNumber.length >= 1 && senderShipmentInfo.location.length >= 1 && receiverShipmentInfo.addressLine1.length > 1 && receiverShipmentInfo.addressLine2.length > 1 && receiverShipmentInfo.name.length > 1 && receiverShipmentInfo.phoneNumber.length >= 1 && receiverShipmentInfo.location.length >= 1   ? 
            router.push("/select/car/uploadItem") : 
            setSenderShipmentInfo({...senderShipmentInfo, addressLine1Error: senderAddressLine1Validation, addressLine2Error:senderAddressLine2Validation, nameError:senderNameValidation, phoneNumberError:senderPhoneNumberValidation, locationError:senderLocationValidation}); setReceiverShipmentInfo({...receiverShipmentInfo, addressLine1Error: receiverAddressLine1Validation, addressLine2Error:receiverAddressLine2Validation, nameError:receiverNameValidation, phoneNumberError:receiverPhoneNumberValidation, locationError:receiverLocationValidation})


                // // // // van route
            ride === 'van' && senderShipmentInfo.addressLine1.length > 1 && senderShipmentInfo.addressLine2.length > 1 && senderShipmentInfo.name.length > 1 && senderShipmentInfo.phoneNumber.length >= 1 && senderShipmentInfo.location.length >= 1 && receiverShipmentInfo.addressLine1.length > 1 && receiverShipmentInfo.addressLine2.length > 1 && receiverShipmentInfo.name.length > 1 && receiverShipmentInfo.phoneNumber.length >= 1 && receiverShipmentInfo.location.length >= 1   ? 
            router.push("/select/van/uploadItem") : 
            setSenderShipmentInfo({...senderShipmentInfo, addressLine1Error: senderAddressLine1Validation, addressLine2Error:senderAddressLine2Validation, nameError:senderNameValidation, phoneNumberError:senderPhoneNumberValidation, locationError:senderLocationValidation}); setReceiverShipmentInfo({...receiverShipmentInfo, addressLine1Error: receiverAddressLine1Validation, addressLine2Error:receiverAddressLine2Validation, nameError:receiverNameValidation, phoneNumberError:receiverPhoneNumberValidation, locationError:receiverLocationValidation})


            //  // // // track route
            ride === 'truck' && senderShipmentInfo.addressLine1.length > 1 && senderShipmentInfo.addressLine2.length > 1 && senderShipmentInfo.name.length > 1 && senderShipmentInfo.phoneNumber.length >= 1 && senderShipmentInfo.location.length >= 1 && receiverShipmentInfo.addressLine1.length > 1 && receiverShipmentInfo.addressLine2.length > 1 && receiverShipmentInfo.name.length > 1 && receiverShipmentInfo.phoneNumber.length >= 1 && receiverShipmentInfo.location.length >= 1   ? 
            router.push("/select/truck/uploadItem") : 
            setSenderShipmentInfo({...senderShipmentInfo, addressLine1Error: senderAddressLine1Validation, addressLine2Error:senderAddressLine2Validation, nameError:senderNameValidation, phoneNumberError:senderPhoneNumberValidation, locationError:senderLocationValidation}); setReceiverShipmentInfo({...receiverShipmentInfo, addressLine1Error: receiverAddressLine1Validation, addressLine2Error:receiverAddressLine2Validation, nameError:receiverNameValidation, phoneNumberError:receiverPhoneNumberValidation, locationError:receiverLocationValidation})
        }
        

    },[receiverAddressLine1Validation, receiverAddressLine2Validation, receiverLocationValidation, receiverNameValidation, receiverPhoneNumberValidation,  senderAddressLine1Validation, senderAddressLine2Validation, senderLocationValidation, senderNameValidation, senderPhoneNumberValidation, router, click])



    
    


    const buttonHandler = () => {

        // console.log(senderShipmentInfo.addressLine1.length, senderShipmentInfo.addressLine2.length, senderShipmentInfo.name.length, senderShipmentInfo.phoneNumber.length, senderShipmentInfo.location.length, receiverShipmentInfo.addressLine1.length, receiverShipmentInfo.addressLine2.length, receiverShipmentInfo.name.length, receiverShipmentInfo.phoneNumber.length, receiverShipmentInfo.location.length, 'kdjkdjkd' )

        setClick(true)

        //sender validation check
        senderShipmentInfo.addressLine1.length < 1 ? setSenderAddressLine1Validation("Please enter this address"):
        setSenderAddressLine1Validation("")

        senderShipmentInfo.addressLine2.length < 1  ? setSenderAddressLine2Validation("Please enter this address"):
        setSenderAddressLine2Validation("")

        senderShipmentInfo.name.length < 1  ? setSenderNameValidation("Please enter name"):
        setSenderNameValidation("")

        senderShipmentInfo.location.length < 1  ? setSenderLocationValidation("Please enter Location"):
        setSenderLocationValidation("")

        senderShipmentInfo.phoneNumber.length < 1 ? setSenderPhoneNumberValidation("Please enter phoneNumber"):
        setSenderPhoneNumberValidation("")


        //Receiver validation check
        receiverShipmentInfo.addressLine1.length < 1 ? setReceiverAddressLine1Validation("Please enter this address"):
        setReceiverAddressLine1Validation("")

        receiverShipmentInfo.addressLine2.length < 1  ? setReceiverAddressLine2Validation("Please enter this address"):
        setReceiverAddressLine2Validation("")

        receiverShipmentInfo.name.length < 1  ? setReceiverNameValidation("Please enter name"):
        setReceiverNameValidation("")

        receiverShipmentInfo.location.length < 1  ? setReceiverLocationValidation("Please enter Location"):
        setReceiverLocationValidation("")

        receiverShipmentInfo.phoneNumber.length < 1 ? setReceiverPhoneNumberValidation("Please enter phoneNumber"):
        setSenderPhoneNumberValidation("")

        dispatch({type:actionTypes.RECEIVER_ADDRESS_LINE1, receiverAddressline1:receiverShipmentInfo.addressLine1})
        dispatch({type:actionTypes.RECEIVER_ADDRESS_LINE2, receiverAddressline2:receiverShipmentInfo.addressLine2})
        dispatch({type:actionTypes.RECEIVER_NAME, receiverName:receiverShipmentInfo.name})
        dispatch({type:actionTypes.RECEIVER_LOCATION, receiverLocation:receiverShipmentInfo.location})
        dispatch({type:actionTypes.RECEIVER_PHONENUMBER, receiverPhoneNumber:receiverShipmentInfo.phoneNumber})


        dispatch({type:actionTypes.SENDER_ADDRESS_LINE1, senderAddressline1:senderShipmentInfo.addressLine1})
        dispatch({type:actionTypes.SENDER_ADDRESS_LINE2, senderAddressline2:senderShipmentInfo.addressLine2})
        dispatch({type:actionTypes.SENDER_NAME, senderName:senderShipmentInfo.name})
        dispatch({type:actionTypes.SENDER_LOCATION, senderLocation:senderShipmentInfo.location})
        dispatch({type:actionTypes.SENDER_PHONENUMBER, senderPhoneNumber:senderShipmentInfo.phoneNumber})

        setInitialState({...initialState, senderAddressLine1:senderShipmentInfo.addressLine1, senderAddressLine2:senderShipmentInfo.addressLine2, senderName:senderShipmentInfo.name, senderPhoneNumber:senderShipmentInfo.phoneNumber, senderLocation:senderShipmentInfo.location,receiverAddressLine1:receiverShipmentInfo.addressLine1, receiverAddressLine2:receiverShipmentInfo.addressLine2, receiverName:receiverShipmentInfo.name, receiverPhoneNumber:receiverShipmentInfo.phoneNumber, receiverLocation:receiverShipmentInfo.location})

    }

    return (
        <div style={{background:'#F3F4F6'}} className="overflow-hidden">
            <VechicleHeader/>

            <div className="bg-white mx-8 sm:mx-16 md:mx-24 lg:mx-36 xl:mx-44 2x:56 my-8 shadow-lg pt-16">
                <div className="flex px-8 sm:px-24">
                    <div className="basis-1/3">
                        <div className="border-t-4 border-black">
                            <div style={{marginTop:'-1rem'}} className=" mx-auto py-1 w-8 bg-black text-white   rounded-full  text-center text-sm">1</div>
                        </div>
                        <h1 className="text-sm lg:text-lg  text-center my-4">Pick up location</h1>
                    </div>
                    <div className="basis-1/3 border-t-4 border-black ">
                        <div style={{marginTop:'-1rem'}} className=" mx-auto py-1 w-8 bg-black text-white   z-10 rounded-full  text-center text-sm">2</div>
                        <h1 className="text-sm lg:text-lg text-center my-4">Shipment details</h1>
                    </div>
                    <div className="basis-1/3 border-t-4 border-slate-200">
                        <div style={{marginTop:'-1rem'}} className=" mx-auto py-1 w-8    z-10 rounded-full bg-white border-slate-200 border-2 text-slate-400   text-center text-sm">
                            3
                        </div>
                        <h1 className="text-sm lg:text-lg text-center my-4">Upload item</h1>
                    </div>
                </div>
                <div className="sm:mx-16 md:mx-24 lg:mx-32 xl:mx-44 2xl:56">

                   <AuthContext.Provider value={[{senderShipmentInfo, setSenderShipmentInfo}, {receiverShipmentInfo, setReceiverShipmentInfo}]} >
                        <Form formType="Sender"/>
                        <Form formType="Receiver"/>
                    </AuthContext.Provider>

                    <div className="flex justify-center">
                            <BackButton/>
                            <div className="pb-8 mx-4">
                                <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2" onClick={buttonHandler}>Next</button>
                            </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ShipmentMethod;
