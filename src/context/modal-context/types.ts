import { ReactElement } from "react";

export interface IModalContext{
    showModal:boolean, 
    modalContent: ReactElement,
    setShowModal : (param:boolean)=>void,
    setModalContent : (param: ReactElement) => void
}