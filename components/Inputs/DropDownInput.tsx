import type { NextPage } from 'next';
import {useContext} from 'react';
import SubDropDown from '../Inputs/SubDropDown';
import DefaultDropDown from '../Inputs/DefaultDropDown';
import Select from 'react-select';
import AuthContext from '../../context/auth-context';
interface Props{
    label: string,
}

const DropDownInput:NextPage<Props> = ({label}) => {
    const {select, setSelect} = useContext(AuthContext)

    // const [select, setSelect] = useState<string|object>({})

    const categoryHandler = (e: { value: string; }) => {
        setSelect({...select, category: e.value})
        setSelect({...select, categoryError:""})
    }


    
    

    const options = [
        {
            // key:1,
            label: "Clothing/Shoes",
            value: "Clothing/Shoes",
        },
        {
            // key:2,
            label: "Computer/Acessories",
            value: "Computer/Acessories",
        },
        {   
            // key:3,
            label: "Document",
            value: "Document",
        },
        {   
            // key:4,
            label: "Food",
            value: "Food",
        },
        {
            // key:5,
            label: "Electronics",
            value: "Electronics",
        },
        {   
            // key:6,
            label: "Health",
            value: "Health",
        },
        {
            // key:8,
            label: "Other",
            value: "Other",
        },
        {
            // key:9,
            label: "Phones",
            value: "Phones",
        },
    ];


    const computer = [
        {
        //   key:1,
          label:"Hard Disk",
          value:"Hard Disk"
        },
        {
            // key:2,
            label:"Laptop",
            value:"Laptop"
        },
        {
            // key:3,
            label:"Projector",
            value:"Projector"
        },
  ]

  const document = [
        {
        // key:1,
        label:"Cheque",
        value:"Cheque"
        },
        {
            // key:2,
            label:"Driver license",
            value:"Driver license"
        },
        {
            // key:3,
            label:"German Embassy Shipment",
            value:"German Embassy Shipment"
        }
    ]


    const electronics = [
            {
                // key:1,
                label:"Camera",
                value:"Camera"
            },

            {
                // key:2,
                label:"Blender",
                value:"Blender"
            },
    ]

    const food = [
        {
            // key:1,
            label:"Beans",
            value:"Beans",
        },
        {
            // key:2,
            label:"Garri",
            value:"Garri",
        },
        {
            // key:3,
            label:"otherFoodStuff",
            value:"otherFoodStuff",
        },
        {
            // key:4,
            label:"Rice",
            value:"Rice",
        },
    ]

    const health = [
        {
            // key:1,
            label:"Elphimo Pharmacy",
            value:"Elphimo Pharmacy"
        }
    ]

    const phones = [
        {
            // key:1,
            label:"High value phone",
            value:"High value phone"
        },

        {
            // key:2,
            label:"I pad",
            value:"I pad"
        },

        {
            // key:3,
            label:"Low value phone",
            value:"Low value phone"
        }
    ]

    const clothing = [
        {
            // key:1,
            label:'Clothing',
            value:'clothing',
        },

        {
            // key:2,
            label:'Shoe',
            value:'Shoe',
        },
    ]

    
    let subDropDown = <DefaultDropDown  label="Select Item"/>

        if(select.category == "Clothing/Shoes"){
            subDropDown =   <SubDropDown options={clothing} index="Clothing/Shoes" />
        }else if(select.category === "Computer/Acessories"){
            subDropDown = <SubDropDown options={computer} index="Computer/Acessories"/>
        }else if(select.category === ""){
            subDropDown = <SubDropDown options={computer} index="Computer/Acessories"/>
        }else if(select.category === "Document"){
            subDropDown = <SubDropDown options={document} index="Document"/>
        }else if(select.category === "Food"){
            subDropDown = <SubDropDown options={food} index="Food"/>
        }else if(select.category === "Electronics"){
            subDropDown = <SubDropDown options={electronics} index="Electronics" />
        }else if(select.category === "Health"){
            subDropDown = <SubDropDown options={health} index="Health"/>
        }else if(select.category === "Phones"){
            subDropDown = <SubDropDown options={phones} index="Phones"/>
        }else if(select.category === "Other"){
            subDropDown = <SubDropDown options={'Other'} index="Other"/>
        }
      

    return <>
        <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
            <label className="py-2">{label}</label>
            <Select
                defaultValue={select}
                onChange={categoryHandler}
                options={options}
            />

            <p className="text-red-500 text-sm font-semibold">{select.categoryError}</p>
        </div>
        {subDropDown}
    </>
}

export default DropDownInput;