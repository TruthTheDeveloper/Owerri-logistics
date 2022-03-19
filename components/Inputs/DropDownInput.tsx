import type { NextPage } from 'next';
import {useState} from 'react';
import SubDropDown from '../Inputs/SubDropDown';
import DefaultDropDown from '../Inputs/DefaultDropDown';

interface Props{
    label: string
}

const DropDownInput:NextPage<Props> = ({label}) => {

    const [selected, setSelected] = useState<string>('')

    const options = [
        {
            key:1,
            label: "Clothing/Shoes",
            value: "Clothing/Shoes",
        },
        {
            key:2,
            label: "Computer/Acessories",
            value: "Computer/Acessories",
        },
        {   
            key:3,
            label: "Document",
            value: "Document",
        },
        {   
            key:4,
            label: "Food",
            value: "Food",
        },
        {
            key:4,
            label: "Electronics",
            value: "Electronics",
        },
        {   
            key:5,
            label: "Health",
            value: "Health",
        },
        {
            key:6,
            label: "Jewelries",
            value: "Jewelries",
        },
        {
            key:7,
            label: "Other",
            value: "Other",
        },
        {
            key:8,
            label: "Phones",
            value: "Phones",
        },
      ];

      const computer = [
            {
              key:1,
              label:"Hard Disk",
              value:"Hard Disk"
            },
            {
                key:2,
                label:"Laptop",
                value:"Laptop"
            },
            {
                key:3,
                label:"Projector",
                value:"Projector"
            },
      ]

      const document = [
        {
          key:1,
          label:"Cheque",
          value:"Cheque"
        },
        {
            key:2,
            label:"Driver license",
            value:"Driver license"
        },
        {
            key:3,
            label:"German Embassy Shipment",
            value:"German Embassy Shipment"
        },

    ]

    const electronics = [
            {
                key:1,
                label:"Camera",
                value:"Camera"
            },

            {
                key:2,
                label:"Blender",
                value:"Blender"
            },
    ]

    const food = [
        {
            key:1,
            label:"Beans",
            value:"Beans",
        },
        {
            key:2,
            label:"Garri",
            value:"Garri",
        },
        {
            key:3,
            label:"otherFoodStuff",
            value:"otherFoodStuff",
        },
        {
            key:4,
            label:"Rice",
            value:"Rice",
        },
    ]

    const health = [
        {
            key:1,
            label:"Elphimo Pharmacy",
            value:"Elphimo Pharmacy"
        }
    ]

    const phones = [
        {
            key:1,
            label:"High value phone",
            value:"High value phone"
        },

        {
            key:2,
            label:"I pad",
            value:"I pad"
        },

        {
            key:3,
            label:"Low value phone",
            value:"Low value phone"
        }
    ]

    const clothing = [
        {
            key:1,
            label:'Clothing',
            value:'clothing',
        },

        {
            key:2,
            label:'Shoe',
            value:'Shoe',
        },
    ]

    let subDropDown = <DefaultDropDown  label="Select Item"/>

    if(selected === "Clothing/Shoes"){
        subDropDown =   <SubDropDown options={clothing} />
    }else if(selected === "Computer/Acessories"){
        subDropDown = <SubDropDown options={computer} />
    }else if(selected === "Document"){
        subDropDown = <SubDropDown options={document} />
    }else if(selected === "Food"){
        subDropDown = <SubDropDown options={food} />
    }else if(selected === "Electronics"){
        subDropDown = <SubDropDown options={electronics} />
    }else if(selected === "Health"){
        subDropDown = <SubDropDown options={health} />
    }else if(selected === "Phones"){
        subDropDown = <SubDropDown options={phones} />
    }else if(selected === "other"){
        subDropDown = <SubDropDown options={'other'}/>
    }
      

    return <>
        <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
            <label className="py-2">{label}</label>
            <select className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border" onChange={(e) => setSelected(e.target.value)}>
                <option value="" defaultValue='true' hidden className="text-sm font-normal" >
                </option>
                {options.map((option) => 
                    <option key={option.key} value={option.value}>{option.label}</option>
                )}
            </select>
        </div>
        <h1>Hello product</h1>
        {subDropDown}
    </>
}

export default DropDownInput;