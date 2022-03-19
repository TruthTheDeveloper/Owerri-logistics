import type { NextPage } from 'next';

const DropDownInput:NextPage = () => {

    return <div className="flex flex-col lg:mx-14 xl:mx-24 2xl:mx-36">
            <label className="py-2">Select Catergory</label>
            <select className="py-2 outline-none pl-2 rounded-lg  border-slate-400 border">
                <option value="volvo">Clothing/Shoes</option>
                <option value="saab">Computer/Acessories</option>
                <option value="fiat">Document</option>
                <option value="audi">Electronics</option>
                <option value="audi">Health Product</option>
                <option value="audi">Jewelries/Accessories</option>
                <option value="audi">Other</option>
                <option>Phones</option>
            </select>
        </div>
}

export default DropDownInput;

    computer =            <option value="volvo">Hard Disk</option>
                <option value="saab">Laptop</option>
                <option value="fiat">Projector</option>

    clothing = <option value="volvo">Clothing/shoes</option>

    document = <option>Cheque</option>
    <option>Driver license</option>
    <option>German Embassy Shipment</option>
    <option></option>
    <option></option>
    <option></option>