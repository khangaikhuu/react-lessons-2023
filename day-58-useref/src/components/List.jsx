import { places } from "../data/data"
import Place from "./Place"

export default function List() {


    const items = places.map((place, index) => {
        return <Place key={index} place={place}/>
    })

    return(
    <div>
        {items}
    </div>       
    )
}