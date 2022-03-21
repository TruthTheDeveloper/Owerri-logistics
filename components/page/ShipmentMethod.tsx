import type {NextPage} from 'next';
import { useRouter } from 'next/router';

//React
import {useState, useEffect} from 'react';

// UI Components
import VechicleHeader from '../PageComponents/VechicleHeaders';
import Form from '../ShipmentPage/Form';
import BackButton from '../Buttons/BackButton';

// Auth context
import AuthContext from '../../context/auth-context';


const ShipmentMethod: NextPage = () => {


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

    useEffect(() => {
        // motorbike route
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

    },[receiverAddressLine1Validation, receiverAddressLine2Validation, receiverLocationValidation, receiverNameValidation, receiverPhoneNumberValidation,  senderAddressLine1Validation, senderAddressLine2Validation, senderLocationValidation, senderNameValidation, senderPhoneNumberValidation])



    
    const router = useRouter()
    const { ride } = router.query

    let rideRoute = null;

    rideRoute = Route(ride)

    const buttonHandler = () => {

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
                        <h1 className="text-sm text-center my-4">Pick up location</h1>
                    </div>
                    <div className="basis-1/3 border-t-4 border-black ">
                        <div style={{marginTop:'-1rem'}} className=" mx-auto py-1 w-8 bg-black text-white   z-10 rounded-full  text-center text-sm">2</div>
                        <h1 className="text-sm text-center my-4">Shipment details</h1>
                    </div>
                    <div className="basis-1/3 border-t-4 border-slate-200">
                        <div style={{marginTop:'-1rem'}} className=" mx-auto py-1 w-8    z-10 rounded-full bg-white border-slate-200 border-2 text-slate-400   text-center text-sm">
                            3
                        </div>
                        <h1 className="text-sm text-center my-4">Upload item</h1>
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
