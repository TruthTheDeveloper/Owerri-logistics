import type {NextPage} from "next";
import Image from "next/image";
import Link from 'next/link';

interface Props{
    vechicle:any;
    vechicleName:string;
    link:string;
    description:string;
}

const ChooseDeliveryMethod:NextPage<Props> = ({vechicle, vechicleName, link, description}) => {

    let deliverMethodBox = null
    if(link === "motorbike"){
        deliverMethodBox = <Link href="/select/motorbike">
        <div className="justify-self-center border-2 hover:border-green-400 cursor-pointer  w-48 h-52 mb-12 shadow-lg rounded-md ">
            <div className="mx-16 mt-4 mb-4">
                <Image
                    src={vechicle}
                    alt="text"
                    width={50}
                    height={50}
                />
            </div>
            <div className="text-center text-sm">
                <h1 className="font-medium text-xl mb-2">{vechicleName}</h1>
                    <p className="mx-2">{description}</p>
                </div>
            </div>
      </Link>
    }else if(link === "car"){
        deliverMethodBox = <Link href="/select/car">
        <div className="justify-self-center border-2 hover:border-green-400 cursor-pointer  w-48 h-52 mb-12 shadow-lg rounded-md ">
            <div className="mx-16 mt-4 mb-4">
                <Image
                    src={vechicle}
                    alt="text"
                    width={50}
                    height={50}
                />
            </div>
            <div className="text-center text-sm">
                <h1 className="font-medium text-xl mb-2">{vechicleName}</h1>
                <p className="mx-2">{description}</p>
                </div>
            </div>
      </Link>
    }else if(link == 'van'){
        deliverMethodBox = <Link href="/select/van">
        <div className="justify-self-center border-2 hover:border-green-400 cursor-pointer  w-48 h-52 mb-12 shadow-lg rounded-md ">
            <div className="mx-16 mt-4 mb-4">
                <Image
                    src={vechicle}
                    alt="text"
                    width={50}
                    height={50}
                />
            </div>
            <div className="text-center text-sm">
                <h1 className="font-medium text-xl mb-2">{vechicleName}</h1>
                <p className="mx-2">{description}</p>
                </div>
            </div>
      </Link>
    }else if(link === 'truck'){
        deliverMethodBox = <Link href="/select/truck">
        <div className="justify-self-center border-2 hover:border-green-400 cursor-pointer  w-48 h-52 mb-12 shadow-lg rounded-md ">
            <div className="mx-16 mt-4 mb-4">
                <Image
                    src={vechicle}
                    alt="text"
                    width={50}
                    height={50}
                />
            </div>
            <div className="text-center text-sm">
                <h1 className="font-medium text-xl mb-2">{vechicleName}</h1>
                <p className="mx-2">{description}</p>
                </div>
            </div>
      </Link>
    }

    return (
        <>{deliverMethodBox}</>
    )
}



export default ChooseDeliveryMethod;