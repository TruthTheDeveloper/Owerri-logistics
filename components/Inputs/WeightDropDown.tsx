import type { NextPage } from 'next';
import {useState} from 'react';
import SimpleInput from '../Inputs/SimpleInput';

interface Props{
    options: any,
}


const WeightDropDown:NextPage<Props> = ({options}) => {
    const [selected, setSelected] = useState<string>('')
    return <>
       <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
            <label className="py-2">Select Items</label>
            <select className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border" onChange={(e) => setSelected(e.target.value)}>
                <option value="" defaultValue='true' hidden className="text-sm font-normal" >
                </option>
                {options === 'other'? <SimpleInput label="input weights"/> : options.map((option:any) => 
                    <option key={option.key} value={option.value}>{option.label}</option>
                )}
            </select>
        </div>
    </>
}

export default WeightDropDown;