import type { NextPage } from 'next';
import Image from 'next/image'

//Images import
import bike from '../../../public/assets/bike.svg'

//Third party
import 'animate.css';


const Header: NextPage = () => {
  return (
      <div className="h-5/6 flex flex-col" style={{height:'35rem'}}>
          <div className="md:flex  bg-green-500 text-white h-full">
            <div className=" text-3xl xl:text-5xl text-center md:text-left md:pt-4 mt-24 md:basis-1/2 animate__fadeIn font-semibold ml-12 pt-8 ">
                <p><span className="text-black ">Get</span> your Delivery</p>
                <p>at your doorstep anywhere</p>
                <p>around <span className="text-black">Owerri</span> by the best</p>
                <p>dispatch rider</p>
            </div>
            <div className=" md:mt-5 md:basis-1/2  ml-10 ">
                    <Image src={bike}  alt="text" width={550} height={400}/>
            </div>
          </div>
          
            <div className="bg-green-500 ">
            <div className="flex justify-center my-12 ">
                <div className="flex  w-10/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
                    <input className="h-16  w-full placeholder:text-xl rounded-sm placeholder:pl-4 border-slate-400 outline-none border pl-4 rounded-xl" placeholder="Track ID" />
                    <button className="px-8 ml-4 lg:text-xl rounded-sm text bg-green-400 font-semibold text-white rounded-xl">Track</button>
                </div>
            </div>
            </div>

      </div>
  )
}

export default Header;
