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
import ContactFooter from "./footers/ContactFooter";
// import "../assets/css/cards.css";

export default function(props) {
    return (
        <div className="card card-margin">
            <div className="card-footer">
                <PersonalData props={props.props}></PersonalData>
                <ContactFooter props={props.props}></ContactFooter>
            </div>
        </div>
    );
}
