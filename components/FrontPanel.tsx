import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image';

const FrontPanel = ({
    backgroundImage,
    symbolImage,
    sideText,
    blurbText = 'Default',
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
            alt=""
          />
        </div>
        <div className="w-full h-full absolute">
          <Image
            src={"/panel-imgs/home/vignette.png"}
            layout={"fill"}
            objectFit={"cover"}
            alt=""
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
                  <div className="w-40 md:w-64  aspect-square relative top-12 md:top-0">
                    <Image
                      src={symbolImage}
                      layout="fill"
                      quality={25}
                      objectFit="contain"
                      alt=""
                      style={{ filter: "drop-shadow(0px 0px 30px #ffffff42)" }}
                    />
                  </div>
                </div>
                <div className="relative flex flex-col -translate-y-16 md:-translate-y-24">
                  <div className="text-sm md:text-xl p-4 md:p-0 text-center md:mb-8 drop-shadow-sm">
                    <p>{blurbText}</p>
                  </div>
                  <div className="z-50 w-full relative h-8 panel-light">
                    <Image
                      src="/light-bar-white.png"
                      layout="fill"
                      objectFit="contain"
                      alt=""
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

export default FrontPanel