import type {NextPage} from 'next';
import Image from 'next/image';
import map from './../public/assets/map.png'
import { faDirections } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
import { useRouter } from 'next/router'


const SelectItem: NextPage = () => {
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
                            <div style={{marginTop:'-1rem'}} className=" mx-auto py-1 w-8   rounded-full bg-black text-white text-center text-sm">1</div>
                        </div>
                        <h1 className="text-sm text-center my-4">Pick up location</h1>
                    </div>
                    <div className="basis-1/3 border-t-4 border-slate-200">
                        <div style={{marginTop:'-1rem'}} className=" mx-auto py-1 w-8   z-10 rounded-full bg-white border-slate-200 border-2 text-slate-400  text-center text-sm">2</div>
                        <h1 className="text-sm text-center my-4">Shipment details</h1>
                    </div>
                    <div className="basis-1/3 border-t-4 border-slate-200">
                        <div style={{marginTop:'-1rem'}} className=" mx-auto py-1 w-8    z-10 rounded-full bg-white border-slate-200 border-2 text-slate-400   text-center text-sm">
                            3
                        </div>
                        <h1 className="text-sm text-center my-4">Upload item</h1>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-evenly  mx-6 ">
                    <div className="flex flex-col  py-2">
                        <label className="mb-2 ml-8">Pickup Address</label>
                        <div className="flex" >
                            <span className="mx-2 mt-2"><FontAwesomeIcon icon={faDirections}  /></span>
                            <input className="h-10 lg:h-12 p-4 placeholder:text-sm w-full placeholder:pl-2 outline-none bg-slate-100 rounded-md" placeholder="Pickup Address"/>
                        </div>
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="mb-2 ml-8">Delivery Address</label>
                        <div className="flex">
                            <span className="mx-2 mt-2"><FontAwesomeIcon icon={faLocation}  /></span>
                            <input className="h-10 lg:h-12 p-4 w-full placeholder:text-sm placeholder:pl-2 outline-none mb-4 bg-slate-100 rounded-md" placeholder="Delivery Address"/>
                        </div>
                    </div>
                </div>
                    <div className="m-4 sm:mx-8 md:mx-16 lg:mx-32">
                        <Image
                        src={map}
                        alt="text"
                         />
                    </div>
                <div className="pb-8">
                    <Link href="/select/shipment/">
                        <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2">Next</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SelectItem;