import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Navlinks } from "./Navbar";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
const ContactForm = dynamic(() => import('./ContactForm'))

const redirect = () => {
  window.location.href = 'https://www.anchorsystems.tech/';
}

// Defines the footer layout
export default function Footer() {
  return (
    <>
    <div className="absolute h-16 -translate-y-16 bg-gradient-to-b from-transparent to-[#0b0a0a] w-full">
      
    </div>
    <footer className="min-h-[585px]">
      <div className="flex p-8 flex-col lg:flex-row  lg:items-start overflow-hidden">
        <div className="flex-grow flex flex-col">
          <div className="overflow-hidden h-24 flex  items-center">
            <div className="relative w-56 md:w-72 z-50 h-full">
              <Image
                  src={"/ndc-logo-white.png"}
                  alt=""
                  fill
                  className="object-contain -translate-x-4"
                />
            </div>
          </div>
          <div className="mt-8 flex flex-col lg:flex-row">
            <div>
              <h1 className="font-['Ethnocentric'] text-lg md:text-xl">Explore</h1>
              <ul className="footerNavList">
                <Navlinks />
              </ul>
            </div>
            <div className="relative lg:left-32 space-y-8 mt-8 lg:mt-0">
              <h1 className="font-['Ethnocentric'] text-lg md:text-xl">Connect</h1>
              <BsFacebook className="social-icon" style={{ marginTop: 25 }} size={32} />
              <BsTwitter className="social-icon" style={{ marginTop: 25 }} size={32} />
              <BsLinkedin className="social-icon" style={{ marginTop: 25 }} size={32} />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-end mt-16 lg:mt-0 ">
          <ContactForm />
        </div>
      </div>
      <div className="flex pb-4 px-8 items-center overflow-hidden h-32 md:h-20">
        <div className="text-[#f5f5f5] text-sm">
          <p>4657 Industrial Park Drive, Kincheloe, MI 49788</p>
          <p>906-240-1180</p>
          <p>&copy; {new Date().getFullYear()} Anchor Systems</p>
        </div>
        <div className="flex-grow"/>
        <div onClick={redirect} className="hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer active:scale-95">
          <Image src={'/anchor-white.png'} width={136} height={136} draggable={false} alt=""/>
        </div>
      </div>
    </footer>
    </>
  );
}
