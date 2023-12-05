import ReactDOM from "react-dom";
import { useEffect} from "react";

import "./modal.scss"
import "./passwords.scss"

const ModalWind = ({close, children}) => {

    useEffect(()=> {
        document.querySelector('body').style.cssText="overflow: hidden"
        return ()=> {
            document.querySelector('body').style.cssText="overflow: auto"
        }
    })

    useEffect(() => {
        window.addEventListener('keyup', closeByEscape)
        return ()=> {
            window.removeEventListener('keyup', closeByEscape)
        }
    })

    const closeByOverlay = (e) => {
        if (e.target.classList.contains('modalW')) {
            close()
        }
      
    }

    const closeByEscape = (e) => {
        if (e.code === "Escape") {
            close()
        }
      
    }

    if(!children) {
        return 
    }

    return (
        <div onClick={(e)=> closeByOverlay(e)} className="modalW">
            <div className="modalW__content">
               {children}
                <button onClick={close} className="modalW__close">&#10006;</button>
            </div>
        </div>
)

}



const outter = document.createElement('div');
const Portal = (props) => {
    useEffect(()=> {
        document.body.appendChild(outter);
        return () => {
            outter.remove()
        }
    })

    
    return (
        ReactDOM.createPortal(props.children, outter)
        
    )
    
}
export {ModalWind, Portal};