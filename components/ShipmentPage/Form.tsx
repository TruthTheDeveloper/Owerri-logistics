import type {NextPage} from 'next';
import {useState} from 'react'
import AddressInput from '../../components/Inputs/AddressInput';
import SimpleInput from '../../components/Inputs/SimpleInput';
import PhoneNumberInput from '../../components/Inputs/PhoneNumberInput';

interface Props{
    formType: string,
}

const Form: NextPage<Props> = ({formType}) => {

    return (
        <div className="mx-4 my-6">
            <div className="text-center py-3 bg-slate-200 shadow-sm lg:mx-14 xl:mx-24 2xl:mx-36"><h1>{formType}</h1></div>
            <div className=" mx-4 my-2">
                
                <AddressInput label="Address Line 1"/>
                <AddressInput label="Address Line 2"/>
                <SimpleInput label="Name"/>
                <PhoneNumberInput/>
                <SimpleInput label="Location"/>
            </div>
        </div>
    )
}

export default Form
