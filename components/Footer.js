import Container from "./Container";
import Link from "next/link";
import React from "react";

const Footer = (props) => {
  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row md:justify-between my-12 mt-0">
        <div>
          <p>Every Kid Rox © 2022</p>
        </div>
        <div className="mb-8">
          <ul className="md:flex-row flex-col flex md:space-x-8 space-y-8 md:space-y-0 items-center">
            <li className="self-start">
              <Link href="about">Services</Link>
            </li>
            <li className="self-start">
              <Link href="about">Funding</Link>
            </li>
            <li className="self-start">
              <Link href="about">About</Link>
            </li>
            <li className="self-start">
              <Link href="about">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
};

export default Footer;
