import Image, { ImageProps } from "next/image";
import { useState } from "react"

const NaturalImage = (props: ImageProps) => {
    const [ratio, setRatio] = useState(16 / 9); // default to 16:9

    return (
        <Image
        {...props}
        // set the dimension (affected by layout)
        alt=""
        width={370}
        height={370 / ratio}
        onLoadingComplete={({ naturalWidth, naturalHeight }) =>
            setRatio(naturalWidth / naturalHeight)
        }
        />
    );
};

export default NaturalImage