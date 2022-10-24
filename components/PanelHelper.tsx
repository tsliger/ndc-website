import React from 'react'
import Image from 'next/image'

const PanelHelper = ({imageSrc=undefined, component, vignette=false}) => {
return (
    <div className="min-h-screen panel">
        {imageSrc && (
        <div className="w-full h-full absolute">
            <Image quality={50} src={imageSrc} layout={"fill"} objectFit={"cover"} />
        </div>
        )}
        {vignette && (
        <div className="w-full h-full absolute">
            <Image  src={'/panel-imgs/home/vignette.png'} layout={"fill"} objectFit={"cover"} />
        </div>
        )}
        <div className="absolute h-full w-full flex flex-col justify-center items-center px-4">
            {component}
        </div>
    </div>
)
}

  export default PanelHelper