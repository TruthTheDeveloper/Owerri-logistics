import type { NextPage } from 'next';
import ChooseDeliveryMethod from './Ui/ChooseDeliveryMethod';
import car from '../../public/assets/car 1.png';
import truck from '../../public/assets/delivery-van 1.png';
import van from '../../public/assets/van 1.png';
import motorbike from '../../public/assets/motorbike 1.png';



const Main: NextPage = () => {
  return (
      <div style={{background:'#F3F4F6'}} className="overflow-hidden">
        <div className=" bg-white font-medium py-10 mx-8 md:mx-16 lg:mx-32 xl:mx-56 2xl:mx-64  mt-12">
            <p className="text-center">Please select the most suitable</p>
            <p className="text-center">Vechicle To pick up your item</p>
          </div>
        <div className="grid grid-rows-5 md:grid-rows-2 md:grid-cols-2 bg-white  mx-8 md:mx-16 lg:mx-32 xl:mx-56 2xl:mx-64 mb-12">

            <ChooseDeliveryMethod vechicle={motorbike} vechicleName="Bike" link="motorbike" description="Ideal for lightweight items Documents, human hair, phones"/>
            <ChooseDeliveryMethod vechicle={car} vechicleName="Car" link="car" description="For items that will fit into a car boot:Bag of clothes and shoes a microwave"/>
            <ChooseDeliveryMethod vechicle={van} vechicleName="Van" link="van" description="For items too large to fit in a car boot: Large Bag of clothes or shoes, a small fridge e.t.c "/>
            <ChooseDeliveryMethod vechicle={truck} vechicleName="Truck" link="truck" description="For items that will fit into a car boot:Bag of clothes and shoes a microwave"/>
        </div>
      </div>
  )
}

export default Main;
