import Container from "./Container";
import Link from "next/link";
import React from "react";

const Info = (props) => {
  return (
    <div className="bg-[url('/images/bg-blur.jpg')] bg-center bg-cover md:pt-12 pt-12">
      <Container className="pb-0 md:pb-0">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="max-w-lg text-white basis-1/2">
            <h2 className="mb-4 capitalize">We’re Making things simpler for you</h2>
            <p className="mb-4 text-lg text-slate-100">Create an account to upload all your diagnosis documents from any provider and share them with other agencies, doctors, medical specialists or respite workers. Easily manage and tag all your documents for easy search.</p>
            <p className="mb-6 text-slate-200">Get access to a digital communication book for free for a 30 day trial.</p>
            <Link href="about">
              <button className="px-4 py-2 text-blue-600 bg-white rounded-lg shadow-lg shadow-blue-600/30">Get Started</button>
            </Link>
          </div>
          <div className="flex-1 max-w-3xl overflow-hidden basis-1/2 rounded-t-xl md:-mr-28">
            <img src="./images/app-example.png" className="w-full" />
          </div>
        </div>
      </Container>
    </div >
  )
};

export default Info;
