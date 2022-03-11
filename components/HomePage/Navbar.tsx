import type { NextPage } from 'next';


const Navbar: NextPage = () => {
  return (
      <nav className="flex justify-between shadow-md py-3">
          <h1 className="text-4xl font-semibold mt-2 mx-2"><span className="text-green-500">Owerri</span> Logistics</h1>
          <ul className="flex mr-24 mt-2">
              <li className="text-lg mx-4"><a href="#">Home</a></li>
              <li className="text-lg mx-4"><a href="#">Contact Us</a></li>
              <li className="text-lg mx-4"><a href="#">About Us</a></li>
          </ul>
      </nav>
  )
}

export default Navbar;
