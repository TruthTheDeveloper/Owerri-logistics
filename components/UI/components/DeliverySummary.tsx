import type {NextPage} from 'next';
import Image from 'next/image';
import BlackMan from '../../../public/assets/blackman.png'
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DeliverySummary = () => {
     return (
        <div className="mt-10  border lg:mx-14 xl:mx-24 2xl:mx-36 shadow-lg rounded-md">
        <div className="flex justify-between my-4 border-slate-400 border-b shadow-md">
            <h1 className="ml-4 mb-2">Delivery Items</h1>
            <div className="flex mr-4">
                    <p className="mx-4">Add Item</p>
                    <span className="cursor-pointer"><FontAwesomeIcon icon={faCloudUpload}/></span>
            </div>
        </div>
        <div className="flex">
            <div className="mx-auto">
                <p>item</p>
                <Image
                src={BlackMan}
                width={40}
                height={40}
                alt="text"
                />
            </div>
            <div className="mx-auto">
                <p>Name</p>
                <p>Laptop</p>
            </div>
            <div className="mx-auto">
                <p>Weight</p>
                <p>0.0-1.5kg</p>
            </div>
            <div className="mx-auto">
                <p>Quantity</p>
                <p>3 pieces</p>
            </div>
        </div>
    </div>
     )
}

export default DeliverySummary