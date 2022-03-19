import type { NextPage } from 'next';
import {useState} from 'react';
import SimpleInput from '../Inputs/SimpleInput';
import WeightDropDown from '../Inputs/WeightDropDown';
import DefaultDropDown from './DefaultDropDown';

interface Props{
    options: any,
    index:string,
}

const DropDownInput:NextPage<Props> = ({options, index}) => {

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
            key:2,
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
            key:2,
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

    if(index === "Clothing/Shoes"){
        weightDropDown =   <WeightDropDown options={clothing} />
    }else if(index === "Computer/Acessories"){
        weightDropDown = <WeightDropDown options={computer} />
    }else if(index === "Document"){
        weightDropDown = <WeightDropDown options={document} />
    }else if(index === "Food"){
        weightDropDown = <WeightDropDown options={food} />
    }else if(index === "Electronics"){
        weightDropDown = <WeightDropDown options={electronics} />
    }else if(index === "Health"){
        weightDropDown = <WeightDropDown options={health} />
    }else if(index === "Phones"){
        weightDropDown = <WeightDropDown options={phones} />
    }else if(index === "other"){
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
    </>
}

export default DropDownInput;