import type { NextPage } from 'next';
import {useContext, useEffect, useState} from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import AuthContext from '../../context/auth-context';

interface Props{
    value:string,
    error:string,
    onChange:any
    
}

const PhoneNumberInput:NextPage<Props> = ({valu, error, onChange}) => {

    const [senderInfo ,receiverInfo ] = useContext(AuthContext)

    const {senderShipmentInfo, setSenderShipmentInfo} = senderInfo;

    const {receiverShipmentInfo, setReceiverShipmentInfo} = receiverInfo;
    const [value, setValue] = useState<any>(undefined)

    useEffect(() => {
        formType === "Sender" ? setSenderShipmentInfo({...senderShipmentInfo, phoneNumber:value, phoneNumberError:""}) : setReceiverShipmentInfo({...receiverShipmentInfo, phoneNumber:value, phoneNumberError:""})
    },[])
    return <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                <label className="py-2">Phone Number</label>
                <PhoneInput
                placeholder="Enter phone number"
                country="Nigeria"
                value={value}
                onChange={onChange}
                className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border"
                />
                <p className="text-red-500">{error}</p>
            </div>
}

export default PhoneNumberInput;