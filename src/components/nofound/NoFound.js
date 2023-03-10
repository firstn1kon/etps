import "./nofound.scss";

const NoFound = ({term}) => {
    return (
        <div className="container">
            <div className="nofound">
                <div className="nofound__animate">
                    <img src="./img/lupa.png" alt="no results"/>
                </div>
                <div className="nofound__text">по запросу <span>{term}</span> не найдено ЭТП</div>
            </div>
        </div>
    )
}

export default NoFound