import type { NextPage } from 'next';



const ContactUs: NextPage = () => {
  return (
      <div className="">
          <h1 className=" font-medium text-center text-2xl mb-6">Contact Us</h1>
          <div className="flex flex-col ml bg-black">
            <div className="w-80 mx-auto my-2 ">
                <input className=" py-1 w-full "  />
            </div>
            <div className="w-80 mx-auto my-2">
                <input className="px-16 py-1 w-full"  />
            </div>
            <div className="w-80 mx-auto my-2">
                <textarea className="px-16 py-1 w-full h-28"  />
            </div>
          </div>
      </div>
  )
}

export default ContactUs;
