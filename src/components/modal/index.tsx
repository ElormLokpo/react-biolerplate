import { ModalContext } from "@/context/modal-context"
import { IModalContext } from "@/context/modal-context/types"
import { ReactElement, useContext } from "react"
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion as m } from "framer-motion"
import { SlideInLeft, SlideInRight, SlideInTop } from "@/animations";

const hanldeCloseModal = (setShowModal: any) => {
    setShowModal(false)
}

export const ModalContainer = ({ showModal, modalContent }: { showModal: boolean, modalContent: ReactElement }) => {
    const { setShowModal } = useContext(ModalContext) as IModalContext

    const handleClickModal = () => {
        setShowModal(false)
    }
    return (
        <>
            {
                showModal && <div className="modal-container" onClick={handleClickModal}>
                    {modalContent}
                </div>
            }
        </>

    )
}

export const SheetModal = ({ position }: { position: string }) => {
    const { setShowModal } = useContext(ModalContext) as IModalContext

    const handleContainerClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
    }

    return (
        <m.div
            variants={position == "right" ? SlideInRight : SlideInLeft}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`w-screen h-screen flex ${position == 'right' ? "justify-end" : ""}`}>
            <div className="bg-white w-[35rem] h-screen p-2" onClick={handleContainerClick}>
                <div className="flex justify-between">
                    <p className="font-semibold">Title</p>

                    <button onClick={() => hanldeCloseModal(setShowModal)} className="flex gap-1 hover:underline transition-all font-semibold text-red-500  text-xs items-center"><IoCloseCircleOutline /> Close</button>
                </div>

            </div>
        </m.div>
    )
}

export const CardModal = () => {
    const { setShowModal } = useContext(ModalContext) as IModalContext

    const handleContainerClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
    }

    return (
        <m.div
            variants={SlideInTop}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`w-screen h-screen flex justify-center items-center`}>
            <div className="bg-white w-[35rem] h-[25rem] rounded p-2" onClick={handleContainerClick}>
                <div className="flex justify-between">
                    <p className="font-semibold">Title</p>

                    <button onClick={() => hanldeCloseModal(setShowModal)} className="flex gap-1 hover:underline transition-all font-semibold text-red-500  text-xs items-center"><IoCloseCircleOutline /> Close</button>
                </div>

            </div>
        </m.div>
    )
}