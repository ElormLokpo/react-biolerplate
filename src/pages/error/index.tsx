import { CgDanger } from "react-icons/cg";
import { RiSignalWifiErrorLine } from "react-icons/ri";
import {Link} from "react-router-dom"

export const PageNotFoundPage = ()=>{
    return(
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <CgDanger className="text-5xl" />
            <p className="font-bold text-xl mb-1">Page Not Found</p>
            <Link to={""} className="underline text-sm">Kindly click here to return to home.</Link>
        </div>
    )
}

export const ErrorPage = ()=>{
    return(
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <RiSignalWifiErrorLine className="text-5xl" />
            <p className="font-bold text-xl mb-1">Something went wrong</p>
            <button onClick={()=>location.reload()} className="underline text-sm">Kindly click here to refresh page.</button>
        </div>
    )
}