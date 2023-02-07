import Books from "./components/Books";
import { DATA } from "./data/data";

export default function BooksList() {
    return (
        <div>
            <Books list={DATA} />
        </div>
    )
}