import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { useEffect, useRef, useState } from 'react';
import { animated, useTransition, config } from 'react-spring'


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const SplashView = () => {
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
        <div className="h-4/6 bg-gray-500 overflow-hidden z-0">
          <video autoPlay muted loop className={styles.video}>         
            <source src="/temp-video.mp4" type="video/mp4"/>       
          </video>
          
        </div>
        <div className="z-10 h-2/6 bg-ndcDark">
         <div className="text-ndcWhite flex flex-col items-center h-full">
            <div className="h-[120px]  z-50 w-full absolute translate-y-[-64px]">
              <Image 
                src="/light-bar.png" 
                layout='fill'
                objectFit='contain'
              />
            </div>
            <p ref={textRef} className='text-xl w-[682px] text-center	flex-grow flex items-center pb-24 '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit duis tristique sollicitudin. Et tortor at risus viverra adipiscing at in tellus. Suspendisse sed nisi lacus sed viverra tellus in hac. In hendrerit gravida rutrum quisque non tellus.
            </p>
          
            <div className='h-4 w-12 absolute p-2 bottom-12 animate-bounce cursor-pointer'>
              <Image
                src="/arrow-down.png"
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>
        </div>
      </div>
  )
}

const Slideshow = () => {
  const ref = useRef(null)
  const comp = useRef();
  const overlay = useRef(null);
  const [isOverlayOpen, setOverlay] = useState(false)
  const [currentSlide, setSlide] = useState(0)
  const [panelCount, setPanelCount] = useState(0)
  const transitions = useTransition(isOverlayOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: isOverlayOpen,
    // delay: 200,
    config: config.molasses,
    // onRest: () => setOverlay(!isOverlayOpen),
  })


  useEffect(() => {
    var panels = gsap.utils.toArray(".panel");
    setPanelCount(panels.length)

    function goToSection(i, anim) {
      gsap.to(window, {
        scrollTo: {y: i*innerHeight + panels[0].offsetTop, autoKill: false},
        duration: 1
      });

      setSlide(i)
      
      if(anim) {
        anim.restart();
      }
    }
    
    let ctx = gsap.context(() => {
      // all our animations can use selector text like ".box" 
      // and it's properly scoped to our component
      
      panels.forEach((panel, i) => {
        // ScrollTrigger.create({
        //   trigger: panel,
        //   markers: true,
        //   start: "top bottom-=100",
        //   onEnter: () => goToSection(i)
        // });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top-=50 bottom-=200",
            end: "bottom+=100 top",
            markers: true,
            onEnter: (self) => goToSection(i),
          }
        })


        const overlaytl = gsap.timeline({scrollTrigger: {
          trigger: panels[0],
          start: "top-=50 top",
          end: "bottom+=50 bottom",
          // markers: true,
          endTrigger: panels[[panels.length - 1]],
          onEnter: () => {
            setOverlay(true)
          },
          onLeave: () => {
            setOverlay(false)
          },
          onEnterBack: () => {
            setOverlay(true)
          },
          onLeaveBack: () => {
            setOverlay(false)
            gsap.to(window, {
              scrollTo: {y: 0, autoKill: false},
              duration: 1
            });
          }
        }})

        tl.fromTo(panel, 
          {x: 0, opacity: 0, duration: 2}, 
          {x: 0, opacity: 1, duration: 2}, 
          'start'
        ).to(
          panel.querySelector('.panel-category'), 
          {x: 0, opacity: 1, delay: 0.1, duration: 1}, 
          'start'
        )

        const revtl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "bottom bottom",
            end: "bottom top+=100",
            // markers: true,
            onEnterBack: () => goToSection(i),
          },
        })
      });
    }, comp); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert(); // cleanup
  }, [])
  
  return (
    <>
      {isOverlayOpen && (
        // <animated.div className="h-64 w-64 bg-red-500 fixed z-50" ref={overlay}></animated.div>
        transitions(
          (styles, item) => item && <animated.div style={styles} className="h-screen w-full fixed z-30 flex flex-col" ref={overlay}>
              <p className="font-['Ethnocentric'] text-4xl self-center relative top-32 z-30">All Domain Warfare</p>
              <div className="w-32 h-full absolute right-0">
                <div className="h-full flex items-center">
                  <div className="h-96 w-full flex flex-col items-end px-8 space-y-2">
                    {[...Array(panelCount)].map((e, i) => <div className={`flex-grow w-2 ${currentSlide === i ? 'bg-white/50 ' : 'bg-white/20'} transition-all duration-500`}></div>)}
                  </div>
                </div>
              </div>
          </animated.div>)
      )}
      <section className="trigger">
        <div className="panel">
          <div className="min-h-screen  bg-yellow-800 bg-[url('/panel-imgs/home/space.png')] bg-cover">
            <div className="absolute  bg-[url('/panel-imgs/home/vignette.png')] w-full h-full bg-cover flex flex-col">
              <div className="absolute z-30 h-full w-full flex justify-start items-center">
                <p className="-rotate-90 text-5xl font-thin tracking-[1.25rem] panel-category opacity-0 -translate-x-8">Space</p>
              </div> 
            </div> 
          </div>
        </div>
        <div className="panel">
          <div className="min-h-screen  bg-yellow-800 bg-[url('/panel-imgs/home/air.png')] bg-cover">
            <div className="absolute  bg-[url('/panel-imgs/home/vignette.png')] w-full h-full bg-cover flex flex-col">
              <div className="absolute z-30 h-full w-full flex justify-start items-center">
                <p className="-rotate-90 text-5xl font-thin tracking-[1.25rem] panel-category opacity-0 -translate-x-8">Air</p>
              </div> 
            </div> 
          </div>
        </div>
        <div className="panel">
          <div className="min-h-screen  bg-yellow-800 bg-[url('/panel-imgs/home/cyber.png')] bg-cover">
            <div className="absolute  bg-[url('/panel-imgs/home/vignette.png')] w-full h-full bg-cover flex flex-col">
              <div className="absolute z-30 h-full w-full flex justify-start items-center">
                <p className="-rotate-90 text-5xl font-thin tracking-[1.25rem] panel-category opacity-0 -translate-x-8">Cyber</p>
              </div> 
            </div> 
          </div>
        </div>
        <div className="panel">
          <div className="min-h-screen  bg-yellow-800 bg-[url('/panel-imgs/home/land.png')] bg-cover">
            <div className="absolute  bg-[url('/panel-imgs/home/vignette.png')] w-full h-full bg-cover flex flex-col">
              <div className="absolute z-30 h-full w-full flex justify-start items-center">
                <p className="-rotate-90 text-5xl font-thin tracking-[1.25rem] panel-category opacity-0 -translate-x-8">Land</p>
              </div> 
            </div> 
          </div>
        </div>
        <div className="panel">
          <div className="min-h-screen  bg-yellow-800 bg-[url('/panel-imgs/home/maritime.png')] bg-cover">
            <div className="absolute  bg-[url('/panel-imgs/home/vignette.png')] w-full h-full bg-cover flex flex-col">
              <div className="absolute z-30 h-full w-full flex justify-start  items-center">
                <p className="-rotate-90 text-5xl font-thin tracking-[1.25rem] panel-category opacity-0 -translate-x-8 w-48">Maritime</p>
              </div> 
            </div> 
          </div>
        </div>
      </section>
    </>
  )
}

  

export default function Home() {
  return (
    <div className="flex flex-col text-ndcWhite">
      <Head>
        <title>EUP NDC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SplashView />
      <Slideshow />
    </div>
  )
}

//       {/* <div className="scroll-container" ref={ref}>
        
//       </div> */}

      
//       {/* <div className='bg-red-500 h-screen panel flex flex-col bg-[url("/panel-imgs/home/space.png")] bg-cover'>
//         <p className="font-['Ethnocentric'] text-4xl self-center relative top-24 z-30">All Domain Warfare</p>
//         <div className="absolute bg-[url('/panel-imgs/home/vignette.png')] w-full h-full bg-cover" />  
//         <div className="absolute z-30 h-full w-full flex justify-start items-center">
//           <p className="-rotate-90 text-5xl font-thin tracking-[1.25rem]">Space</p>
//         </div> 
//       </div> */}

// {/* 
//       <div className='bg-yellow-500 h-screen panel flex flex-col bg-[url("/panel-imgs/home/air.png")] bg-cover'>
//         <div className="absolute bg-[url('/panel-imgs/home/vignette.png')] w-full h-full bg-cover" />  
//         <p className="font-['Ethnocentric'] text-4xl self-center relative top-24 z-30">All Domain Warfare</p>
//       </div>


//       <div className='bg-green-500 h-screen panel flex flex-col bg-[url("/panel-imgs/home/cyber.png")] bg-cover'>
//         <div className="absolute bg-[url('/panel-imgs/home/vignette.png')] w-full h-full bg-cover" />  
//         <p className="font-['Ethnocentric'] text-4xl self-center relative top-24 z-30">All Domain Warfare</p>
//       </div>

//       <div className='bg-green-500 h-screen panel flex flex-col bg-[url("/panel-imgs/home/land.png")] bg-cover'>
//         <div className="absolute bg-[url('/panel-imgs/home/vignette.png')] w-full h-full bg-cover" />  
//         <p className="font-['Ethnocentric'] text-4xl self-center relative top-24 z-30">All Domain Warfare</p>
//       </div>

//       <div className='bg-green-500 h-screen panel flex flex-col bg-[url("/panel-imgs/home/maritime.png")] bg-cover'>
//         <div className="absolute bg-[url('/panel-imgs/home/vignette.png')] w-full h-full bg-cover" />  
//         <p className="font-['Ethnocentric'] text-4xl self-center relative top-24 z-30">All Domain Warfare</p>
//       </div> */}