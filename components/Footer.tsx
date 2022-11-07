import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Navlinks } from "./Navbar";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
const ContactForm = dynamic(() => import('./ContactForm'))

// Defines the footer layout
export default function Footer() {
  return (
    <div className="min-h-[585px]">
      <div className="flex p-8 flex-col lg:flex-row  lg:items-start overflow-hidden">
        <div className="flex-grow flex flex-col">
          <div className="overflow-hidden h-24 flex  items-center">
            <div className="w-56 md:w-72">
              <Image
                src={"/ndc-logo-white.png"}
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
                className="-translate-x-4"
                alt={"ndc logo"}
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col lg:flex-row">
            <div>
              <h1 className="font-['Ethnocentric'] text-lg md:text-2xl">Explore</h1>
              <ul className="footerNavList">
                <Navlinks />
              </ul>
            </div>
            <div className="relative lg:left-32 space-y-8 mt-8 lg:mt-0">
              <h1 className="font-['Ethnocentric'] text-lg md:text-2xl">Connect</h1>
              <BsFacebook style={{ marginTop: 25 }} size={32} />
              <BsTwitter style={{ marginTop: 25 }} size={32} />
              <BsLinkedin style={{ marginTop: 25 }} size={32} />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-end mt-16 lg:mt-0 ">
          <ContactForm />
        </div>
      </div>
      <div className="flex pb-4 px-8 items-center overflow-hidden h-20">
        <div className="text-[#f5f5f5] text-sm">
          <p>4657 Industrial Park Drive, Kincheloe, MI 49788</p>
          <p>906-240-1180</p>
          <p>&copy; {new Date().getFullYear()} Anchor Systems</p>
        </div>
        <div className="flex-grow"/>
        <div className="">
          <Image src={'/anchor-white.png'} width={136} height={136} draggable={false} alt=""/>
        </div>
      </div>
    </div>
  );
}
