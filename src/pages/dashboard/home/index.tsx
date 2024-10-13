import { Button } from "@/components/button"
import { CardModal, SheetModal } from "@/components/modal";
import { ModalContext } from "@/context/modal-context";
import { IModalContext } from "@/context/modal-context/types";
import { useContext } from "react";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const { setShowModal, setModalContent } = useContext(ModalContext) as IModalContext
    const navigate = useNavigate();
    const handleButton = () => {
        setShowModal(true)
        //setModalContent(<SheetModal position="right" />)
        setModalContent(<CardModal />)

    }

    return (
        <div className="h-screen px-[3rem] py-[2rem]">
            <div className="flex justify-between">
                <p className="text-lg font-semibold">Dashboard</p>


                <div className="flex gap-1">
                    <Button content="React Hook Form" outline={true} icon={<IoMdAdd />} handler={()=>navigate("/dashboard/rhf")} />
                    <Button content="Add Something" icon={<IoMdAdd />} handler={handleButton}  />
                </div>
            </div>
        </div>
    )
}