import emailPass from './data';
import {View} from "../../etps/etp/EtpModal";

import './emailmodal.scss'

const EmailModal = () => {
    return (
            <div className='email'>
                <a href="https://mail.yandex.ru/" alt="yandex mail" rel="noreferrer" target='_blank'>
                    <div className='email__wrapper'>
                        <img src="./img/logoyandexemail.png" alt="yandex mail"/>
                        <div className='email__type'><span>Я</span>ндекс почта</div>
                    </div>  
                </a>
                <View data={emailPass}/>
                <div className="email__notice">
                    На электронную почту приходят сообщения от ЭТП о подачи заявки, 
                    рассмотрение заявки, протоколы, подписание контрактов и другие важные уведомления. <br/>
                    Данная электронная почта указана преимущественно на всех ЭТП там где это было возможно. 
                    Часть уведомлений дублируется на почту зашитую в ключ ЭЦП.<br/>
                    Установлена двухфакторная аутентификация, для первого входа с нового устройства необходимо ввести код.
                    Для получения кода необходимо обратиться к руководителю московского представительства.
                </div>
            </div>
    )
}

export default EmailModal