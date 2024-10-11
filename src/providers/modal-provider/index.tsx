import { ModalContext } from "@/context/modal-context"
import { ReactElement, useState } from "react"


export const ModalProvider  = ({children}:{children:any})=>{
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<ReactElement>(<></>)

    return(
        <ModalContext.Provider value={{setModalContent, setShowModal, showModal, modalContent}}>
            {children}
        </ModalContext.Provider>
    )
}