import { useState } from "react";
import { ModalWind, Portal } from '../modal/Modal';

const useModal = (child) => {

    const [isModal, setModal] = useState(false);

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    const renderModal = isModal 
    ? <Portal><ModalWind  close={closeModal}>{child}</ModalWind></Portal>
    : null;
    return {
        renderModal,openModal
    }


}

export default useModal