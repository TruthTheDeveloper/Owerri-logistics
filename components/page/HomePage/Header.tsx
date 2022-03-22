import type { NextPage } from 'next';
import Image from 'next/image'
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

//Images import
import bike from '../../../public/assets/bike.svg'

//Third party
import 'animate.css';


const Header: NextPage = () => {
  return (
      <div className="h-5/6 bg-red-500" style={{height:'35rem'}}>
          <div className="md:flex  bg-green-500 text-white h-full">
            <div className=" text-3xl xl:text-5xl text-center md:text-left md:pt-4 mt-5 md:basis-1/2 animate__fadeIn font-semibold self-center ml-12 pt-8 " style={{
                    animation: 'x 1s',
                    animationName: Radium.keyframes(bounce, 'bounce')
                }}>
                <p><span className="text-black ">Get</span> your Delivery</p>
                <p>at your doorstep anywhere</p>
                <p>around <span className="text-black">Owerri</span> by the best</p>
                <p>dispatch rider</p>
            </div>
            <div className=" md:mt-5 md:basis-1/2  ml-10 self-center">
                    <Image src={bike}  alt="text" width={550} height={400}/>
            </div>
          </div>
      </div>
  )
}

export default Header;
