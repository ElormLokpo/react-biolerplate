import { Button } from "@/components/button"
import { CardModal, SheetModal } from "@/components/modal";
import { ModalContext } from "@/context/modal-context";
import { IModalContext } from "@/context/modal-context/types";
import { useContext } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

export const HomePage = () => {
    const {setShowModal, setModalContent} = useContext(ModalContext) as IModalContext
    const handleButton = () => {
        setShowModal(true)
        //setModalContent(<SheetModal position="right" />)
        setModalContent(<CardModal />)

    }

    return (
        <div className="h-screen px-[3rem] py-[2rem]">
            <div className="flex justify-between">
                <p className="text-lg font-semibold">Dashboard</p>

                <Button content="Add Something" icon={<IoMdAddCircleOutline />} handler={handleButton} />
            </div>
        </div>
    )
}