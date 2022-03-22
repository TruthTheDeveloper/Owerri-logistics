import type {NextPage} from 'next';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons'
// import { faDeliv } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MoreInfo:NextPage = () => {
    return(
        <div className="mt-24 mb-12">
            
            <h1 className="text-xl text-center my-12 font-semibold">We take the burden of <span>logistics of you</span></h1>
            <div className="grid grid-rows-1 lg:grid-cols-3">
                <div className="shadow-xl mx-12  bg-slate-100 my-6 h-max hover:bg-green-500 hover:text-white" >
                    <div className="pl-8 my-3"><FontAwesomeIcon icon={faPersonBiking} size="2x"/></div>
                    <h1 className="text-lg ml-8 my-4 font-medium ">Same day delivery</h1>
                    <p className="mx-8 pb-8 lg:pb-14 ">Technology and its application are fundamental at GIGL. We understand the role of technology in providing an exceptional customer experience. For this reason, our processes, products and services are built around modern technology to help us deliver your shipments cheaper, safely and at the speed of light.</p>
                </div>
                
                <div className="shadow-xl  mx-12 bg-slate-100 my-6 h-max hover:bg-green-500 hover:text-white">
                    <div className="pl-8 my-3"><FontAwesomeIcon icon={faStore} size="2x"/></div>
                    <h1 className="text-lg ml-8 my-4 font-medium">Social commerce</h1>
                    <p className="mx-8 pb-8">Pivotal to successful social commerce transactions is the ability for the end-user to receive items where and when needed. With an unmatched route network spanning urban and rural communalities, GIGL is the solution to efficient last-mile delivery. As a merchant, you only have to think about selling your products while GIGL delivers to your customers worldwide.</p>
                </div>
                <div className="shadow-xl mx-12 bg-slate-100 my-6 h-max hover:bg-green-500 hover:text-white">
                    <div className="pl-8 my-3 "><FontAwesomeIcon icon={faCheckDouble} size="2x"/></div>
                    <h1 className="text-lg ml-8 my-4 font-medium ">Garuanted deliver</h1>
                    <p className="mx-8 pb-8 lg:pb-12">We are conscious of the relationship between time and money and utilize our resources optimally to meet your delivery needs. Our service commitment to you is hassle-free delivery. We are large enough to efficiently handle deliveries for large corporations yet small enough to deploy innovative delivery solutions that help small businesses.</p>
                </div>
            </div>
        </div>
    )
}

export default MoreInfo