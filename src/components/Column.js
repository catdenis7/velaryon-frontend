import React from "react";
import "../assets/css/column.css";
import ProspectCard from "./ProspectCard";
import Card from "./ProspectCard";
export default function() {

    return (
        <div className="full-column">
            <div className="header-column" style={{backgroundColor: "#bccac3"}}>
                <h1 className="column-name">PROSPECTO</h1>
            </div>
            <div className="body-column" style={{backgroundColor: "#86a1ac"}}>
                <ProspectCard></ProspectCard><br></br>
                <ProspectCard></ProspectCard><br></br>
                <ProspectCard></ProspectCard><br></br>
                <ProspectCard></ProspectCard><br></br>
                <ProspectCard></ProspectCard><br></br>
                <ProspectCard></ProspectCard><br></br>
                <ProspectCard></ProspectCard><br></br>
                <ProspectCard></ProspectCard><br></br>
            </div>
        </div>
    );
}
