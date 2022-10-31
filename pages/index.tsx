import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slideshow from "../components/Slideshow";
import SplashView from "../components/SplashView";

const frontBlurb =
  "Michigan's Eastern Upper Peninsula (EUP) region is unmatched in key discriminators, geographic attributes, and direct mission enablers that unlike the previous decades in the Middle East, make the EUP and Michigan uniquely suited for delivering critical All- Domain warfighting support to the DoD in the Era of Great Power Competition.";

const spaceBlurb =
  "The EUP-NDC sits in a strategic location that direct enables the organization with capabilities within the space domain. Michigan’s commercial-based Space eco-system directly enables comprehensive DoD All-Domain Operations. FAA designated EUP's Chippewa County International Airport (CIU) as one of only (13) Space-capable sites in entire Nation. CIU acts as a critical northern point for Artic, ‘High North’, and NORAD operations. ";

const airBlurb =
  "One of the Eastern Upper Peninsula’s unique differentiators is the hundreds of miles of unimpeded air space spanning over national forests and the Great Lakes. The Eastern Upper Peninsula National Defense Complex, right off the runway of former Kincheloe Air Force Base, has extensive flight capabilities.  ";

const cyberBlurb =
  "The official Department of Defense Cyber Strategy is concerned with three on going missions: defend DoD networks, systems, and information, defend the U.S. homeland and U.S. national interests against cyberattacks of significant consequence, and provide cyber support to military operational and contingency plans. Partnered with the National Defense Complex, Anchor Systems’ develops cutting edge cyber technology and strategy for national defense. ";

const landBlurb =
  "The natural terrain of the Eastern Upper Peninsula provides the ultimate austere environment for Research, Development, Testing and Evaluation (RDT&E) in the United States. The Upper Peninsula sees extreme temperatures, as low as -37°F in the winter months, and averages around 200 inches of snowfall a year. The land provides an unparalleled training environment that directly mimics that of the next war front. ";

const maritimeBlurb =
  "Lake Superior, located offshore of the Upper Peninsula of Michigan, provides an unmatched Maritime littoral environment (lake effect snow, ice, volatile sea state) that mimics those of the Artic, Baltic and East China Sea. The next generation of capabilities to fight the Great Power Competitions are designed to operate in the most austere conditions. This area imitates the conditions that the US Military will face as the fight moves.";

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
          quality={35}
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
            className={`fixed left-0 origin-top-left ml-2 md:ml-8 -translate-x-8 -rotate-90 flex md:text-2xl lg:text-4xl font-thin tracking-[1.25rem] panel-category opacity-0 uppercase drop-shadow-md`}
          >
            {sideText}
          </p>
        </div>
        <div className="absolute w-full h-full ">
          <div className="mx-auto px-8 lg:w-[64rem] h-full flex flex-col justify-center">
            <div className="flex flex-col panel-content md:mb-32 items-center">
              <div className="p-16 md:p-56 -translate-y-8 md:translate-y-24 ">
                <div className="w-56 md:w-72  aspect-square relative top-8 md:top-0">
                  <Image
                    src={symbolImage}
                    layout="fill"
                    objectFit="contain"
                    quality={0.2}
                    alt={"Panel Symbol"}
                    style={{ filter: "drop-shadow(0px 0px 30px #ffffff42)" }}
                  />
                </div>
              </div>
              <div className="relative flex flex-col -translate-y-16 md:-translate-y-24">
                <div className="text-sm md:text-lg p-4 md:p-0 text-center mb-4 drop-shadow-sm">
                  <p>{blurbText}</p>
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
      <Slideshow panels={panelList} overviewHeader={"All-Domain Warfare"} />
    </div>
  );
}
