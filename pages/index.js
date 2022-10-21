import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slideshow from "../components/Slideshow";
import SplashView from "../components/SplashView";

const frontBlurb =
  "The Eastern Upper Peninsula - National Defense Complex (EUP-NDC) is a profound response to the Nation's call for innovation in support of the Warfighter.  The EUP-NDC is a bold, first-of-its-kind Research, Development, Testing and Evaluation (RDT&E) complex and Rapid Capability Development – Delivery (RCD-D) platform, purpose-built for the All-Domain (air, land, maritime, cyber, and space) Warfare fight versus sophisticated adversaries (i.e., China and Russia).";

const spaceBlurb =
  "The EUP-NDC sits in a strategic location capable of great capabilities within the space domain. The Chippewa Homestead Antenna and Mission Program (CHAMP) Space Command, Control, and Communication (C3) Mission Operations Center (MOC) directly supports Michigan’s commercial Space-launch program.";

const tempBlurb =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit duis tristique sollicitudin. Et tortor at risus viverra adipiscing at in tellus. Suspendisse sed nisi lacus sed viverra tellus in hac. In hendrerit gravida rutrum quisque non tellus.";

const Panel = ({
  backgroundImage,
  symbolImage,
  sideText,
  blurbText = tempBlurb,
}) => {
  const sideref = useRef(null);
  const [sideWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(sideref.current.clientWidth);
  }, [sideref]);
  return (
    <div className="panel">
      <div className="w-full h-full absolute">
        <Image
          src={backgroundImage}
          quality={25}
          layout={"fill"}
          objectFit={"cover"}
          alt={"background image"}
        />
      </div>
      <div className="w-full h-full absolute">
        <Image
          src={"/panel-imgs/home/vignette.png"}
          layout={"fill"}
          objectFit={"cover"}
          alt={"Vignette"}
        />
      </div>
      <div className="min-h-screen">
        <div className="absolute w-full h-full flex  items-center">
          <p
            ref={sideref}
            style={{ marginTop: sideWidth }}
            className={`fixed left-0 origin-top-left ml-2 md:ml-8 -translate-x-8 -rotate-90 flex md:text-3xl lg:text-5xl font-thin tracking-[1.25rem] panel-category opacity-0 uppercase drop-shadow-md`}
          >
            {sideText}
          </p>
        </div>
        <div className="absolute w-full h-full ">
          <div className="mx-auto px-8 lg:w-[64rem] h-full flex flex-col justify-center">
            <div className="flex flex-col panel-content md:mb-32 items-center">
              <div className="p-16 md:p-56 -translate-y-8 md:translate-y-16 ">
                <div className="w-56 md:w-96  aspect-square relative top-8 md:top-0">
                  <Image
                    src={symbolImage}
                    layout="fill"
                    objectFit="contain"
                    alt={"Panel Symbol"}
                    style={{ filter: "drop-shadow(0px 0px 30px #ffffff42)" }}
                  />
                </div>
              </div>
              <div className="relative flex flex-col -translate-y-16">
                <div className="text-sm md:text-xl p-4 md:p-0 text-center mb-4 drop-shadow-sm">
                  {blurbText}
                </div>

                <div className="z-50 w-full relative pt-8">
                  <Image
                    src="/light-bar-white.png"
                    layout="fill"
                    objectFit="contain"
                    alt={"Light bar"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const panelList = [
    <Panel
      key={1}
      sideText={"space"}
      backgroundImage={"/panel-imgs/home/spaceupscale.jpg"}
      symbolImage={"/panel-symbols/home/satelite.png"}
      blurbText={spaceBlurb}
    />,
    <Panel
      key={2}
      sideText={"air"}
      backgroundImage={"/panel-imgs/home/airupscale.png"}
      symbolImage={"/panel-symbols/home/drone.png"}
    />,
    <Panel
      key={3}
      sideText={"cyber"}
      backgroundImage={"/panel-imgs/home/cyberupscale.png"}
      symbolImage={"/panel-symbols/home/cyber.png"}
    />,
    <Panel
      key={4}
      sideText={"land"}
      backgroundImage={"/panel-imgs/home/landupscale.png"}
      symbolImage={"/panel-symbols/home/land.png"}
    />,
    <Panel
      key={5}
      sideText={"maritime"}
      backgroundImage={"/panel-imgs/home/maritimeupscale.png"}
      symbolImage={"/panel-symbols/home/maritime.png"}
    />,
  ];
  return (
    <div className="flex flex-col text-ndcWhite">
      <Head>
        <title>EUP NDC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SplashView videoSrc={"/temp-video.mp4"} splashText={frontBlurb} />
      <Slideshow panels={panelList} overviewHeader={"All Domain Warfare"} />
    </div>
  );
}
