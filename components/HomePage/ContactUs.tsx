import type { NextPage } from 'next';



const ContactUs: NextPage = () => {
  return (
      <div className="">
          <h1 className=" font-medium text-center text-2xl my-6">Contact Us</h1>
          <div className="flex flex-col mb-10">
            <div className="w-full my-3 ">
                <input className=" py-2 bg-slate-100 placeholder:text-sm pl-2 outline-none" placeholder="FULL NAME" />
            </div>
            <div className="w-full my-3">
                <input className="py-2 bg-slate-100 placeholder:text-sm pl-2 outline-none" placeholder="EMAIL" />
            </div>
            <div className="w-full my-3 ">
                <textarea className="py-2  h-44 bg-slate-100 placeholder:text-sm pl-2 outline-none" placeholder="MESSAGE" />
            </div>
            <div className="mx-auto">
            <button className="bg-green-400 px-6 py-2 text-white rounded-md ">Contact Us</button>
          </div>
          </div>
          
      </div>
  )
}

export default ContactUs;
