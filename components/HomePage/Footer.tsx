import type { NextPage } from 'next';



const Footer: NextPage = () => {
  return (
     <div className="bg-black text-white">
         <div className="grid grid-cols-4">
             <div>
                 <h1>About Us</h1>
             </div>
             <div>
                 <h1>Company</h1>
                 <p>Se</p>
             </div>
             <div>
                 <h1>Other Services</h1>
             </div>
             <div>
                 <h1>Connect with Us</h1>
             </div>
         </div>
         <hr/>
         <h1>Copyright 2022 all right reserved</h1>
     </div>
  )
}

export default Footer;
