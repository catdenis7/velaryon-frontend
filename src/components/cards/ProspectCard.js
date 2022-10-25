import React from "react";
import capibaraPic from "../../assets/images/Capibara formal-modified.png";
import {
    BsFillTelephoneFill,
    BsLink45Deg,
    BsFillCalendarFill,
    BsPlusCircleFill,
} from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { MdExposurePlus1 } from "react-icons/md";
import PersonalData from "./PersonalData";
import ProspectFooter from "./footers/ProspectFooter";
// import "../assets/css/cards.css";

export default function(props) {
    console.log("Prospect Card" + JSON.stringify(props.props))
    return (
        <div className="card card-margin">
            <div className="card-footer">
                <PersonalData props={props.props}></PersonalData>
                <ProspectFooter props={props.props}>
                </ProspectFooter>
            </div>
        </div>
    );
}
