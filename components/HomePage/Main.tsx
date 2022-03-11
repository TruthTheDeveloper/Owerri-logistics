import type { NextPage } from 'next';
import Image from 'next/image';
import car from '../../public/assets/car 1.png';
import delivery from '../../public/assets/delivery-van 1.png';
import van from '../../public/assets/van 1.png';
import motorbike from '../../public/assets/motorbike 1.png';


const Main: NextPage = () => {
  return (
      <main style={{background:'#F3F4F6'}}>
        <div className="grid grid-rows-5 bg-white m-12">
          <div className="justify-self-center self-center my-5 font-medium">
            <p>Please select the most suitable</p>
            <p>Vechicle To pick up your item</p>
          </div>
          <div className="justify-self-center border-2 border-green-500 cu   w-48 h-52 mb-12 shadow-lg">
              <div className="pl-14 pt-10">
                <Image
                    src={motorbike}
                    alt="text"
                    width={50}
                    height={50}
                />
              </div>
            </div>
            <div className="justify-self-center w-48 h-52 border-2 border-green-500  shadow-lg">
                <div className="pl-14 pt-10">
                    <Image
                        src={car}
                        alt="text"
                        width={50}
                        height={50}
                        /> 
                </div>
            </div>
            <div className="justify-self-center w-48 border-2 border-green-500  h-52 shadow-lg">
                <div className="pl-14 pt-10">
                    <Image
                        src={van}
                        alt="text"
                        width={50}
                        height={50}
                    />
                </div>
            </div>
            <div className="justify-self-center border-2 border-green-500  w-48 h-52 shadow-lg">
                <div className="pl-14 pt-10">
                    <Image
                        src={delivery}
                        alt="text"
                        width={50}
                        height={50}
                    />
                </div>
            </div>
        </div>
      </main>
  )
}

export default Main;
