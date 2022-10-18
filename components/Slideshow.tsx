import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { useEffect, useRef, useState } from "react";
import { animated, useTransition, config } from "react-spring";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

type SlideShowProps = {
  panels: any;
  overviewHeader?: string;
  sliderPosition?: string;
};

export default function Slideshow({
  panels,
  overviewHeader,
  sliderPosition = "right",
}: SlideShowProps) {
  const ref = useRef(null);
  const comp = useRef();
  const overlay = useRef(null);
  const [isOverlayOpen, setOverlay] = useState(false);
  const [currentSlide, setSlide] = useState(0);
  const [panelCount, setPanelCount] = useState(0);
  const transitions = useTransition(isOverlayOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: !isOverlayOpen,
    config: config.molasses,
  });

  useEffect(() => {
    var panels: any = gsap.utils.toArray(".panel");
    setPanelCount(panels.length);

    function goToSection(i: number, anim?: any) {
      const tween = gsap.to(window, {
        scrollTo: { y: i * innerHeight + panels[0].offsetTop, autoKill: false },
        duration: 1,
        ease: "power2",
      });

      setSlide(i);

      if (anim) {
        anim.restart();
      }
    }

    let ctx = gsap.context(() => {
      // all our animations can use selector text like ".box"
      // and it's properly scoped to our component
      panels.forEach((panel: any, i: number) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top-=50 bottom-=100",
            end: "bottom+=100 top-=100",
            onEnter: (self) => goToSection(i),
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
            { x: 0, opacity: 1, delay: 0.25, duration: 1 },
            "start"
          )
          .fromTo(
            panel.querySelector(".panel-content"),
            { x: 0, opacity: 0, scale: 0.85, duration: 2 },
            { x: 0, opacity: 1, scale: 1, duration: 3, delay: 0.5 },
            "start"
          );

        

        const revtl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "bottom bottom",
            end: "bottom top+=100",
            onEnterBack: () => goToSection(i),
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
  }, []);

  return (
    <>
      {isOverlayOpen &&
        transitions(
          (styles, item) =>
            item && (
              <animated.div style={styles} className="overlay" ref={overlay}>
                <p className="overlay-header drop-shadow-md">
                  {overviewHeader}
                </p>
                <div
                  className={`w-16 h-full absolute ${
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
                              ? "bg-white/70 scale-x-[1.75]"
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
                      <div className="h-4 animate-bounce cursor-pointer w-full mb-8">
                        <Image
                          src="/arrow-down.png"
                          layout="fill"
                          objectFit="contain"
                          draggable={false}
                          className="select-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </animated.div>
            )
        )}
      <section className="trigger overflow-hidden">{panels}</section>
    </>
  );
}
