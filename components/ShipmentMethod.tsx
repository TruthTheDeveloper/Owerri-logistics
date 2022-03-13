import type {NextPage} from 'next';
import Image from 'next/image';
import map from './../public/assets/map.png'
import { faDirections } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
import { useRouter } from 'next/router'


const ShipmentMethod: NextPage = () => {
    const router = useRouter()
    const { ride } = router.query

    let rideRoute = null;

    if(ride === 'motorbike'){
        rideRoute = <Link href="motorbike/uploadItem">
                        <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2">Next</button>
                    </Link>
    }else if(ride === 'car'){
        rideRoute = <Link href="car/uploadItem">
                        <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2">Next</button>
                    </Link>
    }else if(ride === 'van'){
        rideRoute = <Link href="van/uploadItem">
                        <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2">Next</button>
                    </Link>
    }else if(ride === 'truck'){
        rideRoute = <Link href="truck/uploadItem">
                        <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2">Next</button>
                    </Link>
    }

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
                    <div className="basis-1/3 border-t-4 border-slate-200">
                        <div style={{marginTop:'-1rem'}} className=" mx-auto py-1 w-8    z-10 rounded-full bg-white border-slate-200 border-2 text-slate-400   text-center text-sm">
                            3
                        </div>
                        <h1 className="text-sm text-center my-4">Upload item</h1>
                    </div>
                </div>
                <div className="sm:mx-16 md:mx-24 lg:mx-32 xl:mx-44 2xl:56">
                    <div className="mx-4 my-6 pb-10">
                    <div className="text-center py-3 bg-slate-200 shadow-sm lg:mx-14 xl:mx-24 2xl:mx-36"><h1>Senders Info</h1></div>
                    <div className=" mx-4 my-2">
                            <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                                <label className="py-2">Address Line 1</label>
                                <textarea className="h-24 py-2 pl-2  rounded-lg outline-none border-slate-400 border" />
                            </div>
                            <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                                <label className="py-2">Address Line 2</label>
                                <textarea className="h-24 py-2 pl-2  rounded-lg outline-none  border-slate-400 border" />
                            </div>
                            <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                                <label className="py-2">Name</label>
                                <input className="py-2 pl-2 rounded-lg  border-slate-400 border" />
                            </div>
                            <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                                <label className="py-2">Phone Number</label>
                                <input className="py-2 pl-2 outline-none pl-2rounded-lg  border-slate-400 border" />
                            </div>
                            <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                                <label className="py-2">Location</label>
                                <input className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border" />
                            </div>
                        </div>
                    </div>
                    <div className="mx-4 my-6">
                        <div className="text-center py-3 bg-slate-200 shadow-sm lg:mx-14 xl:mx-24 2xl:mx-36"><h1>Receivers Info</h1></div>
                        <div className=" mx-4 my-2">
                            <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                                <label className="py-2">Address Line 1</label>
                                <textarea className="h-24 py-2 pl-2  rounded-lg outline-none border-slate-400 border" />
                            </div>
                            <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                                <label className="py-2">Address Line 2</label>
                                <textarea className="h-24 py-2 pl-2  rounded-lg outline-none border-slate-400 border" />
                            </div>
                            <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                                <label className="py-2">Name</label>
                                <input className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border" />
                            </div>
                            <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                                <label className="py-2">Phone Number</label>
                                <input className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border" />
                            </div>
                            <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                                <label className="py-2">Location</label>
                                <input className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border" />
                            </div>
                        </div>
                    </div>
                    <div className="pb-8">
                        {rideRoute}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShipmentMethod;