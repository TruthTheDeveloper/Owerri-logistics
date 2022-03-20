import type { NextPage } from 'next';
import {useContext} from 'react';
import SimpleInput from '../Inputs/SimpleInput';
import Select from 'react-select';
import AuthContext from '../../context/auth-context';

interface Props{
    options: any,
}


const WeightDropDown:NextPage<Props> = ({options}) => {

    const contextData = useContext(AuthContext)

    const weightHandler = (e:any) => {
        contextData.weight = e.value
    }

    return <>
       <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
            {options !== 'Other' && <label className="py-2">Select Weight</label>}
                <option value="" defaultValue='true' hidden className="text-sm font-normal" >
                </option>
                {options === 'Other'? <SimpleInput label="Input Weights"/> : <Select 
                    defaultValue={contextData.weight}
                    onChange={weightHandler}
                    options={options}
                   />
                }
        </div>
    </>
}

export default WeightDropDown;