import Container from "./Container";
import { FiMenu } from 'react-icons/fi';
import Link from "next/link";
import React from "react";

const Header = (props) => {
  return (
    <Container className="z-30 pt-0 md:pt-0">
      <div className="max-w-6xl mx-auto mt-6 md:mt-8 flex justify-between items-center">
        <div className="flex md:space-x-4">
          <div className="relative flex items-center">
            {/* <Image
              className="w-20 !relative"
              src="/svg/icon.svg"
              layout="fill"
            /> */}
          </div>
          <h1 className="text-lg md:text-2xl font-serif font-semibold md:ml-2 text-blue-600">Every Kid Rox</h1>
        </div>
        <div className="md:hidden block">
          <FiMenu />
        </div>
        <div className="md:block hidden">
          <ul className="flex space-x-8 items-center">
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
                <button className="px-4 py-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/30 text-white">Open App</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
};

export default Header;
