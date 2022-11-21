import { FiMenu } from 'react-icons/fi';
import Link from "next/link";
import React from "react";

const Navbar = (props) => {
  return (
    <div className="z-30 max-w-6xl px-8 pt-0 pb-2 mx-auto md:pt-0 md:pb-8">
      <div className="flex items-center justify-between max-w-6xl mx-auto mt-6 md:mt-8">
        <div className="flex md:space-x-4">
          <div className="relative flex items-center">
            {/* <Image
              className="w-20 !relative"
              src="/svg/icon.svg"
              layout="fill"
            /> */}
          </div>
          <h1 className="font-serif text-lg font-semibold text-blue-600 md:text-2xl md:ml-2">Every Kid Rox</h1>
        </div>
        <div className="block md:hidden">
          <FiMenu />
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="about">Services</Link>
            </li>
            <li>
              <Link href="about">Funding</Link>
            </li>
            <li>
              <Link href="about">About</Link>
            </li>
            <li>
              <Link href="about">Contact</Link>
            </li>
            <li>
              <Link href="about">
                <button className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow-lg shadow-blue-600/30">Open App</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
