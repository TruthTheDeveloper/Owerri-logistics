import type {NextPage} from 'next';
import {useRouter} from 'next/router'

//UI components
import VechicleHeader from '../PageComponents/VechicleHeaders';
import DeliverySummary from '../UI/components/DeliverySummary';
import PricingSummary from '../UI/components/PricingSummary';
import AddressInput from '../Inputs/AddressInput';
import SimpleInput from '../Inputs/SimpleInput';
import BackButton from '../Buttons/BackButton';

const ReviewItem:NextPage = () => {
    const router = useRouter()
    return (
        <div style={{background:'#F3F4F6'}} className="overflow-hidden">
            <VechicleHeader/>
            <div className="bg-white mx-8 sm:mx-16 md:mx-24 lg:mx-36 xl:mx-44 2x:56 my-8 shadow-lg pt-16">
                <div className="flex px-8 sm:px-24">
                    <div className="basis-1/3">
                        <div className="border-t-4 border-black">
                            <div style={{marginTop:'-1rem'}} className=" mx-auto py-1 w-8 bg-black text-white   rounded-full  text-center text-sm">1</div>
                        </div>
                        <h1 className="text-sm text-center my-4">Pick up location</h1>
                    </div>
                    <div className="basis-1/3 border-t-4 border-black ">
                        <div style={{marginTop:'-1rem'}} className=" mx-auto py-1 w-8 bg-black text-white   z-10 rounded-full  text-center text-sm">2</div>
                        <h1 className="text-sm text-center my-4">Shipment details</h1>
                    </div>
                    <div className="basis-1/3 border-t-4 border-black">
                        <div style={{marginTop:'-1rem'}} className=" mx-auto py-1 w-8    z-10 rounded-full bg-black text-white text-center text-sm">
                            3
                        </div>
                        <h1 className="text-sm text-center my-4">Upload item</h1>
                    </div>
                </div>
                <div className="sm:mx-16 md:mx-24 lg:mx-32 xl:mx-44 2xl:56">
                    <div className="mx-4 my-6 pb-10">
                    <div className="text-center py-3 bg-slate-200 shadow-sm lg:mx-14 xl:mx-24 2xl:mx-36"><h1>Content Details</h1></div>
                    <div className=" mx-4 my-2">
                            <AddressInput label="Pick Up Address"/>
                            <AddressInput label="Delivery Address"/>
                            <SimpleInput label="Sender Name"/>
                            <SimpleInput label="Receiver Name"/>
                        </div>
                        <DeliverySummary/>
                        <PricingSummary/> 
                    </div>
                    
                    <div className="flex justify-center">
                            <BackButton/>
                            <div className="pb-8 mx-4">
                            <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2">pay</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ReviewItem