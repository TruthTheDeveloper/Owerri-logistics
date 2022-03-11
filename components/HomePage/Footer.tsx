import type { NextPage } from 'next';



const Footer: NextPage = () => {
  return (
     <div className="bg-black text-white">
         <div className="grid grid-cols-4">
             <div className="mt-4 ml-2">
                 <h1 className="font-semibold">ABOUT US</h1>
             </div>
             <div className="mt-4 ml-2">
                 <h1 className="font-semibold">COMPANY</h1>
                 <ul className="text-sm">
                     <li className="my-2">Service Portfolio</li>
                     <li className="my-2">About Us</li>
                     <li className="my-2">Blog</li>
                     <li className="my-2">Terms and condition</li>
                 </ul>
             </div>
             <div className="mt-4 ml-2">
                 <h1 className="font-semibold">OTHER SERVICES</h1>
                 <ul className="text-sm">
                     <li className="my-2">Get a quote</li>
                     <li className="my-2">Schedule a pickup</li>
                     <li className="my-2">Gig Alpha</li>
                     <li className="my-2">Overseas shipping</li>
                     <li className="my-2">Report Issue</li>
                 </ul>
             </div>
             <div className="mt-4 ml-2">
                 <h1 className="font-semibold">CONNECT WITH US</h1>
             </div>
         </div>
         <hr/>
         <h1 className="text-center">Copyright 2022 all right reserved</h1>
     </div>
  )
}

export default Footer;
