import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import {useState} from 'react';

import close from '../../../public/assets/close.png';
import menu from '../../../public/assets/menu.png';


const Navbar: NextPage = () => {

    const [openNav, setOpenNav] = useState(false)

    return (
        <nav className="flex flex-col md:flex-row justify-between shadow-md py-3 lg:pl-5 sticky bg-white z-[99999]">
            <div className="flex justify-between">
                <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold mt-2 mx-2"><span className="text-green-500">Owerri</span> Logistics</h1>
                {openNav ? <div className="h-6 w-6 mt-2 mr-2 md:hidden" onClick={() => setOpenNav((prev) => !prev)}>
                    <Image src={close} />
                </div>:<div className="h-6 w-6 mt-2 mr-2 md:hidden" onClick={() => setOpenNav((prev) => !prev)}>
                    <Image src={menu} />
                </div>}
            </div>
            <ul className="md:flex md:mr-24 md:mt-2 hidden">
                <li className="md:text-lg md:mx-4"><Link href="/">Home</Link></li>
                <li className="md:text-lg md:mx-4"><Link href="/">Track Item</Link></li>
                <li className="md:text-lg md:mx-4"><Link href="/">Contact Us</Link></li>
                <li className="md:text-lg md:mx-4"><Link href="/">About Us</Link></li>
            </ul>

            {openNav && <ul className="ml-2 pt-3 md:hidden">
                <li className="cursor-pointer my-1"><Link href="/">Home</Link></li>
                <li className="cursor-pointer my-1"><Link href="/">Track Item</Link></li>
                <li className="cursor-pointer my-1"><Link href="/">Contact Us</Link></li>
                <li className="cursor-pointer my-1"><Link href="/">About Us</Link></li>
            </ul>}
        </nav>
    )
}

export default Navbar;
