import React from "react";
import "../assets/css/column.css";
import ProspectCard from '../components/cards/ProspectCard'
import ClientCard from "./cards/ClientCard";
import ContactCard from "./cards/ContactCard";
import FrecuentCard from "./cards/FrecuentCard";

export default function(props) {
    console.log("COLUMN")
    console.log(props);
    const cards = props.props.map((item) => {
        switch (props.name) {
            case "PROSPECTO":
                return <div><ProspectCard props={item}></ProspectCard><br></br></div>
            case "CONTACTOS":
                return <div><ContactCard props={item}></ContactCard><br></br></div>
            case "CLIENTES":
                return <div><ClientCard props={item}></ClientCard><br></br></div>
            case "CLIENTES RECURRENTES":
                return <div><FrecuentCard props={item}></FrecuentCard><br></br></div>
        }
    })
    return (
        <div className="full-column">
            <div className="header-column" style={{ backgroundColor: "#bccac3" }}>
                <h1 className="column-name">{props.name}</h1>
            </div>
            <div className="body-column" style={{ backgroundColor: "#86a1ac" }}>
                {cards}
            </div>
        </div>
    );
}
                // <ProspectCard props={props}></ProspectCard><br></br>
                // <ContactCard props={props}></ContactCard><br></br>
                // <ClientCard props={props}></ClientCard><br></br>
                // <FrecuentCard props={props}></FrecuentCard><br></br>
