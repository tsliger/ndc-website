import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
const Switcher = dynamic(() => import('../components/Switcher'))
const SplashView = dynamic(() => import('../components/SplashView'))
const Slideshow = dynamic(() => import('../components/Slideshow'))
import PanelHelper from "../components/PanelHelper";
import { 
  rapidBlurb, 
  capabilitesSplash, 
  devBlurb, 
  testBlurb, 
  evalBlurb, 
  researchBlurb,
  developOne,
  developTwo,
  developThree, 
  deliveryOne,
  deliveryTwo,
  deliveryThree,
  deliveryFour
} from "../content/capabilitiesContent"; // Where the static content is stored



const Content = ({ panelHeader, panelText }) => {
  return (
    <div className="flex flex-col items-center  panel-content overflow-hidden opacity-0">
      <div className="font-['Ethnocentric'] text-3xl md:text-6xl mb-6">
        {panelHeader}
      </div>
      <p className="w-full lg:w-[800px] xl:w-[calc(100%_-_44rem)]  text-sm px-12 lg:px-8 md:text-lg text-center ">
        {panelText}
      </p>
    </div>
  );
};

const RDTEContent = () => {
  return (
    <div className="panel-content w-full  flex flex-col items-center justify-center">
      <div className="w-full flex justify-center overflow-hidden space-x-4 lg:space-x-20">
        <Switcher>
          <div className="flex flex-col items-center space-y-2 switcher-item">
            <div className="relative w-[120px] md:w-[150px] aspect-square">
              <Image
                src="/panel-imgs/capabilities/rdteone.png"
                fill
                className="object-contain"
                alt={"rtde"}
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl">Research</p>
          </div>
          <div className="flex flex-col items-center space-y-2 switcher-item">
            <div className="relative w-[120px] md:w-[150px] aspect-square">
              <Image
                src="/panel-imgs/capabilities/rdtetwo.png"
                fill
                className="object-contain"
                alt={"rtde"}
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl">Development</p>
          </div>
          <div className="flex flex-col items-center space-y-2 switcher-item">
            <div className="relative w-[120px] md:w-[150px] aspect-square">
              <Image
                src="/panel-imgs/capabilities/rdtethree.png"
                fill
                className="object-contain"
                alt={"rtde"}
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl">Testing</p>
          </div>
          <div className="flex flex-col items-center space-y-2 switcher-item">
            <div className="relative w-[120px] md:w-[150px] aspect-square">
              <Image
                src="/panel-imgs/capabilities/rdtefour.png"
                fill
                className="object-contain"
                alt={"rtde"}
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl">Evaluation</p>
          </div>
        </Switcher>
      </div>
      <div className="z-50 h-16 w-full relative">
        <Image src="/light-bar-white.png" fill
                      className="object-contain"  alt="" sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw" />
      </div>
      <p className="w-full md:w-[700px] text-md md:text-lg text-center px-12 md:px-4">
        RDT&E is one of the five major appropriations used by the Department of
        Defense. The EUP-NDC allows for research, development, testing and
        evaluation in an austere environment that is capable of all domain
        warfare.
      </p>
    </div>
  );
};

const RapidContent = () => {
  return (
    <div className="self-center panel-content">
      <div className="grid md:flex space-x-24 items-center">
        <Switcher>
          <div className="switcher-item w-full flex-grow flex flex-col items-center">
            <div className="relative bottom-0 w-[173px] aspect-square flex items-end justify-center">
              <div className="relative w-1/2 aspect-square">
                <Image
                  src="/panel-imgs/capabilities/rapidone.png"
                  alt={"Develop"}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
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
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl mt-2">Delivery</p>
          </div>
        </Switcher>
      </div>
      <div className="z-50 h-16 w-full relative ">
        <Image src="/light-bar-white.png" fill
                      className="object-contain" alt="" sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"/>
      </div>
      <p className="w-full px-12 md:px-4 md:w-[700px] text-md md:text-lg text-center">
        {rapidBlurb}
      </p>
    </div>
  );
};

const DevelopmentContent = () => {
  return (
    <>
      <div className="grid md:flex justify-center items-center space-x-24 overflow-hidden w-full h-full ">
        <div className="flex space-x-24 panel-content">
          <Switcher duration={3000}>
            <div className="flex flex-col items-center space-y-2 switcher-item">
              <div className="w-24 relative aspect-square">
                <Image
                    src={"/panel-imgs/capabilities/developone.png"}
                    alt=""
                    fill
                    className="object-contain invert-[0.85]"
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
              <p className="font-['Ethnocentric'] text-xl mb-4">Innovation</p>
              <p className="w-[250px] text-sm md:text-base text-center">
                {developOne}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 switcher-item">
              <div className="w-24 aspect-square relative">
                <Image
                    src={"/panel-imgs/capabilities/developtwo.png"}
                    alt=""
                    fill
                    className="object-contain invert-[0.85]"
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
              <p className="font-['Ethnocentric'] text-xl mb-4">Engineering</p>
              <p className="w-[250px] text-sm md:text-base text-center">
                {developTwo}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 switcher-item">
              <div className="w-24  aspect-square relative">
                <Image
                    src={"/panel-imgs/capabilities/developthree.png"}
                    alt=""
                    fill
                    className="object-contain invert-[0.85]"
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
              <p className="font-['Ethnocentric'] text-xl mb-4">
                Manufacturing
              </p>
              <p className="w-[250px] text-sm md:text-base text-center">
                {developThree}
              </p>
            </div>
          </Switcher>
        </div>
      </div>
      <div className="w-full flex flex-col  absolute bottom-12 md:bottom-20">
        <p className="mx-auto text-md md:text-3xl tracking-widest font-thin  translate-y-6 md:translate-y-4">
          DEVELOPMENT
        </p>
        <div className="z-50 h-16 w-full relative">
          <Image src="/light-bar.png" fill className="object-contain"  alt="" sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
        </div>
      </div>
    </>
  );
};

const DeliveryContent = () => {
  return (
    <>
      <div className="grid md:flex justify-center  space-x-24 items-center overflow-hidden w-full h-full ">
        <div className="flex space-x-24 panel-content">
          <Switcher duration={3000}>
            <div className="flex flex-col items-center space-y-2 switcher-item">
              <div className="w-32 md:w-36 aspect-square relative">
                  <Image
                      src={"/panel-imgs/capabilities/deliveryone.png"}
                      alt=""
                      fill
                      className="object-contain invert-[0.85]"
                      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  />
              </div>
              <p className="font-['Ethnocentric'] text-xl mb-2">Air</p>
              <p className="w-[250px] text-sm md:text-base text-center">
                {deliveryOne}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 switcher-item">
              <div className="w-32 md:w-36 aspect-square relative">
                <Image
                    src={"/panel-imgs/capabilities/deliverytwo.png"}
                    alt=""
                    fill
                    className="object-contain invert-[0.85]"
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
              <p className="font-['Ethnocentric'] text-xl mb-2">Land</p>
              <p className="w-[250px] text-sm md:text-base text-center">
                {deliveryTwo}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 switcher-item">
              <div className="w-32 md:w-36  aspect-square relative">
                <Image
                    src={"/panel-imgs/capabilities/deliverythree.png"}
                    alt=""
                    fill
                    className="object-contain invert-[0.85]"
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
              <p className="font-['Ethnocentric'] text-xl mb-2">Maritime</p>
              <p className="w-[250px] text-sm md:text-base text-center">
                {deliveryThree}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 switcher-item">
              <div className="w-32 md:w-36 aspect-square relative">
                <Image
                    src={"/panel-imgs/capabilities/deliveryfour.png"}
                    alt=""
                    fill
                    className="object-contain invert-[0.85]"
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
              <p className="font-['Ethnocentric'] text-xl mb-2">Rail</p>
              <p className="w-[250px] text-sm md:text-base text-center">
                {deliveryFour}
              </p>
            </div>
          </Switcher>
        </div>
      </div>
      <div className="w-full flex flex-col  absolute bottom-12 md:bottom-20">
        <p className="uppercase mx-auto text-md md:text-3xl tracking-widest font-thin translate-y-6 md:translate-y-4">
          Delivery
        </p>
        <div className="z-50 h-16 w-full relative">
          <Image src="/light-bar.png" fill className="object-contain" alt="" sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
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
        <title>EUP NDC - Capabilities</title>
        <meta name="description" content={capabilitesSplash} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SplashView
        splashHeader={"Capabilities"}
        imageSrc={"/panel-imgs/capabilities/splashupscale.png"}
        splashText={capabilitesSplash}
      />
      <Slideshow
        panels={panelList}
        overviewHeader={"RDT&E"}
        sliderPosition={"left"}
        titles={{6: 'Rapid Capability DEVELOPMENT & Delivery'}}
      />
    </div>
  );
}


