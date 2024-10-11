import { ReactElement } from "react"
import { Outlet } from "react-router-dom"


export const DashboardLayout = ({sideNav}:{sideNav: ReactElement})=>{
    return(
        <div className="grid grid-cols-16 h-screen">
            <div className="col-span-2 bg-black text-stone-300">{sideNav}</div>
            <div className="col-span-14"><Outlet /></div>
        </div>
    )
}