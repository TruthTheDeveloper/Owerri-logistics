import type {NextPage} from 'next';
import { useRouter } from 'next/router'

// UI Components
import VechicleHeader from '../PageComponents/VechicleHeaders';
import Form from '../ShipmentPage/Form';

//UI utils
import { Route } from '../UI/utils/route/uploadItemRoute';


const ShipmentMethod: NextPage = () => {
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
                    <div className="basis-1/3 border-t-4 border-slate-200">
                        <div style={{marginTop:'-1rem'}} className=" mx-auto py-1 w-8    z-10 rounded-full bg-white border-slate-200 border-2 text-slate-400   text-center text-sm">
                            3
                        </div>
                        <h1 className="text-sm text-center my-4">Upload item</h1>
                    </div>
                </div>
                <div className="sm:mx-16 md:mx-24 lg:mx-32 xl:mx-44 2xl:56">
                   <Form formType="Sender"/>
                   <Form formType="Receiver"/>
                    <div className="flex justify-center">
                            <div className="pb-8 mx-4">
                                <button className="bg-white rounded-md flex  mx-auto shadow-lg border border-slate-400 px-8 py-2" onClick={() => router.back()}>Back</button>
                            </div>
                            <div className="pb-8 mx-4">
                                {rideRoute}
                            </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ShipmentMethod;