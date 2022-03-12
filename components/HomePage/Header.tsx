import type { NextPage } from 'next';
import Image from 'next/image'
import bike from '../../public/assets/bike.svg'


const Header: NextPage = () => {
  return (
      <div className="md:flex">
          <div className="text-3xl text-center md:text-left md:pt-4 mt-5 md:basis1/2 ">
              <p><span className="text-green-500">Get</span> your Delivery</p>
              <p>at your doorstep anywhere</p>
              <p>around <span className="text-green-500">Owerri</span> by the best</p>
              <p>dispatch rider</p>
          </div>
          <div className=" md:mt-5 md:basis1/2 ml-16 sm:ml-28 ">
                <Image src={bike}  alt="text" width={400} height={300}/>
          </div>
      </div>
  )
}

export default Header;
