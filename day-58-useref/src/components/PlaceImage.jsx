import { getImageUrl } from "../util/util";

import { useContext } from "react"
import { ImageContext } from "../contexts/ImageContext"

export default function PlaceImage({place}) {
    const [isLarge, setIsLarge, imageSize] = useContext(ImageContext)

    return(
        <img
            src={getImageUrl(place)}
            alt={place.name}
            width={imageSize}
            height={imageSize}
        />
    )
}