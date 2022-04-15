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
            ride === 'motorbike' && initialState.senderAddressLine1.length > 1 && initialState.senderAddressLine2.length > 1 && initialState.senderName.length > 1 && initialState.senderPhoneNumber.length >= 1 && initialState.senderLocation.length >= 1 && initialState.receiverAddressLine1.length > 1 && initialState.receiverPhoneNumber.length > 1 && initialState.receiverName.length > 1 && initialState.receiverPhoneNumber.length >= 1 && initialState.receiverLocation.length >= 1   ? 
            router.push("/select/motorbike/uploadItem") : 
            setInitialState({...initialState, senderAddressLine1Error: senderAddressLine1Validation, senderAddressLine2Error:senderAddressLine2Validation, senderNameError:senderNameValidation, senderPhoneNumberError:senderPhoneNumberValidation, senderLocationError:senderLocationValidation,receiverAddressLine1Error: receiverAddressLine1Validation, receiverAddressLine2Error:receiverAddressLine2Validation, receiverNameError:receiverNameValidation, receiverPhoneNumberError:receiverPhoneNumberValidation, receiverLocationError:receiverLocationValidation});

            // // // car route
            ride === 'car' && initialState.senderAddressLine1.length > 1 && initialState.senderAddressLine2.length > 1 && initialState.senderName.length > 1 && initialState.senderPhoneNumber.length >= 1 && initialState.senderLocation.length >= 1 && initialState.receiverAddressLine1.length > 1 && initialState.receiverPhoneNumber.length > 1 && initialState.receiverName.length > 1 && initialState.receiverPhoneNumber.length >= 1 && initialState.receiverLocation.length >= 1   ?
            router.push("/select/car/uploadItem") : 
            setInitialState({...initialState, senderAddressLine1Error: senderAddressLine1Validation, senderAddressLine2Error:senderAddressLine2Validation, senderNameError:senderNameValidation, senderPhoneNumberError:senderPhoneNumberValidation, senderLocationError:senderLocationValidation,receiverAddressLine1Error: receiverAddressLine1Validation, receiverAddressLine2Error:receiverAddressLine2Validation, receiverNameError:receiverNameValidation, receiverPhoneNumberError:receiverPhoneNumberValidation, receiverLocationError:receiverLocationValidation});


                // // // // van route
            ride === 'van' && initialState.senderAddressLine1.length > 1 && initialState.senderAddressLine2.length > 1 && initialState.senderName.length > 1 && initialState.senderPhoneNumber.length >= 1 && initialState.senderLocation.length >= 1 && initialState.receiverAddressLine1.length > 1 && initialState.receiverPhoneNumber.length > 1 && initialState.receiverName.length > 1 && initialState.receiverPhoneNumber.length >= 1 && initialState.receiverLocation.length >= 1   ?
            router.push("/select/van/uploadItem") : 
            setInitialState({...initialState, senderAddressLine1Error: senderAddressLine1Validation, senderAddressLine2Error:senderAddressLine2Validation, senderNameError:senderNameValidation, senderPhoneNumberError:senderPhoneNumberValidation, senderLocationError:senderLocationValidation,receiverAddressLine1Error: receiverAddressLine1Validation, receiverAddressLine2Error:receiverAddressLine2Validation, receiverNameError:receiverNameValidation, receiverPhoneNumberError:receiverPhoneNumberValidation, receiverLocationError:receiverLocationValidation});


            //  // // // track route
            ride === 'truck' && initialState.senderAddressLine1.length > 1 && initialState.senderAddressLine2.length > 1 && initialState.senderName.length > 1 && initialState.senderPhoneNumber.length >= 1 && initialState.senderLocation.length >= 1 && initialState.receiverAddressLine1.length > 1 && initialState.receiverPhoneNumber.length > 1 && initialState.receiverName.length > 1 && initialState.receiverPhoneNumber.length >= 1 && initialState.receiverLocation.length >= 1   ?
            router.push("/select/truck/uploadItem") : 
            setInitialState({...initialState, senderAddressLine1Error: senderAddressLine1Validation, senderAddressLine2Error:senderAddressLine2Validation, senderNameError:senderNameValidation, senderPhoneNumberError:senderPhoneNumberValidation, senderLocationError:senderLocationValidation,receiverAddressLine1Error: receiverAddressLine1Validation, receiverAddressLine2Error:receiverAddressLine2Validation, receiverNameError:receiverNameValidation, receiverPhoneNumberError:receiverPhoneNumberValidation, receiverLocationError:receiverLocationValidation});
        }
        

    },[receiverAddressLine1Validation, receiverAddressLine2Validation, receiverLocationValidation, receiverNameValidation, receiverPhoneNumberValidation,  senderAddressLine1Validation, senderAddressLine2Validation, senderLocationValidation, senderNameValidation, senderPhoneNumberValidation, router, click])



    
    


    const buttonHandler = () => {
        console.log(initialState.senderAddressLine1, 'address line')
        setClick(true)

        //sender validation check
        initialState.senderAddressLine1.length < 1 ? setSenderAddressLine1Validation("Please enter this address"):
        setSenderAddressLine1Validation("")

        initialState.senderAddressLine2.length < 1  ? setSenderAddressLine2Validation("Please enter this address"):
        setSenderAddressLine2Validation("")

        initialState.senderName.length < 1  ? setSenderNameValidation("Please enter name"):
        setSenderNameValidation("")

        initialState.senderLocation.length < 1  ? setSenderLocationValidation("Please enter Location"):
        setSenderLocationValidation("")

        initialState.senderPhoneNumber.length < 1 ? setSenderPhoneNumberValidation("Please enter phoneNumber"):
        setSenderPhoneNumberValidation("")


        //Receiver validation check
        initialState.receiverAddressLine1.length < 1 ? setReceiverAddressLine1Validation("Please enter this address"):
        setReceiverAddressLine1Validation("")

        initialState.receiverAddressLine2.length < 1  ? setReceiverAddressLine2Validation("Please enter this address"):
        setReceiverAddressLine2Validation("")

        initialState.receiverName.length < 1  ? setReceiverNameValidation("Please enter name"):
        setReceiverNameValidation("")

        initialState.receiverLocation.length < 1  ? setReceiverLocationValidation("Please enter Location"):
        setReceiverLocationValidation("")

        initialState.receiverPhoneNumber.length < 1 ? setReceiverPhoneNumberValidation("Please enter phoneNumber"):
        setSenderPhoneNumberValidation("")


        setInitialState({...initialState, senderAddressLine1:initialState.senderAddressLine1, senderAddressLine2:initialState.senderAddressLine2, senderName:initialState.senderName, senderPhoneNumber:initialState.senderPhoneNumber, senderLocation:initialState.senderLocation,receiverAddressLine1:initialState.receiverAddressLine1, receiverAddressLine2:initialState.receiverAddressLine2, receiverName:initialState.receiverName, receiverPhoneNumber:initialState.receiverPhoneNumber, receiverLocation:initialState.receiverLocation})

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

                        <Form formType="Sender"/>
                        <Form formType="Receiver"/>

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
