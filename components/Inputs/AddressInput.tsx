import type { NextPage } from 'next';

interface Props{
    label:string,
    value:string,
    error:string,
    onChange:(e: any) => void

}
const AddressInput: NextPage<Props> = ({label, value, error,onChange}) => {

    return (
            <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
            <label className="py-2">{label}</label>
            <textarea className="h-24 py-2 pl-2  rounded-lg outline-none border-slate-400 border"  value={value} onChange={onChange}/>
            <p className="text-red-500">{error}</p>
        </div>
    )
}

export default AddressInput;