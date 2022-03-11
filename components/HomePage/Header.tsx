import type { NextPage } from 'next';
import Image from 'next/image'
import bike from '../../public/assets/bike.svg'


const Header: NextPage = () => {
  return (
      <div className="">
          <div className="text-3xl text-center mt-5">
              <p><span className="text-green-500">Get</span> your Delivery</p>
              <p>at your doorstep anywhere</p>
              <p>around <span className="text-green-500">Owerri</span> by the best</p>
              <p>dispatch rider</p>
          </div>
          <div className="mt-14">
              <Image src={bike}  alt="text"/>
          </div>
      </div>
  )
}

export default Header;
