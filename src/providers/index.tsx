import { router } from "@/routes"
import { RouterProvider } from "react-router-dom"


export const RootProvider = ()=>{
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}