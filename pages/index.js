import { FiEdit, FiLogIn, FiShare2 } from 'react-icons/fi'

import Container from "../components/Container"
import Footer from "../components/Footer"
import Head from 'next/head'
import Info from "../components/Info"
import Link from "next/link"
import Navbar from "../components/Navbar"
import Partners from "../components/Partners"

export default function Home () {
  return (
    <div>
      <Head>
        <title>Every Kid Rox | Knowledge base for parents</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="bg-[url('../images/parent-child.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-opacity-25 bg-gradient-to-r from-cyan-500/50 to-blue-600/50"></div>
        <Container>
          <div className="relative">
            <div className="z-20 max-w-lg py-8 mx-auto text-center text-white md:py-36">
              <h1 className="mb-6">Wonderfully Complex</h1>
              <p className="mb-6 text-slate-200">Helping Parents who care for kids with complex needs, navigate their support system to give their children the best care possible.</p>
              <Link href="/about">
                <button className="px-4 py-2 text-blue-600 bg-white rounded-lg shadow-lg shadow-blue-600/30">Get connected</button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <Partners />
      </Container>
      <Info />
      <Container>
        <div className="mt-8 mb-16 text-center md:mt-0">
          <h2 className="mb-2">Simplifying the tedious</h2>
          <p>To give you more time for the important things</p>
        </div>
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="space-y-3 basis-1/3">
            <div className="flex items-center justify-center w-12 h-12 shadow-lg bg-cyan-500 shadow-cyan-500/40 rounded-xl">
              <FiLogIn size={20} className="text-white" />
            </div>
            <h4 className="font-sans font-medium text-cyan-600">Sign up</h4>
            <h3 className="text-xl">Signing up with an account only takes seconds</h3>
            <p>Dolor anim id anim consequat. Consequat adipisicing reprehenderit elit esse ex proident consectetur ea occaecat. Nostrud laborum quis deserunt ut minim consectetur voluptate nostrud aliquip et. </p>
          </div>
          <div className="space-y-3 basis-1/3">
            <div className="flex items-center justify-center w-12 h-12 shadow-lg bg-sky-600 shadow-sky-500/40 rounded-xl">
              <FiEdit size={20} className="text-white" />
            </div>
            <h4 className="font-sans font-medium text-sky-600">Fill</h4>
            <h3 className="text-xl">Enter your documents <i>ONCE</i></h3>
            <p>Dolor anim id anim consequat. Consequat adipisicing reprehenderit elit esse ex proident consectetur ea occaecat. Nostrud laborum quis deserunt ut minim consectetur voluptate nostrud aliquip et. </p>
          </div>
          <div className="space-y-3 basis-1/3">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-700 shadow-lg shadow-blue-500/40 rounded-xl">
              <FiShare2 size={20} className="text-white" />
            </div>
            <h4 className="font-sans font-medium text-blue-600">Share</h4>
            <h3 className="text-xl">Easily share your documents with one click</h3>
            <p>Dolor anim id anim consequat. Consequat adipisicing reprehenderit elit esse ex proident consectetur ea occaecat. Nostrud laborum quis deserunt ut minim consectetur voluptate nostrud aliquip et. </p>
          </div>
        </div>
      </Container>
      <div className="bg-[url('/images/banner.jpg')] bg-center bg-cover py-40 relative px-8">
        <div className="bg-[url('/images/bg-blur.jpg')] bg-center bg-cover pt-40 absolute inset-0 z-10 opacity-90"></div>
        <div className="relative z-20 max-w-6xl mx-auto">
          <div className="z-20 max-w-lg mx-auto text-center text-white">
            <h2 className="mb-4 capitalize">Get started today</h2>
            <p className="mb-8 text-white">Excepteur culpa dolor cupidatat eiusmod elit. Ad velit in elit quis dolore dolore dolore ullamco dolor ex.</p>
            <button className="px-4 py-2 text-blue-600 capitalize bg-white rounded-lg shadow-lg shadow-white/30">Let's get going</button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <Footer />
      </div>
    </div>
  )
}
