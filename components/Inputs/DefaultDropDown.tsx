import type { NextPage } from 'next';
import Select from 'react-select';
import {useState} from 'react';


interface Props{
    label:string
}
const DefaultDropDown:NextPage<Props> = ({label}) => {
    const [selected, setSelected] = useState<string|null|object>({})


    return <>
        <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
            <label className="py-2">{label}</label>
            <Select
                defaultValue={selected}
                onChange={setSelected}
                // options={options}
            />
        </div>

        <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
            <label className="py-2">Select weight</label>
            <Select
                defaultValue={selected}
                onChange={setSelected}
                // options={options}
            />
        </div>
    </>
}

export default DefaultDropDown;