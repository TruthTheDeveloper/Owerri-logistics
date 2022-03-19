import type { NextPage } from 'next';

interface Props {
    label:string
}

const SimpleInput:NextPage<Props> = ({label}) => {

    return  <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
            <label className="py-2">{label}</label>
            <input className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border" />
        </div>
}

export default SimpleInput;