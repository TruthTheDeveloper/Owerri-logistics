import type { NextPage } from 'next';
import Layout from '../../components/Layout/Layout';



const Select: NextPage = () => {
  return (
    <Layout>
        <div style={{background:'#F3F4F6'}}>
            <div  className="text-center my-8 hidden lg:block">
                <h1 className="text-lg">We are excited to serve you</h1>
                <p>Owerri logistics is your on demand delivery companion, it is specialy built for fast and reliable pick-up/delivery service</p>
                <p>Owerri logistics is your most convenient means of sending items within and across cities, owerri logistics</p>
                <p>Owerri logistics eliminates the nedd to leave your home or comfort zone, trying to dispatch items</p>
            </div>

            <div className="bg-white mx-12 shadow-lg">
                <div className="flex ">
                    <div className="basis-1/3 border-t-4 border-black">
                        <span className="text-center">1</span>
                        <h1 className="text-sm">Pick up location</h1>
                    </div>
                    <div className="basis-1/3">
                        <span>2</span>
                        <h1>Shipment details</h1>
                    </div>
                    <div className="basis-1/3">
                        <span>3</span>
                        <h1>Upload item</h1>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    </Layout>
  )
}

export default Select;
