import React from "react";
import "../assets/css/column.css";
import ProspectCard from '../components/cards/ProspectCard'
import ClientCard from "./cards/ClientCard";
import ContactCard from "./cards/ContactCard";
import FrecuentCard from "./cards/FrecuentCard";
export default function() {

    return (
        <div className="full-column">
            <div className="header-column" style={{backgroundColor: "#bccac3"}}>
                <h1 className="column-name">PROSPECTO</h1>
            </div>
            <div className="body-column" style={{backgroundColor: "#86a1ac"}}>
                <ProspectCard></ProspectCard><br></br>
                <ContactCard></ContactCard><br></br>
                <ClientCard></ClientCard><br></br>
                <FrecuentCard></FrecuentCard><br></br>
            </div>
        </div>
    );
}
