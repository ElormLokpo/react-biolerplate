import { GiRunningShoe } from "react-icons/gi";


const SideNavLinkSection = ()=>{
    return (
        <div>
            Side Nav Section
        </div>
    )
}

export const SideNav = ()=>{
    return(
        <div className="px-2 py-4 text-sm flex flex-col justify-between h-full">
            <div>
                <div className="flex items-center gap-2">
                    <div className="bg-blue-500 rounded  p-1">
                        <GiRunningShoe />
                    </div>
                    <p className="font-semibold">Sample Logo</p>
                </div>

                <div>
                    {
                        [1,2]
                    }
                </div>
            </div>

            <div>
                Profile
            </div>
        </div>
    )
}