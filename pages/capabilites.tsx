import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
const Switcher = dynamic(() => import('../components/Switcher'))
const SplashView = dynamic(() => import('../components/SplashView'))
const Slideshow = dynamic(() => import('../components/Slideshow'))
import PanelHelper from "../components/PanelHelper";

const capabilitesSplash =
  "The Eastern Upper Peninsula National Defense Complex is a bold concept, an advanced All-Domain Warfare Research, Development, Testing, and Evaluation (RDT&E) platform – capable of accelerated DoD Rapid Capability Development and Delivery (RCD-D) support operations. Set-up for the next generation of innovative war fighters to come research, design, test and evaluate capabilities in an environment that matches the next war front. ";

const Content = ({ panelHeader, panelText }) => {
  return (
    <div className="flex flex-col items-center  panel-content overflow-hidden opacity-0">
      <div className="font-['Ethnocentric'] text-3xl md:text-7xl mb-6">
        {panelHeader}
      </div>
      <p className="w-full lg:w-[800px] xl:w-[calc(100%_-_44rem)]  text-sm px-12 lg:px-8 md:text-xl text-center ">
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
            <div className="relative w-[120px] md:w-[200px] aspect-square">
              <Image
                src="/panel-imgs/capabilities/rdteone.png"
                fill
                className="object-contain"
                alt={"rtde"}
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl">Research</p>
          </div>
          <div className="flex flex-col items-center space-y-2 switcher-item">
            <div className="relative w-[120px] md:w-[200px] aspect-square">
              <Image
                src="/panel-imgs/capabilities/rdtetwo.png"
                fill
                className="object-contain"
                alt={"rtde"}
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl">Development</p>
          </div>
          <div className="flex flex-col items-center space-y-2 switcher-item">
            <div className="relative w-[120px] md:w-[200px] aspect-square">
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
            <div className="relative w-[120px] md:w-[200px] aspect-square">
              <Image
                src="/panel-imgs/capabilities/rdtefour.png"
                fill
                className="object-contain"
                alt={"rtde"}
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl">Evaluation</p>
          </div>
        </Switcher>
      </div>
      <div className="z-50 h-16 w-full relative ">
        <Image src="/light-bar-white.png" fill
                      className="object-contain"  alt="" />
      </div>
      <p className="w-full md:w-[700px] text-md md:text-xl text-center px-12 md:px-4">
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
              />
            </div>
            <p className="font-['Ethnocentric'] text-xl mt-2">Delivery</p>
          </div>
        </Switcher>
      </div>
      <div className="z-50 h-16 w-full relative ">
        <Image src="/light-bar-white.png" fill
                      className="object-contain" alt=""/>
      </div>
      <p className="w-full px-12 md:px-4 md:w-[700px] text-md md:text-xl text-center">
        The Eastern Upper Peninsula National Defense Complex has the ability to
        evolve, experiment and deliver technologies to address both urgent and
        emerging threats across the world. Rapid Capability Development and
        Delivery (RCD-D) processes within the National Defense Complex
        encompasses everything from rapid manufacturing to advanced engineering
        to take next generation war fighting technologies from cradle to grave.
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
              <div className="w-24 md:w-50 relative aspect-square">
                <Image
                    src={"/panel-imgs/capabilities/developone.png"}
                    alt=""
                    fill
                    className="object-contain invert-[0.85]"
                />
              </div>
              <p className="font-['Ethnocentric'] text-xl mb-4">Innovation</p>
              <p className="w-[250px] text-sm md:text-lg text-center">
                Innovation is a mindset at the National Defense Complex. Mixed
                with technical expertise, deep operational experience and
                imagination, complex war fighting solutions are solved and
                capabilities are put into production
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 switcher-item">
              <div className="w-24 md:w-50 aspect-square relative">
                <Image
                    src={"/panel-imgs/capabilities/developtwo.png"}
                    alt=""
                    fill
                    className="object-contain invert-[0.85]"
                />
              </div>
              <p className="font-['Ethnocentric'] text-xl mb-4">Engineering</p>
              <p className="w-[250px] text-sm md:text-lg text-center">
                Capabilities are engineered to withstand the harsh climate of an
                austere environment. Engineers from all different backgrounds
                work to mix creativity and technology to design and prototype
                capabilities across all domains.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 switcher-item">
              <div className="w-24 md:w-50 aspect-square relative">
                <Image
                    src={"/panel-imgs/capabilities/developthree.png"}
                    alt=""
                    fill
                    className="object-contain invert-[0.85]"
                />
              </div>
              <p className="font-['Ethnocentric'] text-xl mb-4">
                Manufacturing
              </p>
              <p className="w-[250px] text-sm md:text-lg text-center">
                Manufacturing is the overlap of innovation and engineering.
                Integration of AI-enabled design and innovative fabrication
                results in cutting-edge, top of the line capabilities being
                shipped directly to the war fighter
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
          <Image src="/light-bar.png" fill className="object-contain"  alt=""/>
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
              <div className="w-48 md:w-56 aspect-square relative">
                  <Image
                      src={"/panel-imgs/capabilities/deliveryone.png"}
                      alt=""
                      fill
                      className="object-contain invert-[0.85]"
                  />
              </div>
              <p className="font-['Ethnocentric'] text-xl mb-2">Air</p>
              <p className="w-[250px] text-sm md:text-lg text-center">
                The EUP-NDC sits directly on the former Kincheloe Air Force
                Base. With direct access to the existing airport structure the
                NDC has the capability to land a C-17, load it, and send it back
                out in a rapid time frame.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 switcher-item">
              <div className="w-48 md:w-56 aspect-square relative">
                <Image
                    src={"/panel-imgs/capabilities/deliverytwo.png"}
                    alt=""
                    fill
                    className="object-contain invert-[0.85]"
                />
              </div>
              <p className="font-['Ethnocentric'] text-xl mb-2">Land</p>
              <p className="w-[250px] text-sm md:text-lg text-center">
                The EUP-NDC is strategically located just off I-75 in Kincheloe,
                Michigan, and 22 miles from the US and Canada International
                Bridge.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 switcher-item">
              <div className="w-48 md:w-56 aspect-square relative">
                <Image
                    src={"/panel-imgs/capabilities/deliverythree.png"}
                    alt=""
                    fill
                    className="object-contain invert-[0.85]"
                />
              </div>
              <p className="font-['Ethnocentric'] text-xl mb-2">Maritime</p>
              <p className="w-[250px] text-sm md:text-lg text-center">
                Just miles from the shore of Lake Superior, Lake Huron and Lake
                Michigan the NDC provides the unique option of delivery
                utilizing the natural geographic features of the area.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 switcher-item">
              <div className="w-48 md:w-56 aspect-square relative">
                <Image
                    src={"/panel-imgs/capabilities/deliveryfour.png"}
                    alt=""
                    fill
                    className="object-contain invert-[0.85]"
                />
              </div>
              <p className="font-['Ethnocentric'] text-xl mb-2">Rail</p>
              <p className="w-[250px] text-sm md:text-lg text-center">
                Two miles from the NDC sits the Kincheloe Railway Station. With
                direct access through partners of the NDC this allows for rapid
                capbaility delivery where ever there is a rail way.
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
          <Image src="/light-bar.png" fill className="object-contain" alt="" />
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

const devBlurb =
  "Prototyping, designing, and engineering the next generation of war fighting capabilities. Cutting edge solutions are created in a collaborative environment backed by extensive research, developed by some of the brightest minds, and with the best technology. The National Defense Complex provides an environment to rapidly develop capabilities in a domain that closely matches the next war front.";

const testBlurb =
  "True imitation of the next war front domain cannot be accurately created in an artificial environment. The National Defense Complex allows for warfighters from all over the world to come to a place where they can test their capabilities in an organic environment that matches the next fight. ";

const evalBlurb =
  "Data collection, performance measuring and reflection are essential in the RDT&E process. The National Defense Complex is deliberately designed for rapid evaluation. Product lines are tested, data is generated, data is parsed and from there conclusions are drawn. Evaluating performances of product lines in a state-of-the-art facility located directly in the testing environment allows for creative minds to make adjustments in the design stage, and then jump right back into the testing phase.";

const researchBlurb =
  "From curiosity comes questions, and from research comes knowledge. Knowledge is the gateway to the rest of the development process. Building a strong foundation of existing knowledge provides innovators with confidence and clarity of the design space before moving into the design phase. At the Eastern Upper Peninsula National Defense Complex research and merit are built into the core by relationships with a network of Subject Matter Experts (SME), and partners from around the country.";
