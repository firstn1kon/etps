import { Fragment } from "react";

const EtpModal = ({passwords}) => {

    const renderEtps = passwords.map(passwordCurrentUser => <View key={passwordCurrentUser.name} data={passwordCurrentUser}/>);

    return (
        <>
        {renderEtps}
        </>
    )
}

export const View = ({data}) => {

    const {name, section} = data;

    const copyBuffer = (e) => {
        if (!e.target.classList.contains("copyimg")) return
        const setBuffer = navigator.clipboard.writeText(e.target.closest("div").previousSibling.textContent);
        setBuffer.then(() => navigator.clipboard.readText().then(text => e.target.nextSibling.textContent = `скопировано: ${text}`))
    }

    const setDefaultCopyMessage = (e) => {
        if (!e.target.classList.contains("copyimg")) return
        e.target.nextSibling.textContent= 'скопировать'
    }
    return (
        <div className="password">
            <h3>{name}</h3>
            {section.map(({section, login, passwords}, i) => {
                return (
                    <Fragment key ={login + i}>
                        <div className="password__wrapper">
                            <div className="password__section" style={section? {display: 'block'} : {display: 'none'}}>Секция {section}</div>
                            <div className="password__type">Логин</div>
                            <div className="password__pass">
                                <div className="password__pass-wrapper">
                                    <div>{login}</div>
                                    <div className="password__copy" onClick={(e) => copyBuffer(e)} onMouseLeave={(e)=> setDefaultCopyMessage(e)}>
                                        <img className="copyimg" width="20px" src="./img/copyicon.png" alt="скопировать"/>
                                        <div className="password__result">скопировать</div>
                                    </div>
                                </div>
                            </div>
                            <div className="password__type">
                                <h5>Пароли</h5>
                                <div className="password__info">i</div>
                            </div>
                            <div className="password__pass">
                                {passwords.map(password => {
                                    return (
                                        <div key={password} className="password__pass-wrapper">
                                            <div>{password}</div>
                                            <div className="password__copy" onClick={(e) => copyBuffer(e)} onMouseLeave={(e)=> setDefaultCopyMessage(e)}>
                                                <img className="copyimg" width="20px" src="./img/copyicon.png" alt="скопировать"/>
                                                <div className="password__result">скопировать</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Fragment>
                )
            })}
        </div>
    )
}

export default EtpModal