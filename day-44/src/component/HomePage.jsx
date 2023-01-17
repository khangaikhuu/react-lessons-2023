import {Link} from 'react-router-dom'
export default function HomePage(){
    return(
        <div>
            <h1>It is Home Page</h1>
            <Link to={'/'}>Back</Link>
        </div>
    )
}