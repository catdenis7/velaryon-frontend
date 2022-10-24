import React from "react";
import "../assets/css/column.css";
import Card from "./Card";
export default function() {

    return (
        <div className="full-column">
            <div className="header-column" style={{backgroundColor: "#8FA69B"}}>
                <h1 className="column-name">PROSPECTO</h1>
            </div>
            <div className="body-column" style={{backgroundColor: "#86A1AC"}}>
            </div>
        </div>
    );
}