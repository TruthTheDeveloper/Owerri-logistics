import type { NextPage } from 'next';
import Image from 'next/image';
import car from '../../public/assets/car 1.png';
import delivery from '../../public/assets/delivery-van 1.png';
import van from '../../public/assets/van 1.png';
import motorbike from '../../public/assets/motorbike 1.png';


const Main: NextPage = () => {
  return (
      <main className="grid grid-rows-5">
          <div className="justify-self-center my-5 font-medium">
            <p>Please select the most suitable</p>
            <p>Vechicle To pick up your item</p>
          </div>
          <div className="justify-self-center bg-green-300">
              <Image
                src={car}
                alt="text"
                width={70}
                height={70}
               />
          </div>
          <div className="justify-self-center bg-red-300">
              <Image
                src={delivery}
                alt="text"
                width={70}
                height={70}
               />
          </div>
          <div className="justify-self-center bg-yellow-300">
              <Image
                src={van}
                alt="text"
                width={70}
                height={70}
               />
          </div>
          <div className="justify-self-center bg-cyan-700">
              <Image
                src={motorbike}
                alt="text"
                width={70}
                height={70}
               />
          </div>
      </main>
  )
}

export default Main;
