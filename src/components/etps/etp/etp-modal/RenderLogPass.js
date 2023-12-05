import { Fragment } from "react";
import useCopyBuffer from "../../../hooks/useCopyBuffer";

const RenderLogPass = ({data}) => {

    const {name, section} = data;

    const {
        copyBuffer: copyLogin, 
        setDefaultCopyMessage: setDefaultLoginMessage, 
        copyRef: copyLoginRef, 
        copyResultRef: copyResultLoginRef
    } = useCopyBuffer()

    const {copyBuffer, setDefaultCopyMessage, copyRef, copyResultRef} = useCopyBuffer()

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
                                    <div ref={ref => copyLoginRef.current[i] = ref}>{login}</div>
                                    <div className="password__copy" onClick={() => copyLogin(i)} onMouseLeave={() => setDefaultLoginMessage(i)}>
                                        <img className="copyimg" width="20px" src="./img/copyicon.png" alt="скопировать"/>
                                        <div ref={ref => copyResultLoginRef.current[i] = ref} className="password__result">скопировать</div>
                                    </div>
                                </div>
                            </div>
                            <div className="password__type">
                                <h5>Пароли</h5>
                                <div className="password__info">i</div>
                            </div>
                            <div className="password__pass">
                                {passwords.map((password, i)=> {
                                    return (
                                        <div key={password} className="password__pass-wrapper">
                                            <div ref={ref => copyRef.current[i] = ref}>{password}</div>
                                            <div className="password__copy" onClick={() => copyBuffer(i)} onMouseLeave={()=>setDefaultCopyMessage(i)}>
                                                <img className="copyimg" width="20px" src="./img/copyicon.png" alt="скопировать"/>
                                                <div ref={ref => copyResultRef.current[i]= ref} className="password__result">скопировать</div>
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

export default RenderLogPass