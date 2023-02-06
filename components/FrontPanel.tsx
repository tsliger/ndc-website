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
        <div className="w-full h-full absolute opacity-50">
          <Image
            src={backgroundImage}
            quality={35}
            fill
            className="object-cover"
            alt=""
          />
        </div>
        <div className="w-full h-full absolute">
          <Image
            src={"/panel-imgs/home/vignette.png"}
            fill
            className="object-cover"
            alt=""
          />
        </div>
        <div className="min-h-screen">
          <div className="absolute w-full h-full flex  items-center">
            <p
              ref={sideref}
              style={{ marginTop: sideWidth }}
              className={`fixed left-0 z-50 origin-top-left ml-2 md:ml-8 -translate-x-8 -rotate-90 flex md:text-lg lg:text-3xl font-thin tracking-[0.5rem] panel-category opacity-0 uppercase drop-shadow-md`}
            >
              {sideText}
            </p>
          </div>
          <div className="absolute w-full h-full ">
            <div className="mx-auto px-8 lg:w-[64rem] h-full flex flex-col justify-center">
              <div className="flex flex-col panel-content md:mb-32 items-center">
                <div className="p-16 md:p-56 -translate-y-2 md:translate-y-36 ">
                  <div className="w-40 md:w-56 aspect-square relative top-12 md:top-0">
                    <Image
                      src={symbolImage}
                      quality={50}
                      fill
                      className="object-contain symbol-shadow "
                      alt=""
                    />
                  </div>
                </div>
                <div className="relative flex flex-col -translate-y-16 md:-translate-y-24 p-8 to-transparent">
                  <div className="text-sm md:text-lg p-4 md:p-0 text-center lg:mb-4 drop-shadow-sm">
                    <p>{blurbText}</p>
                  </div>
                  <div className="z-50 w-full relative h-12 panel-light -translate-y-4">
                    <Image
                      src="/light-bar-white.png"
                      fill
                      className="object-contain"
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