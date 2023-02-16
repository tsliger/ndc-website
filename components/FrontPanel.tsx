import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const FrontPanel = ({
  backgroundImage,
  symbolImage,
  sideText,
  blurbText = "Default",
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
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <div className="w-full h-full absolute">
        <Image
          src={"/panel-imgs/home/vignette.png"}
          fill
          className="object-cover"
          alt=""
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
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
          <div className="mx-auto lg:w-[64rem] h-full flex flex-col justify-center translate-y-8">
            <div className="flex flex-col panel-content items-center">
              <div className="max-h-28 mb-6 flex items-center">
                <div className="h-36 md:h-44 aspect-square relative">
                    <Image
                      src={symbolImage}
                      quality={50}
                      fill
                      className="object-contain symbol-shadow "
                      alt=""
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
              </div>
              <div className="relative flex flex-col p-8 to-transparent">
                <div className="text-sm md:text-lg md:p-0 md:px-12 px-6 text-center drop-shadow-sm">
                  <p>{blurbText}</p>
                </div>
                <div className="z-50 w-full relative h-20 panel-light">
                  <Image
                    src="/light-bar-white.png"
                    fill
                    className="object-contain"
                    alt=""
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
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

export default FrontPanel;
