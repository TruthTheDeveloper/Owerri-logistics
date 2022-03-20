import type { NextPage } from 'next';

interface Props {
    label:string
}

const SmallInput:NextPage<Props> = ({label}) => {

    return  <>
        <label className="py-2">{label}</label>
        <input className="py-2 my-2 outline-none pl-2 rounded-lg w-36  border-slate-400 border" />
    </>
}

export default SmallInput;