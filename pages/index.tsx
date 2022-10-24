import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slideshow from "../components/Slideshow";
import SplashView from "../components/SplashView";

const frontBlurb =
  "Michigan's Eastern Upper Peninsula (EUP) region is unmatched in key discriminators, geographic attributes, and direct mission enablers that unlike the previous decades in the Middle East, make the EUP and Michigan uniquely suited for delivering critical All- Domain warfighting support to the DoD in the Era of Great Power Competition.";

const spaceBlurb =
  "The EUP-NDC sits in a strategic location capable of great capabilities within the space domain. The Chippewa Homestead Antenna and Mission Program (CHAMP) Space Command, Control, and Communication (C3) Mission Operations Center (MOC) directly supports Michigan’s commercial Space-launch program.";

const airBlurb =
  "The Eastern Upper Peninsula is unique in that there are hundreds of miles of unimpeded air space. Spanning over national forrests, and the great lakes, the environment allows for the perfect training and testing site for those who bring the fight to the air.";

const cyberBlurb =
  "Cyber is imparative to the mission of the EUP-NDC. With technology at the core of everything that is developed within the NDC, security is top priority. The official Department of Defense Cyber Strategy is concerned with three ongoing missions: Defend DoD networks, systems, and information. Defend the U.S. homeland and U.S. national interests against cyberattacks of significant consequence. Provide cyber support to military operational and contingency plans. This directly alligns with the cyber initiative within the NDC. ";

const landBlurb =
  "The natural terrain of the Eastern Upper Peninsula provides for the ultimate austere environment for  RDT&E in the United States. The Upper Peninsula averages around 200 inches of snowfall a year that is key in future RDT&E.";

const maritimeBlurb =
  "Lake Superior provides an unmatched Maritime littoral environment. Lake effect snow, ice, volatile sea states mimic those of the Arctic, Baltic and Each China Seas. The next generation of capabilities coming out of the NDC are designed to operate in the most austere conditions.";

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

                <div className="z-50 w-full relative pt-8 panel-light">
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
      blurbText={airBlurb}
    />,
    <Panel
      key={3}
      sideText={"cyber"}
      backgroundImage={"/panel-imgs/home/cyberupscale.png"}
      symbolImage={"/panel-symbols/home/cyber.png"}
      blurbText={cyberBlurb}
    />,
    <Panel
      key={4}
      sideText={"land"}
      backgroundImage={"/panel-imgs/home/landupscale.png"}
      symbolImage={"/panel-symbols/home/land.png"}
      blurbText={landBlurb}
    />,
    <Panel
      key={5}
      sideText={"maritime"}
      backgroundImage={"/panel-imgs/home/maritimeupscale.png"}
      symbolImage={"/panel-symbols/home/maritime.png"}
      blurbText={maritimeBlurb}
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
