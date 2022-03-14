import type {NextPage} from 'next';

interface Props{
    formType: string,
}

const Form: NextPage<Props> = ({formType}) => {
    return (
        <div className="mx-4 my-6">
            <div className="text-center py-3 bg-slate-200 shadow-sm lg:mx-14 xl:mx-24 2xl:mx-36"><h1>{formType}</h1></div>
            <div className=" mx-4 my-2">
                <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                    <label className="py-2">Address Line 1</label>
                    <textarea className="h-24 py-2 pl-2  rounded-lg outline-none border-slate-400 border" />
                </div>
                <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                    <label className="py-2">Address Line 2</label>
                    <textarea className="h-24 py-2 pl-2  rounded-lg outline-none border-slate-400 border" />
                </div>
                <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                    <label className="py-2">Name</label>
                    <input className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border" />
                </div>
                <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                    <label className="py-2">Phone Number</label>
                    <input className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border" />
                </div>
                <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                    <label className="py-2">Location</label>
                    <input className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border" />
                </div>
            </div>
        </div>
    )
}

export default Form
