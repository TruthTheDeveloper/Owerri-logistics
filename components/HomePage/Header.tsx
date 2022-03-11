import type { NextPage } from 'next';


const Header: NextPage = () => {
  return (
    <header>
        <nav className="flex">
            <h1 className="text-4xl font-semibold"><span className="text-green-500">Owerri</span> Logistics</h1>
            <ul className="flex justify-end">
                <li>Home</li>
                <li>Contact Us</li>
                <li>AboutUs</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;
