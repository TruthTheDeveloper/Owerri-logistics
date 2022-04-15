import type {NextPage} from 'next';

//React
import {useContext, useState, useEffect} from 'react';
import AuthContext from '../../context/auth-context';
import AddressInput from '../../components/Inputs/AddressInput';

//componenets
import Inputs from '../Inputs/Inputs';

//Third party
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

interface Props{
    formType: string,
}

const Form: NextPage<Props> = ({formType}) => {

    const {initialState, setInitialState} = useContext(AuthContext);

    // const {initialState, initialState} = senderInfo;
    // const {receiverShipmentInfo, setReceiverShipmentInfo} = receiverInfo;

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

    //phone Number value
    const [senderPhoneNumbervalue, setPhoneNumberValue] = useState<any>(undefined || '')
    const [receiverPhoneNumberValue, setReceiverPhoneNumberValue] = useState<any>(undefined || '')


    useEffect(() => {
        formType === "Sender" ? setInitialState({...initialState, senderPhoneNumber:senderPhoneNumbervalue, senderPhoneNumberError:""}) : setInitialState({...initialState, receiverPhoneNumber:receiverPhoneNumberValue, receiverPhoneNumberError:""})
    },[senderPhoneNumbervalue, receiverPhoneNumberValue])



    // input handler functions


    const firstAddressInputHandler = (e: { target: { value: string; }; }) => {

        formType === "Sender" ? setInitialState({...initialState, senderAddressLine1:e.target.value, senderAddressLine1Error:""}) : setInitialState({...initialState, receiverAddressLine1:e.target.value, receiverAddressLine1Error:""})

        
    }

    const secondAddressInputHandler = (e: { target: { value: string; }; }) => {

        formType === "Sender" ? setInitialState({...initialState, senderAddressLine2:e.target.value, senderAddressLine2Error:""}) : setInitialState({...initialState, receiverAddressLine2:e.target.value, receiverAddressLine2Error:""})
        
        
    }

    const nameInputHandler = (e: { target: { value: string; }; }) => {

        formType === "Sender" ? setInitialState({...initialState, senderName:e.target.value, senderNameError:""}) : setInitialState({...initialState, receiverName:e.target.value, receiverNameError:""})
        
    }


    const locationInputhandler = (e: { target: { value: string; }; }) => {

        formType === "Sender" ? setInitialState({...initialState, senderLocation:e.target.value, senderLocationError:""}) : setInitialState({...initialState, receiverLocation:e.target.value, receiverLocationError:""})
        
    }





    return (
        <>{
            formType === "Sender" ? <div className="mx-4 my-6">
            <div className="text-center py-3 bg-slate-200 shadow-sm lg:mx-14 xl:mx-24 2xl:mx-36"><h1>{formType}</h1></div>
            <div className=" mx-4 my-2">
                
                <AddressInput label="Address Line 1" value={initialState.senderAddressLine1} error={initialState.senderAddressLine1Error} onChange={firstAddressInputHandler}/>
                <AddressInput label="Address Line 2"  value={initialState.senderAddressLine2} error={initialState.senderAddressLine2Error} onChange={secondAddressInputHandler} />

                <Inputs label="Name" value={initialState.senderName} error={initialState.senderNameError} onChange={nameInputHandler}/>
                <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                    <label className="py-2">Phone Number</label>
                    <PhoneInput
                    placeholder="Enter phone number"
                    value={senderPhoneNumbervalue}
                    onChange={setPhoneNumberValue}
                    className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border"
                    />
                    <p className="text-red-500">{initialState.senderPhoneNumberError}</p>
                </div>
                <Inputs label="Location" value={initialState.senderLocation} error={initialState.senderLocationError} onChange={locationInputhandler}/>
            </div>
        </div>:<div className="mx-4 my-6">
            <div className="text-center py-3 bg-slate-200 shadow-sm lg:mx-14 xl:mx-24 2xl:mx-36"><h1>{formType}</h1></div>
            <div className=" mx-4 my-2">
                
                <AddressInput label="Address Line 1" value={initialState.receiverAddressLine1} error={initialState.receiverAddressLine1Error} onChange={(e) => firstAddressInputHandler(e)}/>
                <AddressInput label="Address Line 2"  value={initialState.receiverAddressLine2Error} error={initialState.addressLine2Error} onChange={(e) => secondAddressInputHandler(e)} />

                <Inputs label="Name" value={initialState.receiverName} error={initialState.receiverNameError} onChange={nameInputHandler}/>
                <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                    <label className="py-2">Phone Number</label>
                    <PhoneInput
                    placeholder="Enter phone number"
                    value={receiverPhoneNumberValue}
                    onChange={setReceiverPhoneNumberValue}
                    className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border"
                    />
                    <p className="text-red-500">{initialState.receiverPhoneNumberError}</p>
                </div>
                <Inputs label="Location" value={initialState.receiverLocation} error={initialState.receiverLocationError} onChange={locationInputhandler}/>
            </div>
        </div>
        }</>
    )
}

export default Form
