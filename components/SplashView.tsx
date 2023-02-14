import { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
const Typewriter = dynamic(() => import('typewriter-effect'))

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
  const arrowRef = useRef(null)

  useEffect(() => {
    // Creates text effect on load
    gsap.fromTo(
      textRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2,  delay: 0.75, ease: "sine" }
    );

    gsap.fromTo(
      textRef.current,
      { y: -25, scale: 0.95, },
      { duration: 2, y: 0, scale: 1, ease: "sine" }
    );

    gsap.fromTo (
      headerRef.current,
      {opacity: 0},
      {opacity: 1, duration: 1.25, delay: 0.1}
    )

    gsap.fromTo (
      lightRef.current,
      {opacity: 0, scaleX: 0.45},
      {opacity: 1, duration: 3, delay: 0.15, scaleX: 1, ease: 'sine'}
    )

    gsap.fromTo (
      arrowRef.current,
      {opacity: 0},
      { opacity: 1, duration: 0.5, delay: 0.75 }
    )
  }, []);

  return (
    <div className="min-h-[840px] h-screen flex flex-col">
      <div className="h-1/2 md:h-4/6 overflow-hidden z-0 flex flex-col overlay-div">
        {videoSrc && !imageSrc && (
          <video muted autoPlay playsInline loop className={styles.video} >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        {imageSrc && (
          <div className="w-full h-full absolute z-[-1] saturate-50 opacity-70">
            <Image src={imageSrc} quality={65} fill className="object-cover"  alt={""} />
          </div>
        )}
        <div ref={headerRef} className="select-none m-auto font-['Ethnocentric'] text-4xl md:text-6xl lg:text-7xl z-50">
          <Typewriter
            options={{
              cursor: ' '
            }}

            onInit={(typewriter)=> {
              typewriter
              .typeString(splashHeader)
              .pauseFor(500)
              .start();
              }
            }
          />
        </div>
      </div>
      <div className="z-10 h-1/2 md:h-2/6 bg-ndcDark flex">
        <div className="text-ndcWhite flex flex-col items-center flex-grow">
          <div ref={lightRef} className="h-[120px] z-50 w-full absolute translate-y-[-60px] md:translate-y-[-63px]">
            <Image src="/light-bar.png" fill className="object-contain" alt={""} priority={true} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
          </div>
          <p
            ref={textRef}
            className="text-sm max-h-[50%] md:text-lg w-full md:max-w-[700px] lg:max-w-[950px]  text-center  flex py-10 px-8 md:px-12 "
          >
            {splashText}
          </p>
          
          <div ref={arrowRef} className="flex justify-center items-end pb-6  relative  w-full flex-grow" >
            <div  onClick={() => window.scrollBy(0, 100)}  className="arrow-button">
              <Image
                src="/arrow-down.png"
                fill 
                draggable={false}
                className="select-none hover:test-filter object-contain p-[10px]"
                alt={""}
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
