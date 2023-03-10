import dataGis from "./dataGis"
import "./subservices.scss"
const Subservices = () => {

    const renderGis = (data) => 
        data.map(({name, logo, description, lk, lkUrl, notice}) => {
            return (
                <div className="gis-item" key={name}>
                    <div className="gis-item__header">
                        <div className="gis-item__name">{name}</div>
                        <div className="gis-item__logo"><img src={`./img/${logo}`} alt={name}/></div>
                    </div>
                    <div className="gis-item__descr">{description}</div>
                    <div className="gis-item__lk">
                        <div className="gis-item__typeLk">{lk}</div>
                        <a  className="gis-item__enter" href={lkUrl} rel="noreferrer" target='_blank'>
                           ВХОД</a>
                    </div>
                    <div className="gis-item__typeLkDescr">{notice}</div>
                </div>

            )
        })
    return (
        
        <div className="container">
                <div className="gis">
                    {renderGis(dataGis)}
            </div>
        </div>

    )
}

export default Subservices