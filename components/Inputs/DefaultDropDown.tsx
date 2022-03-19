import type { NextPage } from 'next';


interface Props{
    label:string
}
const DefaultDropDown:NextPage<Props> = ({label}) => {

    return <>
        <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
            <label className="py-2">{label}</label>
            <select className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border">
                <option value="" defaultValue='true' hidden className="text-sm font-normal" >
                </option>
            </select>
        </div>
    </>
}

export default DefaultDropDown;