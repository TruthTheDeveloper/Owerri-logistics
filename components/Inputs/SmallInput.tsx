import type { NextPage } from 'next';
import AuthContext from '../../context/auth-context';
import {useContext} from 'react';

interface Props {
    label:string,
    
}

const SmallInput:NextPage<Props> = ({label}) => {

    const {initialState, setInitialState} = useContext(AuthContext)

    const smallInputHandler = (e:any) => {
        if(label ===  "Quantity"){

                setInitialState({...initialState, quantity:e.target.value, quantityError:""})
        }else{
            setInitialState({...initialState, value:e.target.value, valueError:""})
        }
    }

    


    return  <>
        <label className="py-2">{label}</label>
        <input className="py-2 my-2 outline-none pl-2 rounded-lg w-36  border-slate-400 border" onChange={smallInputHandler} pattern="\d*" type="number"/>
        {label === "Quantity" ? <p className="text-red-500 text-sm font-semibold">{initialState.quantityError}</p> : <p className="text-red-500 text-sm font-semibold">{initialState.valueError}</p>}
    </>
}

export default SmallInput;