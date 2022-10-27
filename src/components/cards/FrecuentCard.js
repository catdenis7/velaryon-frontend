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
import FrecuentFooter from "./footers/FrecuentFooter";
// import "../assets/css/cards.css";
import { Card } from "react-bootstrap"

export default function(props) {
    return (
        <div>
            <Card>
                <Card.Title style={{fontSize : 18, margin: '10px'}}>
                    <PersonalData props={props.props} print='1'></PersonalData>
                </Card.Title>
                <Card.Title style={{fontSize : 18, margin: '10px'}}>
                    <FrecuentFooter props={props.props}></FrecuentFooter>
                </Card.Title>
            </Card>
        </div>
    );
}
