import type {NextPage} from 'next';

interface Props{
    label:string,
    value:string,
    error:string,
    onChange:(e:any) => void
}

const Inputs:NextPage<Props> = ({label, value, error, onChange}) => {
    return <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36 ">
    <label className="py-2">{label}</label>
    <input className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border w-full" value={value} onChange={onChange}/>
    <p className="text-red-500">{error}</p>
    </div>
}

export default Inputs;