import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const SplashView = dynamic(() => import('../components/SplashView'))
const Slideshow = dynamic(() => import('../components/Slideshow'))
import FrontPanel from "../components/FrontPanel";
import { frontBlurb, spaceBlurb, cyberBlurb, landBlurb, maritimeBlurb, airBlurb } from "../content/indexContent";

export default function Home() {
  const panelList = [
    <FrontPanel
      key={1}
      sideText={"space"}
      backgroundImage={"/panel-imgs/home/spaceupscale.jpg"}
      symbolImage={"/panel-symbols/home/satelite.png"}
      blurbText={spaceBlurb}
    />,
    <FrontPanel
      key={2}
      sideText={"air"}
      backgroundImage={"/panel-imgs/home/airupscale.png"}
      symbolImage={"/panel-symbols/home/drone.png"}
      blurbText={airBlurb}
    />,
    <FrontPanel
      key={3}
      sideText={"cyber"}
      backgroundImage={"/panel-imgs/home/cyberupscale.png"}
      symbolImage={"/panel-symbols/home/cyber.png"}
      blurbText={cyberBlurb}
    />,
    <FrontPanel
      key={4}
      sideText={"land"}
      backgroundImage={"/panel-imgs/home/landupscale.png"}
      symbolImage={"/panel-symbols/home/land.png"}
      blurbText={landBlurb}
    />,
    <FrontPanel
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
        <meta name="description" content={frontBlurb} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SplashView videoSrc={"/temp-video.mp4"} splashText={frontBlurb} />
      <Slideshow panels={panelList} overviewHeader={"All-Domain Warfare"} />
    </div>
  );
}
