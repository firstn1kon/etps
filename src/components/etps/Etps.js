import { useState } from "react";

import etps from "./data";

import Etp from "./etp/Etp";

import NoFound from "../nofound/NoFound";

import "./etps.scss";

const Etps = ({term}) => {
    
    const [data] = useState(etps);
    const search = (data, term) => data.filter(item => item.search.toLowerCase().indexOf(term) > -1);
    const visiableData = search(data, term);

    if (visiableData.length === 0) return <NoFound term={term}/>

    return (
            <ul className="etps">
                {visiableData.map(item => <Etp key={item.id} data={item} />)}
            </ul>

    )
}

export default Etps