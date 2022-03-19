import type { NextPage } from 'next';
import {useState} from 'react';
import SimpleInput from '../Inputs/SimpleInput';
import WeightDropDown from '../Inputs/WeightDropDown';
import DefaultDropDown from './DefaultDropDown';

interface Props{
    options: any,
}

const DropDownInput:NextPage<Props> = ({options}) => {

    const [selected, setSelected] = useState<string>('')

    const clothing = [
        {
            key:1,
            label:'0.5kg',
            value:'0.5kg',
        },

    ]


    const phones = [
        {
            key:1,
            label:"1kg",
            value:"1kg"
        },

        {
            key:2,
            label:"1.5kg",
            value:"1.5kg"
        },

    ]


    const food = [
        {
            key:1,
            label:"1kg",
            value:"1kg"
        },

        {
            key:2,
            label:"2kg",
            value:"2kg"
        },

        {
            key:3,
            label:"3kg",
            value:"3kg"
        },

    ]


    const health = [
        {
            key:1,
            label:"0.1kg",
            value:"0.1kg"
        },

    ]

    const electronics = [
        {
            key:1,
            label:"2kg",
            value:"2kg"
        },
        {
            key:1,
            label:"3kg",
            value:"3kg"
        },
    ]


    const computer = [
        {
            key:1,
            label:"2kg",
            value:"2kg"
        },
        {
            key:1,
            label:"3kg",
            value:"3kg"
        },
    ]


    const document = [
        {
            key:1,
            label:"0.1kg",
            value:"0.1kg"
        },
    ]

      
    let weightDropDown = <DefaultDropDown label="Select Weight"/>;

    if(selected === "Clothing/Shoes"){
        weightDropDown =   <WeightDropDown options={clothing} />
    }else if(selected === "Computer/Acessories"){
        weightDropDown = <WeightDropDown options={computer} />
    }else if(selected === "Document"){
        weightDropDown = <WeightDropDown options={document} />
    }else if(selected === "Food"){
        weightDropDown = <WeightDropDown options={food} />
    }else if(selected === "Electronics"){
        weightDropDown = <WeightDropDown options={electronics} />
    }else if(selected === "Health"){
        weightDropDown = <WeightDropDown options={health} />
    }else if(selected === "Phones"){
        weightDropDown = <WeightDropDown options={phones} />
    }else if(selected === "other"){
        weightDropDown = <WeightDropDown options={'other'}/>
    }
    return <>
        <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
            <label className="py-2">Select Items</label>
            <select className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border" onChange={(e) => setSelected(e.target.value)}>
                <option value="" defaultValue='true' hidden className="text-sm font-normal" >
                </option>
                {options === 'other'? <SimpleInput label="input item"/> : options.map((option:any) => 
                    <option key={option.key} value={option.value}>{option.label}</option>
                )}
            </select>
        </div>
        {weightDropDown}
        {/* <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
            <label className="py-2">{label}</label>
            <select className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border">
                <option value="" defaultValue='true' hidden className="text-sm font-normal" >
                </option>
                {options.map((option) => {
                    <option value={option.value}>{option.label}</option>
                })}
            </select>
        </div> */}
    </>
}

export default DropDownInput;