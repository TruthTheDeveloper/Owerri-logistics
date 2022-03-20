import type {NextPage} from 'next';
import AddressInput from '../../components/Inputs/AddressInput';
import PhoneNumberInput from '../../components/Inputs/PhoneNumberInput';
import Inputs from '../Inputs/Inputs';

interface Props{
    formType: string,
}

const Form: NextPage<Props> = ({formType}) => {

    return (
        <div className="mx-4 my-6">
            <div className="text-center py-3 bg-slate-200 shadow-sm lg:mx-14 xl:mx-24 2xl:mx-36"><h1>{formType}</h1></div>
            <div className=" mx-4 my-2">
                
                <AddressInput label="Address Line 1"/>
                <AddressInput label="Address Line 2"/>
                <Inputs label="Name"/>
                <PhoneNumberInput/>
                <Inputs label="Location"/>
            </div>
        </div>
    )
}

export default Form
