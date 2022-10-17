import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { gsap } from 'gsap';

type SplashViewTypes = {
  videoSrc?: string,
  imageSrc?: string,
  splashHeader?: string,
  splashText?: string,
}

export default function SplashView ({videoSrc, imageSrc, splashHeader, splashText}: SplashViewTypes) {
    const textRef = useRef(null)
    const comp = useRef();
  
    useEffect(() => {
      // Creates text effect on load
      let ctx = gsap.context(() => {
        gsap.fromTo(
          textRef.current, 
          {opacity: 0, scale: 0.8}, 
          {opacity: 1, scale: 1, duration: 1, ease: "inout"}
        )
         
      }, comp); // <- IMPORTANT! Scopes selector text
      
      return () => ctx.revert(); // cleanup
    }, [])
  
    return (
      <div className="min-h-[840px] h-screen flex flex-col">
          <div className="h-4/6 overflow-hidden z-0 flex flex-col">
            {videoSrc && !imageSrc && (
              <video autoPlay muted loop className={styles.video}>    
                  <source src={videoSrc} type="video/mp4"/>       
              </video>
            )} 
            {imageSrc && (
              <div className="w-full h-full absolute">
                  <Image  src={imageSrc} layout={"fill"} objectFit={"cover"}/>
              </div>
            )}  
            <div className="select-none m-auto font-['Ethnocentric'] text-4xl md:text-6xl lg:text-8xl z-50">
              {splashHeader}
            </div>
          </div>
          <div className="z-10 h-2/6 bg-ndcDark">
           <div className="text-ndcWhite flex flex-col items-center h-full">
              <div className="h-[120px] z-50 w-full absolute translate-y-[-63px]">
                <Image 
                  src="/light-bar.png" 
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <p ref={textRef} className='md:text-xl md:w-[682px] text-center	flex-grow flex items-center px-4 pt-8 pb-24 '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit duis tristique sollicitudin. Et tortor at risus viverra adipiscing at in tellus. Suspendisse sed nisi lacus sed viverra tellus in hac. In hendrerit gravida rutrum quisque non tellus.
              </p>
            
              <div className='h-4 w-12 p-2 relative bottom-12 animate-bounce cursor-pointer'>
                <Image
                  src="/arrow-down.png"
                  layout='fill'
                  objectFit='contain'
                  draggable={false}
                  className="select-none"
                />
              </div>
            </div>
          </div>
        </div>
    )
  }