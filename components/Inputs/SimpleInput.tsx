import type { NextPage } from 'next';

interface Props {
    label:string
}

const SimpleInput:NextPage<Props> = ({label}) => {

    console.log(label)

    return <> <div className="flex flex-col w-full">
           <label className="py-2">{label}</label>
             <input className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border w-full" />
         </div></> 


}



export default SimpleInput;