import type { NextPage } from 'next';


const Header: NextPage = () => {
  return (
    <header>
        <nav>
            <h1 className="bg-red-400">Owerri<span>Logistics</span></h1>
            <ul>
                <li>Home</li>
                <li>Contact Us</li>
                <li>AboutUs</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;
