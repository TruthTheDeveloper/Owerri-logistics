import type { NextPage } from 'next';
import Image from 'next/image'

//Images import
import bike from '../../../public/assets/bike.svg'

//Third party
import 'animate.css';


const Header: NextPage = () => {
  return (
      <div className="md:flex md:mx-12 lg:mx-28 xl:mx-32">
          <div className=" text-3xl xl:text-4xl text-center md:text-left md:pt-4 mt-5 md:basis-1/2 animate__fadeIn font-semibold">
              <p><span className="text-green-500 ">Get</span> your Delivery</p>
              <p>at your doorstep anywhere</p>
              <p>around <span className="text-green-500">Owerri</span> by the best</p>
              <p>dispatch rider</p>
          </div>
          <div className=" md:mt-5 md:basis-1/2  ml-10">
                <Image src={bike}  alt="text" width={500} height={300}/>
          </div>
      </div>
  )
}

export default Header;
