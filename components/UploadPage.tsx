import type {NextPage} from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VechicleHeader from './PageComponents/VechicleHeaders';
import { Route } from './UI/utils/route/addItem';


const UploadPage:NextPage = () => {
    const router = useRouter()
    const { ride } = router.query

    let rideRoute = null;

    rideRoute = Route(ride)

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
                    <div className="text-center py-3 bg-slate-200 shadow-sm lg:mx-14 xl:mx-24 2xl:mx-36"><h1>Item Info</h1></div>
                    <div className=" mx-4 my-2">
                            <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                                <label className="py-2">Select Category</label>
                                <input className="py-2 pl-2 rounded-lg  border-slate-400 border" />
                            </div>
                            <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
                                <label className="py-2">Select Item</label>
                                <input className="py-2 pl-2 outline-none pl-2rounded-lg  border-slate-400 border" />
                            </div>
                            <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36  mb-2">
                                <label className="py-2">Select Weight (kg)</label>
                                <input className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border" />
                            </div>
                            <div className="flex lg:mx-14 xl:mx-24 2xl:mx-36 ">
                                <div className="flex flex-col">
                                    <label className="py-2">Select Weight (kg)</label>
                                    <input className="py-2 my-2 outline-none pl-2 rounded-lg w-36  border-slate-400 border" />
                                </div>
                                <div className="flex flex-col mx-auto ">
                                    <label className="py-2">Select Weight (kg)</label>
                                    <input className="py-2 my-2 outline-none pl-2  rounded-lg w-36   border-slate-400 border" />
                                </div>
                            </div>
                            <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36  my-8 border-slate-400 border">
                                <h1 className="text-center my-4 ">Upload Items</h1>
                                <div className='  mx-auto'>
                                    <i className="mx-10 my-"><FontAwesomeIcon icon={faCloud} size="2x"/></i>
                                    <h2 className="my-4">Upload an Image</h2>
                                    <button className="border-slate-400 border py-2 px-4 rounded-md mt-8 mb-4">Choose a file</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="pb-8 mx-4">
                                <button className="bg-white rounded-md flex  mx-auto shadow-lg border border-slate-400 px-8 py-2">Back</button>
                            </div>
                            <div className="pb-8 mx-4">
                                {rideRoute}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadPage