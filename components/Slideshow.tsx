import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { useEffect, useRef, useState } from "react";
import { animated, useTransition } from "react-spring";
import Image from "next/image";
import { useRouter } from 'next/router'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
gsap.config({
  nullTargetWarn: false,
})

type SlideShowProps = {
  panels: any;
  overviewHeader?: string;
  sliderPosition?: string;
  titles?: Object;
};

export default function Slideshow({
  panels,
  overviewHeader,
  sliderPosition = "right",
  titles = null,
}: SlideShowProps) {
  const comp = useRef();
  const overlay = useRef(null);
  const [isOverlayOpen, setOverlay] = useState(false);
  const [currentSlide, setSlide] = useState(0);
  const [panelCount, setPanelCount] = useState(0);
  const [headerState, setHeader] = useState('')
  const router = useRouter()

  const transitions = useTransition(isOverlayOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: !isOverlayOpen,
    config: { mass: 0, duration: 150 },
  });

  useEffect(() => {
    let ctx = gsap.context(() => {
      var panels: any = gsap.utils.toArray(".panel"), scrollTween;
      setPanelCount(panels.length);
      setHeader(overviewHeader)
  
      function goToSection(i: number) {
        const didScrollToBottom =
          window.innerHeight + window.scrollY >= document.body.offsetHeight;
  
        if (!didScrollToBottom) {
          const tween = gsap.to(window, {
            scrollTo: {
              y: i * innerHeight + panels[0].offsetTop,
              autoKill: false,
            },
            duration: 1,
            ease: "power2",
            onComplete: () => {
              scrollTween = null
            },
            overwrite: true
          });
          setSlide(i);
        }
      }

      panels.forEach((panel: any, i: number) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top-=25 bottom-=25",
            end: "bottom+=100 top-=100",
            onEnter: (self) => self.isActive && !scrollTween && goToSection(i),
          },
        });

        tl.fromTo(
          panel,
          { x: 0, opacity: 0, duration: 2 },
          { x: 0, opacity: 1, duration: 2 },
          "start"
        )
          .to(
            panel.querySelector(".panel-category"),
            { x: 0, opacity: 1, delay: 0.1, duration: 1 },
            "start"
          )
          .fromTo(
            panel.querySelector(".panel-content"),
            { x: 0, opacity: 0, scale: 0.9, duration: 2 },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 2.5,
              delay: 0.5,
              ease: "sine",
            },
            "start"
          );

        const revtl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top+=50 bottom+=25",
            end: "bottom-=100 top+=100",
            onEnterBack: self => self.isActive && !scrollTween && goToSection(i)
          },
        });
      });

    
      const overlaytl = gsap.timeline({
        scrollTrigger: {
          trigger: panels[0],
          start: "top-=50 top",
          end: "bottom+=50 bottom",
          endTrigger: panels[panels.length - 1],
          onEnter: () => {
            setOverlay(true);
          },
          onLeave: () => {
            setOverlay(false);
          },
          onEnterBack: () => {
            setOverlay(true);
          },
          onLeaveBack: () => {
            setOverlay(false);
            // scrolls back to top of screen
            gsap.to(window, {
              scrollTo: { y: 0, autoKill: false },
              duration: 0.8,
              ease: "expo",
            });
          },
        },
      });
    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, [router.pathname]);

  useEffect(() => {
    if (titles === null) return

    Object.keys(titles).forEach((key) => {
      const number = +key
      if (number <= currentSlide)
      {
        const title = titles[key]
        setHeader(title)
      } else {
        setHeader(overviewHeader)
      }
    })
  }, [currentSlide, overviewHeader, titles])

  return (
    <>
      {isOverlayOpen &&
        transitions(
          (styles, item) =>
            item && (
              <animated.div style={styles} className="overlay" ref={overlay}>
                <p className="overlay-header drop-shadow-md text-center px-2">
                  {headerState}
                </p>
                <div
                  className={`w-6 md:w-16 h-full  absolute ${
                    sliderPosition === "right" ? "right-0" : "left-0"
                  }`}
                >
                  <div className="h-full flex items-center">
                    <div className="panel-page-slider">
                      {[...Array(panelCount)].map((e, i) => (
                        <div
                          key={i}
                          className={`${
                            currentSlide === i
                              ? "bg-white/70 scale-x-[3]"
                              : "bg-white/30 scale-x-100"
                          } page-slider`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute w-full h-full">
                  <div className="mx-auto h-full flex flex-col justify-end">
                    <div className="flex flex-col justify-end panel-content">
                      <div className="h-[13px] transition-all duration-300 animate-bounce hover:animate-none relative cursor-pointer w-full mb-6">
                        <Image
                          src="/arrow-down.png"
                          layout="fill"
                          objectFit="contain"
                          draggable={false}
                          className="select-none hover:test-filter transition-all duration-300"
                          alt={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </animated.div>
            )
        )}
      <section className="trigger overflow-hidden" ref={comp}>
        {panels}
      </section>
    </>
  );
}
