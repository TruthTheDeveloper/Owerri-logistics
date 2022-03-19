import type { NextPage } from 'next';
import {useState} from 'react';

interface Props{
    options: Array<object>,
}

const DropDownInput:NextPage<Props> = ({options}) => {

    const [selected, setSelected] = useState<string>('')

      

    return <>
        <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
            <label className="py-2">Select Items</label>
            <select className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border">
                <option value="" defaultValue='true' hidden className="text-sm font-normal" onChange={(e) => setSelected(e)} >
                </option>
                {options.map((option) => 
                    <option value={option.value}>{option.label}</option>
                )}
            </select>
        </div>
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