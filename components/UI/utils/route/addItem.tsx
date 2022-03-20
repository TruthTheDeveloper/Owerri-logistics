import Link from 'next/link'
export const Route = (url:string | string[] | undefined, select:any) => {
    const {category, item, weight} = select;
    if(url === 'motorbike' && category !== "" && item !== "" && weight !== ""){
        return <Link href="/select/motorbike/addItem">
                    <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2">Next</button>
                </Link>
    }else if(url === 'car' && category !== "" && item !== "" && weight !== ""){
        return <Link href="/select/car/addItem">
                    <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2">Next</button>
        </Link>
    }else if(url === 'van' && category !== "" && item !== "" && weight !== ""){
        return <Link href="/select/van/addItem">
                <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2">Next</button>
                </Link>
    }else if(url === 'truck' && category !== "" && item !== "" && weight !== ""){
        return <Link href="/select/truck/addItem">
                <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2">Next</button>
                </Link>
    }
}
