import Link from 'next/link'
export const Route = (url:string | string[] | undefined) => {
    if(url === 'motorbike'){
        return <Link href="/select/motorbike/review">
                    <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2">Next</button>
                </Link>
    }else if(url === 'car'){
        return <Link href="/select/car/review">
                    <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2">Next</button>
                </Link>
    }else if(url === 'van'){
        return <Link href="/select/van/review">
                <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2">Next</button>
                </Link>
    }else if(url === 'truck'){
        return <Link href="/select/truck/review">
                <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2">Next</button>
                </Link>
    }
}
