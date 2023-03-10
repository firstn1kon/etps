import { useState } from "react";
import { ModalWind, Portal } from '../modal/Modal';

const useModal = (children) => {

    const [isModal, setModal] = useState(false);

    const renderModal = isModal ? 
    <Portal><ModalWind  close={()=>setModal(false)}>{children}</ModalWind></Portal>
    : null;
    return {
        renderModal, setModal
    }


}

export default useModal