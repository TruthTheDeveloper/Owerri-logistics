import type { NextPage } from 'next';
import {useState} from 'react'
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const PhoneNumberInput:NextPage = () => {
    const [value, setValue] = useState<any>(undefined)
    return <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                <label className="py-2">Phone Number</label>
                <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
                className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border"
                />
            </div>
}

export default PhoneNumberInput;