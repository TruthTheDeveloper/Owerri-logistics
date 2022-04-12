import type { NextPage } from 'next';
// import {  } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

{/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}


const Footer: NextPage = () => {
  return (
     <div className="bg-black text-white">
         <div className="grid grid-rows-1 lg:grid-cols-4 ml-6">
             <div className="mt-24 ml-2">
                 <h1 className="font-semibold">ABOUT US</h1>
             </div>
             <div className="mt-4 ml-2">
                 <h1 className="font-semibold">COMPANY</h1>
                 <ul className="text-sm">
                     <li className="my-3">Service Portfolio</li>
                     <li className="my-3">About Us</li>
                     <li className="my-3">Blog</li>
                     <li className="my-3">Terms and condition</li>
                 </ul>
             </div>
             <div className="mt-4 ml-2">
                 <h1 className="font-semibold">OTHER SERVICES</h1>
                 <ul className="text-sm">
                     <li className="my-3">Get a quote</li>
                     <li className="my-3">Schedule a pickup</li>
                     <li className="my-3">Gig Alpha</li>
                     <li className="my-3">Overseas shipping</li>
                     <li className="my-3">Report Issue</li>
                 </ul>
             </div>
             <div className="mt-4 ml-2">
                 <h1 className="font-semibold mb-4 text-center">CONNECT WITH US</h1>
                 <div className="flex justify-center">
                    <div className="mx-4 h-10 w-10"><FontAwesomeIcon icon={faLinkedin}  /></div>
                    <div className="mx-4 h-10 w-10"><FontAwesomeIcon icon={faFacebookSquare}  /></div>
                    <div className="mx-4 h-10 w-10"><FontAwesomeIcon icon={faTwitterSquare}  /></div>
                 </div>
             </div>
         </div>
         {/* <hr className="my-2"/> */}
         <h1 className="text-center my-4">Copyright 2022 all right reserved</h1>
     </div>
  )
}

export default Footer;
