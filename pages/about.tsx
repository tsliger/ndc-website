import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Slideshow from "../components/Slideshow";
import SplashView from "../components/SplashView";
import PanelHelper from "../components/PanelHelper";
import { ImageProps } from "next/image";

const NaturalImage = (props: ImageProps) => {
  const [ratio, setRatio] = useState(16 / 9); // default to 16:9

  return (
    <Image
      {...props}
      // set the dimension (affected by layout)
      width={400}
      height={400 / ratio}
      layout="fixed" // you can use "responsive", "fill" or the default "intrinsic"
      onLoadingComplete={({ naturalWidth, naturalHeight }) =>
        setRatio(naturalWidth / naturalHeight)
      }
    />
  );
};

const Content = () => {
  return (
    <>
      <div className="absolute h-full w-full flex">
        <div className="h-full relative w-full md:w-7/12 self-start">
          <Image
            src={"/panel-imgs/about/kincheloe.png"}
            objectFit={"cover"}
            layout="fill"
          />
          <div className="absolute h-full w-full flex flex-col justify-center items-center p-8 panel-content">
            <p className="font-['Ethnocentric'] text-4xl md:text-6xl mb-6">LOCATION</p>
            <p className="text-center text-md md:text-xl px-12 md:px-24 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consectetur adipiscing elit duis tristique sollicitudin. Et tortor
              at risus viverra adipiscing at in tellus. Suspendisse sed nisi
              lacus sed viverra tellus in hac. In hendrerit gravida rutrum
              quisque non tellus.
            </p>
          </div>
        </div>
        <div className="md:w-5/12 md:flex hidden flex-col items-center justify-center">
          <NaturalImage src={"/panel-imgs/about/locationone.png"} />
          <div className="my-4" />
          <NaturalImage src={"/panel-imgs/about/locationtwo.png"} />
          <div className="my-4" />
          <NaturalImage src={"/panel-imgs/about/locationthree.png"} />
        </div>
      </div>
    </>
  );
};

const ClimateContent = () => {
  return (
    <>
      <div className="absolute h-full w-full flex">
        <div className="w-5/12 hidden md:flex flex-col items-center justify-center">
          <NaturalImage src={"/panel-imgs/about/climateone.png"} />
          <div className="my-4" />
          <NaturalImage src={"/panel-imgs/about/climatetwo.png"} />
          <div className="my-4" />
          <NaturalImage src={"/panel-imgs/about/climatethree.png"} />
        </div>
        <div className="h-full relative w-full md:w-7/12 self-start">
          <Image
            src={"/panel-imgs/about/climate.png"}
            objectFit={"cover"}
            layout="fill"
          />
          <div className="absolute h-full w-full flex flex-col justify-center items-center p-8  panel-content">
            <p className="font-['Ethnocentric'] text-4xl md:text-6xl mb-6">CLIMATE</p>
            <p className="text-center text-md md:text-xl px-12 md:px-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consectetur adipiscing elit duis tristique sollicitudin. Et tortor
              at risus viverra adipiscing at in tellus. Suspendisse sed nisi
              lacus sed viverra tellus in hac. In hendrerit gravida rutrum
              quisque non tellus.
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
      <div className="font-['Ethnocentric'] text-4xl md:text-8xl">Mission</div>
      <p className="w-full md:w-[600px] text-md p-12 md:text-xl text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Consectetur
        adipiscing elit duis tristique sollicitudin. Et tortor at risus viverra
        adipiscing at in tellus. Suspendisse sed nisi lacus sed viverra tellus
        in hac. In hendrerit gravida rutrum quisque non tellus.
      </p>
    </div>
  );
};

const FinalSlide = () => {
  return (
    <div className="flex flex-col items-center panel-content">
      <div className="font-['Ethnocentric'] text-4xl md:text-8xl">THE TEAM</div>
      <p className="w-full md:w-[600px] text-md p-12 md:text-xl text-center  panel-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Consectetur
        adipiscing elit duis tristique sollicitudin. Et tortor at risus viverra
        adipiscing at in tellus. Suspendisse sed nisi lacus sed viverra tellus
        in hac. In hendrerit gravida rutrum quisque non tellus.
      </p>
      <div className="h-12" />
      <NaturalImage src={"/anchor-systems-logo-white.png"} />
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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SplashView splashHeader={"About"} />
      <Slideshow
        panels={panelList}
        overviewHeader={"About"}
        sliderPosition={"left"}
      />
    </div>
  );
}
