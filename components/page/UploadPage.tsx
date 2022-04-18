//Next
import type {NextPage} from 'next';
import { useRouter } from 'next/router';


//React
import React, {useState, useEffect, useContext} from 'react';

//Font awesome
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



//Components
import VechicleHeader from '../PageComponents/VechicleHeaders';
import BackButton from '../Buttons/BackButton';
import DropDownInput from '../Inputs/DropDownInput';
import SmallInput from '../Inputs/SmallInput';
import AuthContext from '../../context/auth-context';


const UploadPage:NextPage = () => {

    const {initialState, setInitialState} = useContext(AuthContext)

    const router = useRouter()
    const { ride } = router.query

    const [click, setClick] = useState(false)

    const [loading, setLoading] = useState(false)

    const [src, setSrc] = useState<any>(null)
    const [srcValidation, setSrcValidation] = useState('')


    const [quantityValidation, setQuantityValidation] = useState("")
    const [valueValidation, setValueValidation] = useState("")
    const [categoryValidation, setCategoryValidation] = useState("")
    const [itemValidation, setItemValidation] = useState("")
    const [weightValidation, setWeightValidation] = useState("")


    const postRequestHandler = async (ride:string, initialState: object) => {
        setLoading(true)

        
        const response = await fetch('/api/uploadItem',{
            method:'POST',
            body:JSON.stringify(initialState),
            headers:{
                'Content-Type':'application/json'
            }
        });

        const data = await response.json();

        if(ride === 'motorbike'){
            router.push("/select/motorbike/addItem")
        }else if(ride === 'car'){
            router.push("/select/car/addItem")
        }else if(ride === 'van'){
            router.push("/select/van/addItem") 
        }else if(ride === 'truck'){
            router.push("/select/truck/addItem")
        }
    }


    useEffect(() => {

        if(click){


            //motorbike
            ride === 'motorbike' && initialState.category.length > 1 && initialState.item.length > 1 && initialState.weight.length > 1 && initialState.quantity.length >= 1 && initialState.value.length >= 1 && src !== null  ?
            postRequestHandler(ride, initialState) : 
            setInitialState({...initialState,categoryError:categoryValidation,itemError:itemValidation,weightError:weightValidation, quantityError:quantityValidation,valueError:valueValidation})

            // // // car route
            ride === 'car' && initialState.category.length > 1 && initialState.item.length > 1 && initialState.weight.length > 1 && initialState.quantity.length >= 1 && initialState.value.length >= 1 && src !== null  ? 
            postRequestHandler(ride, initialState) : 
            setInitialState({...initialState,categoryError:categoryValidation,itemError:itemValidation,weightError:weightValidation, quantityError:quantityValidation,valueError:valueValidation})

            // // // van route
            ride === 'van' && initialState.category.length > 1 && initialState.item.length > 1 && initialState.weight.length > 1 && initialState.quantity.length >= 1 && initialState.value.length >= 1 && src !== null  ? 
            postRequestHandler(ride, initialState) : 
            setInitialState({...initialState,categoryError:categoryValidation,itemError:itemValidation,weightError:weightValidation, quantityError:quantityValidation,valueError:valueValidation})
            
            // // // track route
            ride === 'truck' && initialState.category.length > 1 && initialState.item.length > 1 && initialState.weight.length > 1 && initialState.quantity.length >= 1 && initialState.value.length >= 1 && src !== null  ? 
            postRequestHandler(ride, initialState) : 
            setInitialState({...initialState,categoryError:categoryValidation,itemError:itemValidation,weightError:weightValidation, quantityError:quantityValidation,valueError:valueValidation})

            setClick(false)
            
        }



            
    },[categoryValidation, itemValidation, quantityValidation, valueValidation, weightValidation, click, router])


    


    

    const buttonHandler =  async (e: { preventDefault: () => void; }) => { 
        e.preventDefault()

            setClick(true)


            // select validation
            
            initialState.category.length < 1 ? setCategoryValidation("Please select category"):
            setCategoryValidation("")


            initialState.item.length < 1 ? setItemValidation("Please select item"):
            setItemValidation("")

            initialState.weight.length < 1 ? setWeightValidation("Please select weight"):
            setWeightValidation("")

            initialState.quantity.length < 1 ? setQuantityValidation("Please enter quantity"):
            setQuantityValidation("")

            initialState.value.length < 1 ? setValueValidation("Please enter value"):
            setValueValidation("")

            src === null ? setSrcValidation("please upload image of item"):
            setSrcValidation("")



            setInitialState({...initialState, category:initialState.category, item:initialState.item, weight:initialState.weight, value:initialState.value, quantity:initialState.quantity})


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
                <div className="sm:mx-16 md:mx-24 lg:mx-32 xl:mx-44 2xl:56">
                    <div className="mx-4 my-6 pb-10">
                    <div className="text-center py-3 bg-slate-200 shadow-sm lg:mx-14 xl:mx-24 2xl:mx-36"><h1>Item Info</h1></div>
                   
                    <div className=" mx-4 my-2">
                                <DropDownInput label="Select Category"/>
                            
                            <div className="flex lg:mx-14 xl:mx-24 2xl:mx-36 ">
                                <div className="flex flex-col">
                                    <SmallInput label={'Quantity'}/>
                                </div>
                                <div className="flex flex-col mx-auto ">
                                    <SmallInput label={'Value(Naira)'}  />
                                </div>
                            </div>
                            <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36  my-8 border-slate-400 border">
                                <h1 className="text-center my-4 ">Upload Items</h1>
                                <div className='  mx-auto mb-8'>
                                    <div className="mx-10 my-6"><FontAwesomeIcon icon={faCloud} size="2x"/></div>
    
                                    <label htmlFor="file-upload" className="border-slate-500 border px-8 py-2 mb-12 cursor-pointer  rounded-md ">
                                        Upload an Image
                                    </label>
                                    <p className="text-red-500 text-center mt-2 font-semibold">{srcValidation}</p>
                                    <input id="file-upload" type="file" className="hidden" onChange={(e) => {
                                        setSrcValidation('')
                                        setInitialState({...initialState,image:window.URL.createObjectURL(e!.target!.files![0])})
                                        setSrc(window.URL.createObjectURL(e!.target!.files![0]))
                                        }}/>

                                    <div className="h-24 w-24 mx-auto mt-4" style={{
                                         backgroundImage: `url(${src})`,
                                         backgroundSize:'cover'
                                         }}> </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <BackButton/>
                            <div className="pb-8 mx-4">
                                {loading ? <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2" disabled>Loading...</button> : <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2" onClick={buttonHandler}>Next</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadPage