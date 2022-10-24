import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Slideshow from "../components/Slideshow";
import SplashView from "../components/SplashView";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import gsap from "gsap";
import PanelHelper from "../components/PanelHelper";
import Switcher from "../components/Switcher";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const capabilitesSplash =
  "The Eastern Upper Peninsula National Defense Complex is a state of the art Research, Design, Testing and Evaluation (RDT&E) center for the next generation of innovative war fighters to come research, design, test and evaluate capabilities in an environment that matches the next war front.";

const Content = ({ panelHeader, panelText }) => {
  return (
    <div className="flex flex-col items-center  panel-content overflow-hidden">
      <div className="font-['Ethnocentric'] text-3xl md:text-8xl mb-4">
        {panelHeader}
      </div>
      <p className="w-full md:w-[600px] text-sm px-12 md:px-0 md:text-2xl text-center ">
        {panelText}
      </p>
    </div>
  );
};

const RDTEContent = () => {
  return (
    <>
      <div className="w-full flex justify-center overflow-hidden space-x-4 lg:space-x-20">
        <Switcher>
          <div className="flex flex-col items-center space-y-2 switcher-item">
            <div className="relative w-[120px] md:w-[250px] aspect-square">
              <Image
                src="/panel-imgs/capabilities/rdteone.png"
                layout={"fill"}
                alt={"rtde"}
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl">Research</p>
          </div>
          <div className="flex flex-col items-center space-y-2 switcher-item">
            <div className="relative w-[120px] md:w-[250px] aspect-square">
              <Image
                src="/panel-imgs/capabilities/rdtetwo.png"
                layout={"fill"}
                alt={"rtde"}
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl">Development</p>
          </div>
          <div className="flex flex-col items-center space-y-2 switcher-item">
            <div className="relative w-[120px] md:w-[250px] aspect-square">
              <Image
                src="/panel-imgs/capabilities/rdtethree.png"
                layout={"fill"}
                alt={"rtde"}
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl">Testing</p>
          </div>
          <div className="flex flex-col items-center space-y-2 switcher-item">
            <div className="relative w-[120px] md:w-[250px] aspect-square">
              <Image
                src="/panel-imgs/capabilities/rdtefour.png"
                layout={"fill"}
                alt={"rtde"}
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl">Evaluation</p>
          </div>
        </Switcher>
      </div>
      <div className="z-50 h-16 w-full relative ">
        <Image src="/light-bar-white.png" layout="fill" alt={"light bar"} />
      </div>
      <p className="w-full md:w-[700px] md:pt-8 text-md md:text-xl text-center px-12 md:px-4  panel-content">
        RDT&E is one of the five major appropriations used by the Department of
        Defense. The EUP-NDC allows for research, development, testing and
        evaluation in an austere environment that is capable of all domain
        warfare.
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
            <div className="relative bottom-0 w-[173px] aspect-square flex items-end justify-center">
              <div className="relative w-1/2 aspect-square">
                <Image
                  src="/panel-imgs/capabilities/rapidone.png"
                  alt={"Develop"}
                  layout={"fill"}
                />
              </div>
            </div>
            <p className="font-['Ethnocentric'] text-xl mt-2">Development</p>
          </div>
          <div className="switcher-item w-full flex-grow flex flex-col items-center">
            <div className="relative w-[173px] aspect-square">
              <Image
                src="/panel-imgs/capabilities/rapidtwo.png"
                alt={"Develop"}
                layout={"fill"}
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl mt-2">Delivery</p>
          </div>
        </Switcher>
      </div>
      <div className="z-50 h-16 w-full relative ">
        <Image src="/light-bar-white.png" layout="fill" alt={"Develop"} />
      </div>
      <p className="w-full px-12 md:px-4 md:w-[700px] text-md md:text-2xl text-center  panel-content">
        The EUP-NDC has the ability to evolve, experiment and deliver
        technologies in real time to address both urgent and emerging threats
        across the world. RCD-D within the NDC prides itself on innovation,
        engineering and rapid manufacturing capabilities that allow innovators
        to take their next generation war fighting capability from cradle to
        grave.
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
                alt={"Develop"}
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl mb-2">Innovation</p>
            <p className="w-[250px] text-md md:text-xl text-center">
            Innovation is a mindset at the NDC. Mixed with technical expertise, deep operational experience and imagination, complex war fighting solutions are solved and capabilities are put into production.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 justify-center switcher-item">
            <div className="relative w-[203px] aspect-square">
              <Image
                src="/panel-imgs/capabilities/developtwo.png"
                layout={"fill"}
                alt={"Develop"}
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl mb-2">Engineering</p>
            <p className="w-[250px] text-md md:text-xl text-center">
            Engineering brings the innovation to life. Advanced science and math are mixed with creativity and technology to design and prototype capabilities across all domains.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 justify-center switcher-item">
            <div className="relative w-[173px] aspect-square">
              <Image
                src="/panel-imgs/capabilities/developthree.png"
                layout={"fill"}
                alt={"Develop"}
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl mb-2">Manufacturing</p>
            <p className="w-[250px] text-md md:text-xl text-center">
            Manufacturing is where it all comes together.  Integration of AI-enabled design and innovative fabrication results in cutting-edge, top of the line capabilities being shipped directly to the war fighter.
            </p>
          </div>
        </Switcher>
      </div>
      <div className="w-full flex flex-col  absolute bottom-12 md:bottom-16">
        <p className="mx-auto text-lg md:text-5xl tracking-widest font-thin  translate-y-6 md:translate-y-0">
          DEVELOPMENT
        </p>
        <div className="z-50 h-16 w-full relative">
          <Image src="/light-bar.png" layout="fill" alt={"light bar"} />
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
                alt={"Develop"}
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl mb-2">Air</p>
            <p className="w-[250px] text-md md:text-xl text-center">
            The EUP-NDC sits directly on the former Kincheloe Air Force Base. With direct access to the existing airport structure the NDC has the capability to land a C-17, load it, and send it back out in a rapid time frame.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 justify-center switcher-item">
            <div className="relative w-[203px] aspect-square">
              <Image
                src="/panel-imgs/capabilities/deliverytwo.png"
                layout={"fill"}
                alt={"Develop"}
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl mb-2">Land</p>
            <p className="w-[250px] text-md md:text-xl text-center">
            The EUP-NDC is strategically located just off I-75 in Kincheloe, Michigan. 
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 justify-center switcher-item">
            <div className="relative w-[173px] aspect-square">
              <Image
                src="/panel-imgs/capabilities/deliverythree.png"
                layout={"fill"}
                alt={"Develop"}
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl mb-2">Maritime</p>
            <p className="w-[250px] text-md md:text-xl text-center">
            Just miles from the shore of Lake Superior the NDC provides the unique option of delivery utilizing the natural geographic features of the area.  
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 justify-center switcher-item">
            <div className="relative w-[173px] aspect-square">
              <Image
                src="/panel-imgs/capabilities/deliveryfour.png"
                layout={"fill"}
                alt={"Develop"}
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl mb-2">Rail</p>
            <p className="w-[250px] text-md md:text-xl text-center">
            2 miles from the NDC sits the Kincheloe railway station. With direct access through partners of the NDC this allows for rapid capbaility delivery where ever there is a rail way.
            </p>
          </div>
        </Switcher>
      </div>
      <div className="w-full flex flex-col  absolute bottom-12 md:bottom-16">
        <p className="uppercase mx-auto text-lg md:text-5xl tracking-widest font-thin translate-y-6 md:translate-y-0">
          Delivery
        </p>
        <div className="z-50 h-16 w-full relative">
          <Image src="/light-bar.png" layout="fill" alt={"light bar"} />
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
      component={<Content panelHeader={"Research"} panelText={researchBlurb} />}
    />,
    <PanelHelper
      imageSrc={"/panel-imgs/capabilities/develop.png"}
      key={3}
      component={<Content panelHeader={"Development"} panelText={devBlurb} />}
    />,
    <PanelHelper
      imageSrc={"/panel-imgs/capabilities/testing.png"}
      key={4}
      component={<Content panelHeader={"Testing"} panelText={testBlurb} />}
    />,
    <PanelHelper
      imageSrc={"/panel-imgs/capabilities/eval.png"}
      key={5}
      component={<Content panelHeader={"Evaluation"} panelText={evalBlurb} />}
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
        splashText={capabilitesSplash}
      />
      <Slideshow
        panels={panelList}
        overviewHeader={"RDT&E"}
        sliderPosition={"left"}
      />
    </div>
  );
}

const devBlurb =
  "Prototyping, designing, and engineering the next generation of war fighting capabilities from the Eastern Upper Peninsula. Development is where the heart of innovation lies at the NDC. Cutting edge solutions are created in a collaborative enviornment backed by extensive research, developed by some of the brightest minds, and with best technology. The NDC provides an environment to rapidly develop capabilities in a domain that closely matches the next war front. ";

const testBlurb =
  "True immitation of the domain of the next war front cannot be accurately created in a artificial environment. The NDC allows for warfighters from all over the world to come to a place where they can test their capabilities in an environment that matches the next fight. ";

const evalBlurb =
  "Data collection, performance measuring and reflection is essential in the design process. The NDC is deliberately designed for rapid evaluation. Product lines are tested and data is generated, data is parsed and from there conclusions are drawn. Evaluating performance of product lines in an state of the art facility located directly in the testing environment allows for creative minds to make adjustments in the design stange, and then jump right back into the testing phase. ";

const researchBlurb =
  "From curiosity comes questions, and from research comes knowledge. Knowledge is the gateway to the rest of the design lifecycle. Building a strong foundation of existing knowledge provides innovators with confidence and clarity of the design space before moving into the design phase. At the NDC research and merit are built into the core by partnerships with several universities and a network of Subject Matter Experts (SME), innovators are challenged to come ask the tough questions here.";
