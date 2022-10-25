import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { gsap } from "gsap";
import Typewriter from "typewriter-effect";



type SplashViewTypes = {
  videoSrc?: string;
  imageSrc?: string;
  splashHeader?: string;
  splashText?: string;
};

export default function SplashView({
  videoSrc,
  imageSrc,
  splashHeader,
  splashText,
}: SplashViewTypes) {
  const textRef = useRef(null);
  const headerRef = useRef(null);
  const lightRef = useRef(null)

  useEffect(() => {
    // Creates text effect on load
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, duration: 2, y: 0, delay: 0.65, ease: "sine" }
    );

    gsap.fromTo (
      headerRef.current,
      {opacity: 0},
      {opacity: 1, duration: 1.25, delay: 0.1}
    )

    gsap.fromTo (
      lightRef.current,
      {opacity: 0, scaleX: 0.45},
      {opacity: 1, duration: 3, delay: 0.15, scaleX: 1}
    )
  }, []);

  return (
    <div className="min-h-[840px] h-screen flex flex-col">
      <div className="h-1/2 md:h-4/6 overflow-hidden z-0 flex flex-col">
        {(videoSrc || imageSrc) && (
          <div className="mix-blend-soft-light absolute h-full w-full z-2 opacity-30">
            <Image src={'/splash-overlay.png'} layout={"fill"} objectFit={"cover"} alt={'bg overlay'} />
          </div>
        )}
        {videoSrc && !imageSrc && (
          <video autoPlay muted loop className={styles.video}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        {imageSrc && (
          <div className="w-full h-full absolute z-[-1]">
            <Image src={imageSrc} quality={80} layout={"fill"} objectFit={"cover"}  alt={'bg image'} />
          </div>
        )}
        <div ref={headerRef} className="select-none m-auto font-['Ethnocentric'] text-4xl md:text-6xl lg:text-8xl z-50">
          <Typewriter
            options={{
              cursor: ' '
            }}

            onInit={(typewriter)=> {
              typewriter
              .typeString(splashHeader)
              .pauseFor(100)
              .start();
              }
            }
          />
        </div>
      </div>
      <div className="z-10 h-1/2 md:h-2/6 bg-ndcDark">
        <div className="text-ndcWhite flex flex-col items-center h-full">
          <div ref={lightRef} className="h-[120px] z-50 w-full absolute translate-y-[-59px] md:translate-y-[-63px]">
            <Image src="/light-bar.png" layout="fill" objectFit="contain" alt={'light bar'} priority={true}/>
          </div>
          <p
            ref={textRef}
            className="text-sm md:text-xl md:w-[800px]  text-center flex-grow flex mt-6 md:mt-16 px-4 "
          >
            {splashText}
          </p>

          <div className="h-3 md:h-4 animate-bounce relative cursor-pointer w-full mb-8" >
            <Image
              src="/arrow-down.png"
              layout="fill"
              objectFit="contain"
              draggable={false}
              className="select-none"
              alt={'arrow down'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
