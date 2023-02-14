import React from 'react'
import Image from 'next/image'

const PanelHelper = ({imageSrc=undefined, component, vignette=false}) => {
return (
    <div className="min-h-screen panel">
        {imageSrc && (
        <div className="w-full h-full absolute">
            <Image
                src={imageSrc}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
        </div>
        )}
        {vignette && (
        <div className="w-full h-full absolute">
            <Image
                src={"/panel-imgs/home/vignette.png"}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
        </div>
        )}
        <div className="absolute h-full w-full flex flex-col justify-center items-center px-4">
            {component}
        </div>
    </div>
)
}

  export default PanelHelper