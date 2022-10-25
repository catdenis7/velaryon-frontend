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
import ClientFooter from "./footers/ClientFooter";
// import "../assets/css/cards.css";

export default function() {
    return (
        <div className="card card-margin">
            <div className="card-footer">
                <PersonalData></PersonalData>
                <ClientFooter></ClientFooter>
            </div>
        </div>
    );
}
