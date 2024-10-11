import { GiRunningShoe } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { ReactElement } from "react";
import { MdLogout } from "react-icons/md";
import { ProfileImage } from "@/components/profile-image";


const nav_style = "flex gap-1 items-center py-3 hover:bg-blue-800 px-1 rounded hover:px-2  text-sm hover:text-[0.9rem] transition-all"

const NavItem = ({to, content, icon}:{to:string, content:string, icon:ReactElement})=>{
    return <NavLink className={nav_style} to={to}>{icon} {content} </NavLink>
}

const SideNavLinkSection = ({ title, navs }: { title: string, navs: any[] }) => {
    return (
        <div className="mb-2">
            <p className="text-[0.7rem]  font-bold text-blue-400">{title}</p>

            <div>
                {
                    navs.map((item, index) => <NavItem key={index} to={item.to} content={item.content} icon={item.icon} />)
                }
            </div>
        </div>
    )
}

export const SideNav = () => {
    return (
        <div className="px-2 py-4 text-sm flex flex-col justify-between h-full">
            <div>
                <div className="flex items-center gap-2 mb-8">
                    <div className="bg-blue-500 rounded  p-1">
                        <GiRunningShoe />
                    </div>
                    <p className="font-bold">Sample Logo</p>
                </div>

                <div>
                    {
                        sideNavSectionArr.map((item, index) => <SideNavLinkSection key={index} title={item.title} navs={item.navs} />)
                    }
                </div>
            </div>

            <div>
                <button className={`${nav_style} w-full mb-2`}> <MdLogout /> Logout </button>

                <div className="border-t border-stone-700 py-2 flex gap-2 items-center">
                    <ProfileImage />
                    <div className="text-xs">
                        <p className="font-semibold">Sample Username</p>
                        <p className="font-light">sampleuser@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const sideNavSectionArr = [
    {
        title: 'TOOLS', navs: [
            {to:"home", content:"Dashboard", icon:<MdOutlineSpaceDashboard />},
            {to:"about", content:"Products", icon: <FaChartPie />},
            {to:"somewhere", content: "Orders", icon:<FaCog />}
        ]
    },
    {
        title: 'TOOLS', navs: [
            {to:"home", content:"Dashboard", icon:<MdOutlineSpaceDashboard />},
            {to:"about", content:"Products", icon: <FaChartPie />},
            {to:"somewhere", content: "Orders", icon:<FaCog />}
        ]
    }
]