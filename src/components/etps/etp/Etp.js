import { useState} from "react";
import useModal from "../../hooks/useModal";

import EtpModal from "./EtpModal";
const Etp = ({data}) => {
    const {name, logo, sections, passwords} = data;
    const [isClick, setClick] = useState(false);
    const {renderModal, setModal} = useModal(<EtpModal passwords={passwords}/>);

    const toggleScreenByClass = isClick ? "active" : "";

    const renderSectionsEtp = sections.map(({name, url}) => {
        return (
            <div className="etps__etp-section" key={name}>
                <div className="etps__etp-section-item">{name}</div>
                <a href={url} rel="noreferrer" target="_blank"><div className="etps__etp-section-login">вход</div></a>
            </div>                    
        )
    });

    const showButtonPasswords = passwords? 
        <button className="etps__etp-button" onClick={()=> setModal(modal => !modal)}>
        Показать пароли
        </button> : null;

    const toggleScreen = () => {
        setClick(click => !click)
    };


    return (
        <li className="etps__etp">
            <div className={`etps__etp-wrapper ${toggleScreenByClass}`}>
                <div className="etps__etp-sections">
                    <div className="etps__etp-title">
                        <div className="etps__etp-name">{name}</div>
                        <div className="etps__etp-img"><img src ={`./img/${logo}`} width="100px" alt={name}/></div>
                    </div>
                    <h4>Секции</h4>
                    {renderSectionsEtp}
                </div>
                <div className="etps__etp-passwords">
                    <span className="etps__etp-enter">
                        Приоритетный вход осуществляется через госуслуги или по ЭЦП
                    </span>
                    {showButtonPasswords}
                    {renderModal}
                </div>
            </div>
            <button className="etps__etp-button etps__etp-button_absolute" onClick={() => toggleScreen()}>
                {isClick ? "НАЗАД" : "ПАРОЛИ"}
            </button>
        </li>
    )
}

export default Etp