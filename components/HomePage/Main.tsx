import type { NextPage } from 'next';
import Image from 'next/image';
import car from '../../public/assets/car 1.png';
import delivery from '../../public/assets/delivery-van 1.png';
import van from '../../public/assets/van 1.png';
import motorbike from '../../public/assets/motorbike 1.png';
import Link from 'next/link'


const Main: NextPage = () => {
  return (
      <div style={{background:'#F3F4F6'}} className="overflow-hidden">
        <div className=" bg-white font-medium py-10 mx-8 md:mx-16 lg:mx-32 xl:mx-56 2xl:mx-64  mt-12">
            <p className="text-center">Please select the most suitable</p>
            <p className="text-center">Vechicle To pick up your item</p>
          </div>
        <div className="grid grid-rows-5 md:grid-rows-2 md:grid-cols-2 bg-white  mx-8 md:mx-16 lg:mx-32 xl:mx-56 2xl:mx-64 mb-12">
          <Link href="/select/motorbike">
          <div className="justify-self-center border-2 hover:border-green-400 cursor-pointer  w-48 h-52 mb-12 shadow-lg rounded-md ">
              <div className="mx-16 mt-4 mb-4">
                <Image
                    src={motorbike}
                    alt="text"
                    width={50}
                    height={50}
                />
              </div>
              <div className="text-center text-sm">
                  <h1 className="font-medium text-xl mb-2">Bike</h1>
                    <p>Ideal for lightweight items Documents, human hair, phones</p>
                </div>
            </div>
          </Link>
            <Link href="/select/car">
                <div className="justify-self-center w-48 h-52 border-2  cursor-pointer shadow-lg rounded-md hover:border-green-400 ">
                <div className="mx-16 mt-4 ">
                    <Image
                        src={car}
                        alt="text"
                        width={70}
                        height={70}
                        /> 
                </div>
                <div className="text-center text-sm mx-3">
                <h1 className="font-medium text-xl mb-2">Car</h1>
                    <p>For items that will fit into a car boot:Bag of clothes and shoes a microwave</p>
                </div>
            </div>
            </Link>
            <Link href="/select/van">
                <div className="justify-self-center w-48 border-2 cursor-pointer  h-52 shadow-lg rounded-md hover:border-green-400 ">
                    <div className="mx-16 mt-4 mb-2">
                        <Image
                            src={van}
                            alt="text"
                            width={50}
                            height={50}
                        />
                    </div>
                    <div className="text-center text-sm mx-3">
                        <h1 className="font-medium text-xl mb-2">Van</h1>
                        <p>For items too large to fit in a car boot: Large Bag of clothes or shoes, a small fridge e.t.c  </p>
                    </div>
                </div>
            </Link>
            <Link href="select/truck">
                <div className="justify-self-center border-2  cursor-pointer  w-48 h-52 shadow-lg rounded-md hover:border-green-400 ">
                    <div className="mx-16 mt-4 mb-2">
                        <Image
                            src={delivery}
                            alt="text"
                            width={50}
                            height={50}
                        />
                    </div>
                    <div className="text-center text-sm mx-3">
                        <h1 className="font-medium text-xl mb-2">Truck</h1>
                        <p>For items that will fit into a car boot:Bag of clothes and shoes a microwave</p>
                    </div>
                </div>
            </Link>
        </div>
      </div>
  )
}

export default Main;
