import { useRef } from "react";

const useCopyBuffer = () => {

    const copyRef = useRef([]);
    const copyResultRef = useRef([]);


    const copyBuffer = (i) => {
        if (!copyRef.current[i]) return
        const setBuffer = navigator.clipboard.writeText(copyRef.current[i].textContent);
        setBuffer.then(() => navigator.clipboard.readText().then(text => copyResultRef.current[i].textContent = `скопировано: ${text}`))
    }

    const setDefaultCopyMessage = (i) => {
        if (!copyResultRef.current[i]) return
        copyResultRef.current[i].textContent = 'скопировать'
    }

    return {
        copyBuffer,
        setDefaultCopyMessage,
        copyRef,
        copyResultRef
    }

}

export default useCopyBuffer