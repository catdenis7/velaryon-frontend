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
import { Card } from "react-bootstrap";
// import "../assets/css/cards.css";

export default function(props) {
    return (
        <div>
            <Card>
                <Card.Title style={{fontSize : 18, margin: '10px'}}>
                    <PersonalData props={props.props} print='1'></PersonalData>
                </Card.Title>
                <Card.Title style={{fontSize : 18, margin: '10px'}}>
                    <ContactFooter props={props.props} callback={props.callback}></ContactFooter>
                </Card.Title>
            </Card>
        </div>
    );
}
