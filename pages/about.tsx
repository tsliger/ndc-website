import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import PanelHelper from "../components/PanelHelper";
import { 
  locationContent, 
  missionBlurb, 
  climateContent, 
  splashText, 
  missionOne, 
  missionTwo, 
  finalContent 
} from "../content/aboutContent";
const Slideshow = dynamic(() => import('../components/Slideshow'))
const SplashView = dynamic(() => import('../components/SplashView'))
const NaturalImage = dynamic(() => import('../components/NaturalImage'))

const Content = () => {
  return (
    <>
      <div className="absolute h-full w-full flex">
        <div className="h-full relative w-full lg:w-7/12 self-start">
          <Image
            src={"/panel-imgs/about/kincheloe.png"}
            fill
            className="object-cover"
            alt=""
          />
          <div className="absolute h-full w-full flex flex-col justify-center items-center p-8 panel-content">
            <p className="font-['Ethnocentric'] text-4xl md:text-6xl mb-6">
              LOCATION
            </p>
            <p className="text-center text-md md:text-lg px-4 md:px-24 ">
              {locationContent}
            </p>
          </div>
        </div>
        <div className="lg:w-5/12 lg:flex hidden flex-col items-center justify-center overflow-hidden">
          <NaturalImage
            src={"/panel-imgs/about/locationone.png"}
            alt=""
          />
          <div className="my-4" />
          <NaturalImage
            src={"/panel-imgs/about/locationtwo.png"}
            alt=""
          />
          <div className="my-4" />
          <NaturalImage
            src={"/panel-imgs/about/locationthree.png"}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

const ClimateContent = () => {
  return (
    <>
      <div className="absolute h-full w-full flex">
        <div className="w-5/12 hidden lg:flex flex-col items-center justify-center overflow-hidden">
          <NaturalImage
            src={"/panel-imgs/about/climateone.png"}
            alt={"climate northern michigan"}
          />
          <div className="my-4" />
          <NaturalImage
            src={"/panel-imgs/about/climatetwo.png"}
            alt={"climate northern michigan"}
          />
          <div className="my-4" />
          <NaturalImage
            src={"/panel-imgs/about/climatethree.png"}
            alt={"climate northern michigan"}
          />
        </div>
        <div className="h-full relative w-full lg:w-7/12 saturate-[0.65] self-start">
          <Image
            src={"/panel-imgs/about/climateupscale.png"}
            fill
            className="object-cover opacity-50"
            alt={"climate"}
          />
          <div className="absolute h-full w-full flex flex-col justify-center items-center p-8  panel-content">
            <p className="font-['Ethnocentric'] text-3xl md:text-6xl mb-6">
              CLIMATE
            </p>
            <p className="text-center text-sm md:text-lg px-4 lg:px-24">
              {climateContent}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const MissionContent = () => {
  return (
    <div className="flex flex-col items-center panel-content">
      <div className="font-['Ethnocentric'] text-3xl md:text-7xl">Mission</div>
      <p className="w-full md:w-[800px] text-sm px-6 mt-4 md:mt-16 md:text-lg text-center md:text-justify">
        &emsp;{missionOne}
      </p>
      <p className="w-full md:w-[800px] text-sm px-6 mt-4 md:text-lg  text-center md:text-justify">
        &emsp;{missionTwo}
      </p>
    </div>
  );
};

const FinalSlide = () => {
  return (
    <div className="flex flex-col items-center justify-end panel-content">
      <div className="font-['Ethnocentric'] text-3xl md:text-6xl my-4">
        THE TEAM
      </div>
      <p className="w-full md:w-[600px] text-sm px-8 md:p-0 md:text-lg text-center">
        {finalContent}
      </p>
      <div className="flex justify-center items-center h-40 overflow-hidden">
        <div className="w-[200px] md:w-[400px] relative h-20">
          <Image
            src="/anchor-systems-logo-white.png"
            alt=""
            title=""
            fill
            className="object-contain w-auto"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
      </div>
    </div>
  );
};



export default function about() {
  const panelList = [
    <PanelHelper
      key={1}
      component={<MissionContent />}
      imageSrc="/panel-imgs/about/about.png"
    />,
    <PanelHelper key={2} component={<Content />} />,
    <PanelHelper key={3} component={<ClimateContent />} vignette={true} />,
    <PanelHelper key={4} component={<FinalSlide />} />,
  ];
  return (
    <div className="flex flex-col">
      <Head>
        <title>EUP NDC - About</title>
        <meta name="description" content={missionBlurb} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SplashView splashHeader={"About"} splashText={splashText} />
      <Slideshow
        panels={panelList}
        overviewHeader={"About"}
        sliderPosition={"left"}
      />
    </div>
  );
}
