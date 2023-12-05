import { useMemo } from 'react';
import useModal from '../hooks/useModal';
import EmailModal from './emailModal/EmailModal';

import './nav.scss';

const Nav = ({toggleMenu, active}) => {
    const {renderModal, openModal} = useModal(<EmailModal/>);

    const buttons = useMemo(()=>[
        {
        section: "main",
        name: 'площадки',
        },
        {
        section: "services",
        name: 'ГИС',
        },

    ],[])

    const renderButtons = useMemo(()=>buttons.map(({section, name}) => {
        const activeClass = active === section ? "nav__button_active" : "";
        return (
            <button key={name} className={`nav__button ${activeClass}`} onClick={()=> toggleMenu(section)}>
            {name}
            </button>
        )
    }),[buttons, active, toggleMenu])

    return (
        <nav className="nav">
            {renderButtons}
            <img className='nav__email'  alt="email" src="./img/email.png" onClick={openModal}/>
            {renderModal}
        </nav>
   
    )
}

export default Nav