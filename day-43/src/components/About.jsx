import { Outlet } from "react-router-dom"
export default function About(){
    return(
        <div>
            <p>It is about Page</p>
            <a href='/about/usukhuu'>Usukhuu</a>
            <a href='/about/Khangai'>Khangai</a>
            <Outlet/>
        </div>
    )
}