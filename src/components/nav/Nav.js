import useModal from '../hooks/useModal';

import EmailModal from './emailModal/EmailModal';

import './nav.scss';

const Nav = ({toggleMenu, active}) => {
    const {renderModal, setModal} = useModal(<EmailModal/>);

    const buttons = [
        {
        section: "main",
        name: 'площадки',
        },
        {
        section: "services",
        name: 'ГИС',
        },

    ];

    const renderButtons = buttons.map(({section, name}) => {
        const activeClass = active === section ? "nav__button_active" : "";
        return (
            <button key={name} className={`nav__button ${activeClass}`} onClick={()=> toggleMenu(section)}>
            {name}
            </button>
        )
    })

    return (
        <nav className="nav">
            {renderButtons}
            <img className='nav__email'  alt="email" src="./img/email.png" onClick={()=> setModal(true)}/>
            {renderModal}
        </nav>
   
    )
}

export default Nav