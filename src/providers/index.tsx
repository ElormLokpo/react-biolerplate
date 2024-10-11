import { router } from "@/routes"
import { RouterProvider } from "react-router-dom"
import { ModalProvider } from "./modal-provider"


export const RootProvider = () => {
    return (
        <div>
            <ModalProvider>
                <RouterProvider router={router} />
            </ModalProvider>
        </div>
    )
}