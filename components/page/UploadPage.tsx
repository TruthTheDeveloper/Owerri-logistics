import type {NextPage} from 'next';
import { useRouter } from 'next/router';

//React
import React, {useState, useEffect} from 'react';

//Font awesome
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Ui utils
import { Route } from '../UI/utils/route/addItem';

//Components
import VechicleHeader from '../PageComponents/VechicleHeaders';
import BackButton from '../Buttons/BackButton';
import DropDownInput from '../Inputs/DropDownInput';
import SmallInput from '../Inputs/SmallInput';
import AuthContext from '../../context/auth-context';


const UploadPage:NextPage = () => {

    const [categoryValidation, setCategoryValidation] = useState("")
    const [itemValidation, setItemValidation] = useState("")
    const [weightValidation, setWeightValidation] = useState("")
    const [quantityValidation, setQuantityValidation] = useState("")
    const [valueValidation, setValueValidation] = useState("")


    const [select, setSelect] = useState({
        defaultValue:"",
        defaultSubValue:"",
        category:'',
        item:'',
        weight:'',
        quantity:'',
        value:'',
        quantityError:'',
        valueError:'',
        categoryError:'',
        itemError:'',
        weightError:''

    })


    // useEffect(() => {
    //     // console.log(select.category, select.item, select.weight, 'for my hear only')
    //     console.log(select.category.length, select.item.length, select.weight.length, select.quantity.length, select.value.length, 'for my hear only')

    //     select.category.length < 1 &&
    //     setSelect({...select, categoryError:"Please input category", itemError:select.itemError, weightError:select.weightError, valueError:select.valueError, quantityError:select.quantityError})

    //     select.item.length < 1 &&
    //     setSelect({...select, itemError:"Please input item" , categoryError:select.itemError, weightError:select.weightError, valueError:select.valueError, quantityError:select.quantityError})

    //     select.weight.length < 1 &&
    //         setSelect({...select, weightError:"Please input weight", itemError:select.itemError, categoryError:select.itemError, valueError:select.valueError, quantityError:select.quantityError})

    //     select.value.length < 1 && 
    //         setSelect({...select, valueError:"please input value", itemError:select.itemError, categoryError:select.itemError,  quantityError:select.quantityError})

    //     select.quantity.length < 1 &&
    //     setSelect({...select, quantityError:"please input quantity", itemError:select.itemError, categoryError:select.itemError,valueError:select.valueError})
    // },[])


    const router = useRouter()
    const { ride } = router.query

    let rideRoute = null;

    const buttonHandler =  () => {
            
            
        
        // motorbike route
        ride === 'motorbike' && select.category !== "" && select.item !== "" && select.weight !== "" && select.quantity !== "" && select.value !== ""  ? 
        router.push("/select/motorbike/addItem") : 
        setSelect({...select,categoryError:'Please input category',itemError:"Please input Item",weightError:"please input weight", quantityError:"please input Quantity",valueError:"please input value"}) 

        // car route
        ride === 'car' && select.category !== "" && select.item !== "" && select.weight !== "" && select.quantity !== "" && select.value !== ""  ? router.push("/select/car/addItem") : setSelect({...select, categoryError: "Please input category", itemError:"Please input Item", weightError:"Please Input weight", quantityError:'This field is required', valueError:"This field is required"})

        // // van route
        ride === 'van' && select.category !== "" && select.item !== "" && select.weight !== "" && select.quantity !== "" && select.value !== ""   ? router.push("/select/van/addItem") : setSelect({...select, categoryError: "Please input category", itemError:"Please input Item", weightError:"Please Input weight", quantityError:'This field is required', valueError:"This field is required"})

        // // track route
        ride === 'truck' && select.category !== "" && select.item !== "" && select.weight !== "" && select.quantity !== "" && select.value !== ""   ? router.push("/select/truck/addItem") : setSelect({...select, categoryError: "Please input category", itemError:"Please input Item", weightError:"Please Input weight", quantityError:'This field is required', valueError:"This field is required"})


    }

    rideRoute = Route(ride, select)

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
                        <AuthContext.Provider value={{select, setSelect}}>
                                <DropDownInput label="Select Category"/>
                            
                            <div className="flex lg:mx-14 xl:mx-24 2xl:mx-36 ">
                                <div className="flex flex-col">
                                    <SmallInput label={'Quantity'}/>
                                </div>
                                <div className="flex flex-col mx-auto ">
                                    <SmallInput label={'Value(Naira)'}  />
                                </div>
                            </div>
                            </AuthContext.Provider>
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
                            <BackButton/>
                            <div className="pb-8 mx-4">
                                <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2" onClick={buttonHandler}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadPage