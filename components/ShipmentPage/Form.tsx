import type {NextPage} from 'next';

//React
import {useContext, useState, useEffect} from 'react';
import AuthContext from '../../context/auth-context';
import AddressInput from '../../components/Inputs/AddressInput';
import Inputs from '../Inputs/Inputs';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

interface Props{
    formType: string,
}

const Form: NextPage<Props> = ({formType}) => {

    const [senderInfo ,receiverInfo ] = useContext(AuthContext)

    const {senderShipmentInfo, setSenderShipmentInfo} = senderInfo;

    const {receiverShipmentInfo, setReceiverShipmentInfo} = receiverInfo;
    const [senderPhoneNumbervalue, setPhoneNumberValue] = useState<any>(undefined || '')
    const [receiverPhoneNumberValue, setReceiverPhoneNumberValue] = useState<any>(undefined || '')


    useEffect(() => {
        formType === "Sender" ? setSenderShipmentInfo({...senderShipmentInfo, phoneNumber:senderPhoneNumbervalue, phoneNumberError:""}) : setReceiverShipmentInfo({...receiverShipmentInfo, phoneNumber:receiverPhoneNumberValue, phoneNumberError:""})
    },[senderPhoneNumbervalue, receiverPhoneNumberValue])



    const firstAddressInputHandler = (e: { target: { value: string; }; }) => {

        formType === "Sender" ? setSenderShipmentInfo({...senderShipmentInfo, addressLine1:e.target.value, addressLine1Error:""}) : setReceiverShipmentInfo({...receiverShipmentInfo, addressLine1:e.target.value, addressLine1Error:""})

        
    }

    const secondAddressInputHandler = (e: { target: { value: string; }; }) => {

        formType === "Sender" ? setSenderShipmentInfo({...senderShipmentInfo, addressLine2:e.target.value, addressLine2Error:""}) : setReceiverShipmentInfo({...receiverShipmentInfo, addressLine2:e.target.value, addressLine2Error:""})
        
        
    }

    const nameInputHandler = (e: { target: { value: string; }; }) => {

        formType === "Sender" ? setSenderShipmentInfo({...senderShipmentInfo, name:e.target.value, nameError:""}) : setReceiverShipmentInfo({...receiverShipmentInfo, name:e.target.value, nameError:""})
        
    }

    const phoneNumberInputHandler = (e: { target: { value: string; }; }) => {
        
    }

    const locationInputhandler = (e: { target: { value: string; }; }) => {

        formType === "Sender" ? setSenderShipmentInfo({...senderShipmentInfo, location:e.target.value, locationError:""}) : setReceiverShipmentInfo({...receiverShipmentInfo, location:e.target.value, locationError:""})
        
    }





    return (
        <>{
            formType === "Sender" ? <div className="mx-4 my-6">
            <div className="text-center py-3 bg-slate-200 shadow-sm lg:mx-14 xl:mx-24 2xl:mx-36"><h1>{formType}</h1></div>
            <div className=" mx-4 my-2">
                
                <AddressInput label="Address Line 1" value={senderShipmentInfo.addressLine1} error={senderShipmentInfo.addressLine1Error} onChange={firstAddressInputHandler}/>
                <AddressInput label="Address Line 2"  value={senderShipmentInfo.addressLine2} error={senderShipmentInfo.addressLine2Error} onChange={secondAddressInputHandler} />

                <Inputs label="Name" value={senderShipmentInfo.name} error={senderShipmentInfo.nameError} onChange={nameInputHandler}/>
                <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                    <label className="py-2">Phone Number</label>
                    <PhoneInput
                    placeholder="Enter phone number"
                    value={senderPhoneNumbervalue}
                    onChange={setPhoneNumberValue}
                    className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border"
                    />
                    <p className="text-red-500">{senderShipmentInfo.phoneNumberError}</p>
                </div>
                <Inputs label="Location" value={senderShipmentInfo.location} error={senderShipmentInfo.locationError} onChange={locationInputhandler}/>
            </div>
        </div>:<div className="mx-4 my-6">
            <div className="text-center py-3 bg-slate-200 shadow-sm lg:mx-14 xl:mx-24 2xl:mx-36"><h1>{formType}</h1></div>
            <div className=" mx-4 my-2">
                
                <AddressInput label="Address Line 1" value={receiverShipmentInfo.addressLine1} error={receiverShipmentInfo.addressLine1Error} onChange={(e) => firstAddressInputHandler(e)}/>
                <AddressInput label="Address Line 2"  value={receiverShipmentInfo.addressLine2} error={receiverShipmentInfo.addressLine2Error} onChange={(e) => secondAddressInputHandler(e)} />

                <Inputs label="Name" value={receiverShipmentInfo.name} error={receiverShipmentInfo.nameError} onChange={nameInputHandler}/>
                <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                    <label className="py-2">Phone Number</label>
                    <PhoneInput
                    placeholder="Enter phone number"
                    value={receiverPhoneNumberValue}
                    onChange={setReceiverPhoneNumberValue}
                    className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border"
                    />
                    <p className="text-red-500">{receiverShipmentInfo.phoneNumberError}</p>
                </div>
                <Inputs label="Location" value={receiverShipmentInfo.location} error={receiverShipmentInfo.locationError} onChange={locationInputhandler}/>
            </div>
        </div>
        }</>
    )
}

export default Form
