import type {NextPage} from 'next';
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router'


const AddItems: NextPage = () => {
    const router = useRouter()
    const { ride } = router.query


    return (
        <div style={{background:'#F3F4F6'}} className="overflow-hidden">
            <div  className="text-center my-8 hidden lg:block">
                <h1 className="text-xl font-semibold py-2">We are excited to serve you!</h1>
                <p>Owerri logistics is your on demand delivery companion, it is specialy built for fast and reliable pick-up/delivery service</p>
                <p>Owerri logistics is your most convenient means of sending items within and across cities, owerri logistics</p>
                <p>Owerri logistics eliminates the nedd to leave your home or comfort zone, trying to dispatch items</p>
            </div>

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
                <div className="text-center my-8">
                    <h1 className="font-normal text-xl my-2">You can add and delete more Item</h1>
                    <p className="font-thin text-lg  text-red-600">Please note that these items will use the same address</p>
                    <p className="font-thin text-lg text-red-600 mb-2">Provided from your shipment</p>
                </div>
                <div>
                    <div>
                        <div>
                            <i></i>
                            <i></i>
                        </div>
                        <div>
                            <Image alt="text"/>
                            <p>0.1-1.5kg</p>
                            <p>3Pieces(s)</p>
                        </div>
                    </div>
                    <div>
                        <i></i>
                        <p>Add Item</p>
                        <p>Add more items to your shipment</p>
                    </div>
                </div>
                <div className="flex justify-center">
                        <div className="pb-8 mx-4">
                            <button className="bg-green-400 rounded-md flex  mx-auto text-white  px-16 py-2">Proceed</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default AddItems;