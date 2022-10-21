import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Slideshow from "../components/Slideshow";
import SplashView from "../components/SplashView";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import gsap from "gsap";
import PanelHelper from "../components/PanelHelper";
import Switcher from "../components/Switcher"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const Content = ({ panelHeader }) => {
  return (
    <div className="flex flex-col items-center  panel-content">
      <div className="font-['Ethnocentric'] text-3xl md:text-8xl mb-4">
        {panelHeader}
      </div>
      <p className="w-full md:w-[600px] text-sm px-12 md:px-0 md:text-2xl text-center ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Consectetur
        adipiscing elit duis tristique sollicitudin. Et tortor at risus viverra
        adipiscing at in tellus. Suspendisse sed nisi lacus sed viverra tellus
        in hac. In hendrerit gravida rutrum quisque non tellus.
      </p>
    </div>
  );
};



const RDTEContent = () => {
  return (
    <>
      <div className="w-full flex justify-center overflow-hidden">
        <Switcher>
          <div className="flex flex-col items-center space-y-2 switcher-item">
            <div className="relative w-[120px] md:w-[343px] aspect-square">
              <Image src="/panel-imgs/capabilities/rdteone.png" layout={"fill"} alt={'rtde'} />
            </div>
            <p className="font-['Ethnocentric'] text-xl">Research</p>
          </div>
          <div className="flex flex-col items-center space-y-2 switcher-item">
            <div className="relative w-[120px] md:w-[343px] aspect-square">
              <Image src="/panel-imgs/capabilities/rdtetwo.png" layout={"fill"} alt={'rtde'}/>
            </div>
            <p className="font-['Ethnocentric'] text-xl">Development</p>
          </div>
          <div className="flex flex-col items-center space-y-2 switcher-item">
            <div className="relative w-[120px] md:w-[343px] aspect-square">
              <Image
                src="/panel-imgs/capabilities/rdtethree.png"
                layout={"fill"}
                alt={'rtde'}
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl">Testing</p>
          </div>
          <div className="flex flex-col items-center space-y-2 switcher-item">
            <div className="relative w-[120px] md:w-[343px] aspect-square">
              <Image
                src="/panel-imgs/capabilities/rdtefour.png"
                layout={"fill"}
                alt={'rtde'}
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl">Evaluation</p>
          </div>
        </Switcher>
      </div>
      <div className="z-50 h-16 w-full relative ">
        <Image src="/light-bar-white.png" layout="fill" alt={'light bar'}/>
      </div>
      <p className="w-full md:w-[700px] text-md md:text-xl text-center px-12 md:px-4  panel-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Consectetur
        adipiscing elit duis tristique sollicitudin. Et tortor at risus viverra
        adipiscing at in tellus. Suspendisse sed nisi lacus sed viverra tellus
        in hac. In hendrerit gravida rutrum quisque non tellus.
      </p>
    </>
  );
};

const RapidContent = () => {
  return (
    <div className="self-center">
      <div className="grid md:flex space-x-24 items-center">
        <Switcher>
          <div className="switcher-item w-full flex-grow flex flex-col items-center">
            <div className="relative bottom-0 w-[173px] aspect-square ">
              <Image
                src="/panel-imgs/capabilities/rapidone.png"
                alt={'Develop'}
                layout={"fill"}
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl">Development</p>
          </div>
          <div className="switcher-item w-full flex-grow flex flex-col items-center">
            <div className="relative w-[173px] aspect-square">
              <Image
                src="/panel-imgs/capabilities/rapidtwo.png"
                alt={'Develop'}
                layout={"fill"}
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl">Delivery</p>
          </div>
        </Switcher>
      </div>
      <div className="z-50 h-16 w-full relative ">
        <Image src="/light-bar-white.png" layout="fill" alt={'Develop'}/>
      </div>
      <p className="w-full px-12 md:px-4 md:w-[700px] text-md md:text-2xl text-center  panel-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Consectetur
        adipiscing elit duis tristique sollicitudin. Et tortor at risus viverra
        adipiscing at in tellus. Suspendisse sed nisi lacus sed viverra tellus
        in hac. In hendrerit gravida rutrum quisque non tellus.
      </p>
    </div>
  );
};

const DevelopmentContent = () => {
  return (
    <>
      <div className="grid md:flex justify-center space-x-24 overflow-hidden w-full h-full ">
        <Switcher duration={3000}> 
        <div className="flex flex-col items-center space-y-2 justify-center switcher-item">
          <div className="relative w-[163px] aspect-square ">
            <Image
              src="/panel-imgs/capabilities/developone.png"
              layout={"fill"}
              alt={'Develop'}
            />
          </div>
          <p className="font-['Ethnocentric'] text-xl mb-2">Innovation</p>
          <p className="w-[250px] text-md md:text-2xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 justify-center switcher-item">
          <div className="relative w-[203px] aspect-square">
            <Image
              src="/panel-imgs/capabilities/developtwo.png"
              layout={"fill"}
              alt={'Develop'}
            />
          </div>
          <p className="font-['Ethnocentric'] text-xl mb-2">Engineering</p>
          <p className="w-[250px] text-md md:text-2xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 justify-center switcher-item">
          <div className="relative w-[173px] aspect-square">
            <Image
              src="/panel-imgs/capabilities/developthree.png"
              layout={"fill"}
              alt={'Develop'}
            />
          </div>
          <p className="font-['Ethnocentric'] text-xl mb-2">Manufacturing</p>
          <p className="w-[250px] text-md md:text-2xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing
          </p>
        </div>
        </Switcher>
      </div>
      <div className="w-full flex flex-col  absolute bottom-12 md:bottom-16">
        <p className="mx-auto text-lg md:text-5xl tracking-widest font-thin  translate-y-6 md:translate-y-0">
          DEVELOPMENT
        </p>
        <div className="z-50 h-16 w-full relative">
          <Image src="/light-bar.png" layout="fill"  alt={'light bar'}/>
        </div>
      </div>
    </>
  );
};

const DeliveryContent = () => {
  return (
    <>
      <div className="grid md:flex justify-center space-x-24 overflow-hidden w-full h-full ">
        <Switcher duration={3000}> 
        <div className="flex flex-col items-center space-y-2 justify-center switcher-item">
          <div className="relative w-[163px] aspect-square ">
            <Image
              src="/panel-imgs/capabilities/deliveryone.png"
              layout={"fill"}
              alt={'Develop'}
            />
          </div>
          <p className="font-['Ethnocentric'] text-xl mb-2">Air</p>
          <p className="w-[250px] text-md md:text-2xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 justify-center switcher-item">
          <div className="relative w-[203px] aspect-square">
            <Image
              src="/panel-imgs/capabilities/deliverytwo.png"
              layout={"fill"}
              alt={'Develop'}
            />
          </div>
          <p className="font-['Ethnocentric'] text-xl mb-2">Land</p>
          <p className="w-[250px] text-md md:text-2xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 justify-center switcher-item">
          <div className="relative w-[173px] aspect-square">
            <Image
              src="/panel-imgs/capabilities/deliverythree.png"
              layout={"fill"}
              alt={'Develop'}
            />
          </div>
          <p className="font-['Ethnocentric'] text-xl mb-2">Maritime</p>
          <p className="w-[250px] text-md md:text-2xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 justify-center switcher-item">
          <div className="relative w-[173px] aspect-square">
            <Image
              src="/panel-imgs/capabilities/deliveryfour.png"
              layout={"fill"}
              alt={'Develop'}
            />
          </div>
          <p className="font-['Ethnocentric'] text-xl mb-2">Rail</p>
          <p className="w-[250px] text-md md:text-2xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing
          </p>
        </div>
        </Switcher>
      </div>
      <div className="w-full flex flex-col  absolute bottom-12 md:bottom-16">
        <p className="uppercase mx-auto text-lg md:text-5xl tracking-widest font-thin translate-y-6 md:translate-y-0">
          Delivery
        </p>
        <div className="z-50 h-16 w-full relative">
          <Image src="/light-bar.png" layout="fill"  alt={'light bar'}/>
        </div>
      </div>
    </>
  );
};

export default function capabilites() {
  const panelList = [
    <PanelHelper
      vignette={true}
      imageSrc={"/panel-imgs/capabilities/rdte.png"}
      component={<RDTEContent />}
      key={1}
    />,
    <PanelHelper
      imageSrc={"/panel-imgs/capabilities/research.png"}
      key={2}
      component={<Content panelHeader={"Research"} />}
    />,
    <PanelHelper
      imageSrc={"/panel-imgs/capabilities/develop.png"}
      key={3}
      component={<Content panelHeader={"Development"} />}
    />,
    <PanelHelper
      imageSrc={"/panel-imgs/capabilities/testing.png"}
      key={4}
      component={<Content panelHeader={"Testing"} />}
    />,
    <PanelHelper
      imageSrc={"/panel-imgs/capabilities/eval.png"}
      key={5}
      component={<Content panelHeader={"Evaluation"} />}
    />,
    <PanelHelper
      vignette={true}
      imageSrc={"/panel-imgs/capabilities/rapidcapa.png"}
      component={<RapidContent />}
      key={6}
    />,
    <PanelHelper component={<DevelopmentContent />} key={7} />,
    <PanelHelper component={<DeliveryContent />} key={8} />,
  ];

  return (
    <div className="flex flex-col">
      <Head>
        <title>EUP NDC - Capabilites</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SplashView
        splashHeader={"Capabilites"}
        imageSrc={"/panel-imgs/capabilities/splashupscale.png"}
      />
      <Slideshow
        panels={panelList}
        overviewHeader={"RDT&E"}
        sliderPosition={"left"}
      />
    </div>
  );
}
