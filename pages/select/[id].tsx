import type { NextPage } from 'next';
import Layout from '../../components/Layout/Layout';
import Image from 'next/image';
import map from '../../public/assets/map.png'



const Select: NextPage = () => {
  return (
    <Layout>
        <div style={{background:'#F3F4F6'}} className="overflow-hidden">
            <div  className="text-center my-8 hidden lg:block">
                <h1 className="text-lg">We are excited to serve you</h1>
                <p>Owerri logistics is your on demand delivery companion, it is specialy built for fast and reliable pick-up/delivery service</p>
                <p>Owerri logistics is your most convenient means of sending items within and across cities, owerri logistics</p>
                <p>Owerri logistics eliminates the nedd to leave your home or comfort zone, trying to dispatch items</p>
            </div>

            <div className="bg-white mx-8 my-8 shadow-lg pt-16">
                <div className="flex px-8">
                    <div className="basis-1/3">
                        <div className="border-t-4 border-black">
                            <div style={{marginTop:'-1rem'}} className=" mx-12 py-1 px-3   rounded-full bg-black text-white text-center text-sm">1</div>
                        </div>
                        <h1 className="text-sm text-center my-4">Pick up location</h1>
                    </div>
                    <div className="basis-1/3 border-t-4 border-slate-200">
                        <div style={{marginTop:'-1rem'}} className=" mx-12 py-1 px-3   z-10 rounded-full bg-white border-slate-200 border text-slate-400  text-center text-sm">2</div>
                        <h1 className="text-sm text-center my-4">Shipment details</h1>
                    </div>
                    <div className="basis-1/3 border-t-4 border-slate-200">
                        <div style={{marginTop:'-1rem'}} className=" mx-12 py-1 px-3    z-10 rounded-full bg-white border-slate-200 border text-slate-400   text-center text-sm">
                            3
                        </div>
                        <h1 className="text-sm text-center my-4">Upload item</h1>
                    </div>
                </div>
                <div className="flex flex-col mx-12">
                    <div className="flex flex-col py-2">
                        <label className="mb-2">Pickup Address</label>
                        <input className="h-10 p-4 placeholder:text-sm placeholder:pl-2 outline-none bg-slate-100 rounded-md" placeholder="Pickup Address"/>
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="mb-2">Delivery Address</label>
                        <input className="h-10 p-4 placeholder:text-sm placeholder:pl-2 outline-none mb-4 bg-slate-100 rounded-md" placeholder="Delivery Address"/>
                    </div>
                </div>
                <div>
                    <div className="m-4">
                        <Image
                        src={map}
                        alt="text"
                         />
                    </div>
                </div>
                <button className="bg-green-400 mx-auto text-white px-8 py-2">Next</button>
            </div>
        </div>
    </Layout>
  )
}

export default Select;
