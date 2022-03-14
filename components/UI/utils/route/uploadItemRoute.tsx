import Link from 'next/link'
export const Route = (url:any) => {
    if(url === 'motorbike'){
        return <Link href="motorbike/uploadItem">
                        <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2">Next</button>
                    </Link>
    }else if(url === 'car'){
        return <Link href="car/uploadItem">
                        <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2">Next</button>
                    </Link>
    }else if(url === 'van'){
        return <Link href="van/uploadItem">
                        <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2">Next</button>
                    </Link>
    }else if(url === 'truck'){
        return <Link href="truck/uploadItem">
                        <button className="bg-green-400  rounded-md flex  mx-auto text-white px-8 py-2">Next</button>
                    </Link>
    }
}
