import type {NextPage} from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

//Image import
import blackMan from '../../public/assets/blackMan.png';

//React
import {useState, useEffect, useContext} from 'react';



//Font Awesome
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//UI Component
import VechicleHeader from '../PageComponents/VechicleHeaders';
import BackButton from '../Buttons/BackButton';
import Link from 'next/link';
import AuthContext from '../../context/auth-context';

const AddItems: NextPage = () => {


    const {initialState,setInitialState} = useContext<any>(AuthContext)

    const [loading, setLoading] = useState(false)

    const [allItems, setallItem] =  useState<any>([])

    useEffect(() => {
        setallItem((prev: any) => [...prev,
            initialState.deliveryAddress,
            initialState.pickUpAddress, 
            initialState.senderAddressLine1,
            initialState.senderAddressLine2,
            initialState.senderName,
            initialState.senderPhoneNumber,
            initialState.senderLocation,
            initialState.receiverAddressLine1,
            initialState.receiverAddressLine2,
            initialState.receiverName,
            initialState.receiverPhoneNumber,
            initialState.receiverLocation,
            initialState.weight,
            initialState.value
        ])
    },[initialState.deliveryAddress, initialState.pickUpAddress, initialState.receiverAddressLine1, initialState.receiverAddressLine2, initialState.receiverLocation, initialState.receiverName, initialState.receiverPhoneNumber, initialState.senderAddressLine1, initialState.senderAddressLine2, initialState.senderLocation, initialState.senderName, initialState.senderPhoneNumber, initialState.value, initialState.weight])


   

    const router = useRouter()
    const { ride } = router.query

    const buttonHandler = () => {


        ride === 'motorbike' && router.push("/select/motorbike/review")
        ride === 'car' && router.push("/select/car/review")
        ride === 'van' && router.push("/select/van/review")
        ride === 'truck' && router.push("/select/truck/review")

        setLoading(true)
    }



    const addItemHandler = () => {
        setallItem((prev: any) => [...prev,
            initialState.deliveryAddress,
            initialState.pickUpAddress, 
            initialState.senderAddressLine1,
            initialState.senderAddressLine2,
            initialState.senderName,
            initialState.senderPhoneNumber,
            initialState.senderLocation,
            initialState.receiverAddressLine1,
            initialState.receiverAddressLine2,
            initialState.receiverName,
            initialState.receiverPhoneNumber,
            initialState.receiverLocation,
            initialState.weight,
            initialState.value
        ])

        
        
    }

    return (
        <div style={{background:'#F3F4F6'}} className="overflow-hidden">
            <VechicleHeader/>
            <div className="bg-white mx-8 sm:mx-16 md:mx-24 lg:mx-36 xl:mx-44 2x:56 my-8 shadow-lg pt-16">
                <div className="flex px-8 sm:px-24">
                    <div className="basis-1/3">
                        <div className="border-t-4 border-black">
                            <div style={{marginTop:'-1rem'}} className=" mx-auto py-1 w-8 bg-black text-white   rounded-full  text-center text-sm">1</div>
                        </div>
                        <h1 className="text-sm lg:text-lg text-center my-4">Pick up location</h1>
                    </div>
                    <div className="basis-1/3 border-t-4 border-black ">
                        <div style={{marginTop:'-1rem'}} className=" mx-auto py-1 w-8 bg-black text-white   z-10 rounded-full  text-center text-sm">2</div>
                        <h1 className="text-sm lg:text-lg text-center my-4">Shipment details</h1>
                    </div>
                    <div className="basis-1/3 border-t-4 border-black">
                        <div style={{marginTop:'-1rem'}} className=" mx-auto py-1 w-8    z-10 rounded-full bg-black text-white text-center text-sm">
                            3
                        </div>
                        <h1 className="text-sm lg:text-lg text-center my-4">Upload item</h1>
                    </div>
                </div>
                <div className="text-center my-8">
                    <h1 className="font-normal text-xl my-2">You can add and delete more Item</h1>
                    <p className="font-thin text-lg  text-red-600">Please note that these items will use the same address</p>
                    <p className="font-thin text-lg text-red-600 mb-2">Provided from your shipment</p>
                </div> 
                <div className="flex flex-col md:flex-row  justify-center px-auto my-10">
                    {allItems.map((item:any) => {
                        <div className="border-slate-500 border-2  rounded-md md:mx-5 w-56 h-48 ml-28 sm:ml-36 mb-8 md:mx-10">
                        <div className="mx-2 flex justify-between">
                            <span className="pr-2 cursor-pointer"><FontAwesomeIcon icon={faEdit} size="1x"/></span>
                            <span className="pl-2 cursor-pointer"><FontAwesomeIcon icon={faTrash} size="1x" className="text-red-500"/></span>
                        </div>
                        <div className="text-center mt-5 rounded-sm ">
                            <Image src={blackMan} alt="text" />
                            <p>{item.weight}</p>
                            <p>{item.value}</p>
                        </div>
                    </div>
                    })}
                    <div className="border-slate-500 border-2 rounded-md text-center w-56 h-48 ml-28 sm:ml-36 md:ml-0">
                        <div className="mt-10">
                            <Link href="/select/motorbike/"><div className="cursor-pointer w-10 h-10 mx-auto"><FontAwesomeIcon icon={faCloudUpload} size='2x' /></div></Link>
                        </div>
                        <p className="font-semibold my-2" onClick={addItemHandler}>Add Item</p>
                        <p className="text-sm">Add more items to your shipment</p>
                    </div>
                </div>
                <div className="flex justify-center">
                        <BackButton/>
                        <div className="pb-8 mx-4">
                        {loading ? <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2"disabled>Loading...</button>:<button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2" onClick={buttonHandler}>Next</button>}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default AddItems;