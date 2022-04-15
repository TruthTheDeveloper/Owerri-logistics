import type { NextPage } from 'next';
import {useContext, useState, useEffect} from 'react';
import SimpleInput from '../Inputs/SimpleInput';
import Select from 'react-select';
import AuthContext from '../../context/auth-context';

interface Props{
    options: any,
}


const WeightDropDown:NextPage<Props> = ({options}) => {

    const {initialState, setInitialState} = useContext(AuthContext)
    const [selectedWeight,setSelectedWeight]=useState('test')

    const weightHandler = (e:{ value: string; }) => {
        setSelectedWeight(e.value)
        setInitialState({...initialState, weight: e.value, weightError:""})

    }


    useEffect(()=>{
        setSelectedWeight('select weight')
    },[initialState.category])



    return <>
       <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
            {options !== 'Other' && <label className="py-2">Select Weight</label>}
                <option value="" defaultValue='true' hidden className="text-sm font-normal" >
                </option>
                {options === 'Other'? <SimpleInput label="Input Weights"/> : <Select
                    // value={select.item}
                    // placeholder={'Select item'}
                    // onChange={(item)=>console.log(item,' elected')}
                    onChange={weightHandler}
                    value={selectedWeight}
                     placeholder={selectedWeight}
                    options={options}
                    isSearchable
                   />
                }

                <p className="text-red-500 text-sm font-semibold">{initialState.weightError}</p>
        </div>
    </>
}

export default WeightDropDown;