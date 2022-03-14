import type {NextPage} from 'next';
import Image from 'next/image';
import blackMan from '../public/assets/blackMan.png'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
                <div className="flex flex-col md:flex-row  justify-center px-auto my-10">
                    <div className="border-slate-500 border-2  rounded-sm md:mx-5 w-56 h-48 ml-28 sm:ml-36 mb-8 md:mx-10">
                        <div className="mx-2 flex justify-between">
                            <span className="pr-2 cursor-pointer"><FontAwesomeIcon icon={faEdit} size="1x"/></span>
                            <span className="pl-2 cursor-pointer"><FontAwesomeIcon icon={faTrash} size="1x"/></span>
                        </div>
                        <div className="text-center mt-5 rounded-sm ">
                            <Image src={blackMan} alt="text" />
                            <p>0.1-1.5kg</p>
                            <p>3Pieces(s)</p>
                        </div>
                    </div>
                    <div className="border-slate-500 border-2  text-center w-56 h-48 ml-28 sm:ml-36 md:ml-0">
                        <div className="mt-10">
                            <span className="cursor-pointer"><FontAwesomeIcon icon={faCloudUpload} size='2x' /></span>
                        </div>
                        <p className="font-semibold my-2">Add Item</p>
                        <p className="text-sm">Add more items to your shipment</p>
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