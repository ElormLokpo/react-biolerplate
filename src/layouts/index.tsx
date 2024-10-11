import { ModalContainer } from "@/components/modal"
import { ModalContext } from "@/context/modal-context"
import { IModalContext } from "@/context/modal-context/types"
import { useContext } from "react"
import { Outlet } from "react-router-dom"


export const RootLayout = ()=>{
    const {showModal, modalContent} = useContext(ModalContext)  as IModalContext
    return(
        <>
            <ModalContainer showModal={showModal} modalContent={modalContent} />
            <Outlet />
        </>
    )
}