import type { NextPage } from 'next';
import {useEffect, useState} from 'react';
import SubDropDown from '../Inputs/SubDropDown';

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
          label: "Document",
          value: "Document",
        },
        {
          label: "Food",
          value: "Food",
        },
        {
            label: "Electronics",
            value: "Electronics",
        },
        {
            label: "Health",
            value: "Health",
        },
        {
            label: "Jewelries",
            value: "Jewelries",
        },
        {
            label: "Other",
            value: "Other",
        },
        {
            label: "Phones",
            value: "Phones",
        },
      ];

      const computer = [
            {
              label:"Hard Disk",
              value:"Hard Disk"
            },
            {
                label:"Laptop",
                value:"Laptop"
            },
            {
                label:"Projector",
                value:"Projector"
            },
      ]

      const document = [
        {
          label:"Cheque",
          value:"Cheque"
        },
        {
            label:"Driver license",
            value:"Driver license"
        },
        {
            label:"German Embassy Shipment",
            value:"German Embassy Shipment"
        },

    ]

    const electronics = [
            {
                label:"Camera",
                value:"Camera"
            },

            {
                label:"Blender",
                value:"Blender"
            },
    ]

    const food = [
        {
            label:"Beans",
            value:"Beans",
        },
        {
            label:"Garri",
            value:"Garri",
        },
        {
            label:"otherFoodStuff",
            value:"otherFoodStuff",
        },
        {
            label:"Rice",
            value:"Rice",
        },
    ]

    const health = [
        {
            label:"Elphimo Pharmacy",
            value:"Elphimo Pharmacy"
        }
    ]

    const phones = [
        {
            label:"High value phone",
            value:"High value phone"
        },

        {
            label:"I pad",
            value:"I pad"
        },

        {
            label:"Low value phone",
            value:"Low value phone"
        }
    ]

    const clothing = [
        {
            label:'Clothing',
            value:'clothing',
        },

        {
            label:'Shoe',
            value:'Shoe',
        },
    ]

    let subDropDown = null

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

    }

    useEffect(() => {
        console.log(selected)
    },[selected])

    const selectHandler = (e:any) => {
        setSelected(e.target.value)
    }
      

    return <>
        <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
            <label className="py-2">{label}</label>
            <select className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border" onChange={(e) => setSelected(e.target.value)}>
                <option value="" defaultValue='true' hidden className="text-sm font-normal" >
                </option>
                {options.map((option) => 
                    <option value={option.value}>{option.label}</option>
                )}
            </select>
        </div>
        {subDropDown}
    </>
}

export default DropDownInput;