import Search from "../search/Search"
import Moment from "react-moment"
import "./header.scss"

const Header = ({setTerm, disable}) => {


    return (
        <>
            <header className="header">
                <div className="header__logo" onClick={()=> window.location.reload()}><img src="./img/logotype.svg" alt="ЮУрСЦУ"/></div>
                <Search setTerm={setTerm} disable={disable}/>
                <div className="header__date"><Moment format="YYYY-MM-DD HH:mm:ss" interval={1000}/></div>
            </header>
        </>


    )
}

export default Header