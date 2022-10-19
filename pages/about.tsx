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

const missionBlurb =
  "Unlike other federally-funded RDT&E and RCD-D constructs, the EUP-NDC is unique in that it delivers comprehensive austere-capable All-Domain solutions (i.e., cradle to grave) from one centralized and secure location, dramatically increasing efficiency, maximizing cost effectiveness, while ultimately accelerating the delivery technical and tactical advantage to the Warfighter.";

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
            <p className="font-['Ethnocentric'] text-4xl md:text-6xl mb-6">
              LOCATION
            </p>
            <p className="text-center text-md md:text-xl px-12 md:px-24 ">
              The Eastern Upper Peninsula of Michigan is home to the Eastern
              Upper Peninsula National Defense Complex. The EUP-NDC sits on
              1700-acres of pre-existing strategic infrastructure and land
              within and directly adjacent to Chippewa County International
              Airport in Kincheloe, Michigan. This infrastructure once served as
              a Strategic Air Command (SAC) base (Kincheloe AB) form 1942-1977.
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
            <p className="font-['Ethnocentric'] text-4xl md:text-6xl mb-6">
              CLIMATE
            </p>
            <p className="text-center text-md md:text-xl px-12 md:px-24">
              The climate of the Eastern Upper Peninsula acts as a
              differentiator amongst all other RDT&E defense enviornments across
              the nation. The temperature of the region scales from -37°F to
              98°F, with a majority of the year spent under an abundance of snow
              and ice in result of the lake effect snow coming off of Lake
              Superior. Lake Superior is deepest and coldest of the Great Lakes
              and is the largest fresh water lake by area, accounting for 10% of
              the entire worlds surface freshwater, Lake Superior acts as a main
              differentiator for the EUP-NDC. The EUP provides defense
              contractors the unique opportunity to design and test their
              defense solutions in an organic austere environment.
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
      <p className="w-full md:w-[800px] text-md px-12 mt-4 md:mt-16 md:text-xl">
        &emsp;The Eastern Upper Peninsula - National Defense Complex (EUP-NDC)
        is a profound response to the Nation's call for innovation in support of
        the Warfighter. The EUP-NDC is a bold, first-of-its-kind Research,
        Development, Testing and Evaluation (RDT&E) complex and Rapid Capability
        Development – Delivery (RCD-D) platform, purpose-built for the
        All-Domain (air, land, maritime, cyber, and space) Warfare fight versus
        sophisticated adversaries (i.e., China and Russia).
      </p>
      <p className="w-full md:w-[800px] text-md px-12 mt-4 md:text-xl">
        &emsp;{missionBlurb}
      </p>
    </div>
  );
};

const finalBlurb =
  "The EUP-NDC is an Anchor Systems Initiative. Anchor Systems is a national defense technology integrator specializing in the integration of emergent technology and applied engineering. Anchor Systems is mission focused on the design development and delivery of next generation war fighting capabilities, specifically in accelerating the critical capabilities necessary for America’s warfighters to fight and win in tomorrow’s battlespace today. ";

const FinalSlide = () => {
  return (
    <div className="flex flex-col items-center panel-content">
      <div className="font-['Ethnocentric'] text-4xl md:text-8xl mb-8">
        THE TEAM
      </div>
      <p className="w-full md:w-[600px] text-md px-24 md:p-0  md:text-xl text-center  panel-content">
        {finalBlurb}
      </p>
      <div className="h-12" />
      <div className="m-16">
        <NaturalImage src={"/anchor-systems-logo-white.png"} />
      </div>
    </div>
  );
};

const splashText =
  "Designing, developing, and delivering emergent Next-Generation war fighting capabilities able to defeat threats with speed, precision, and lethality across a myriad of complex, austere, and globally contested environments on Earth and beyond";

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
      <SplashView splashHeader={"About"} splashText={splashText} />
      <Slideshow
        panels={panelList}
        overviewHeader={"About"}
        sliderPosition={"left"}
      />
    </div>
  );
}
