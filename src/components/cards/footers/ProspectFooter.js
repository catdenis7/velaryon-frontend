import React from "react";
import {
    BsFillTelephoneFill,
    BsLink45Deg,
    BsFillCalendarFill,
    BsPlusCircleFill,
} from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { MdExposurePlus1 } from "react-icons/md";
// import "../assets/css/cards.css";

export default function(props) {
    let data = props.props;
    return (
        <div className="row align-items-center" style={{ display: 'flex' }}>
            <div style={{ display: 'flex' }}>
                <div>
                    <BsFillCalendarFill color={"#406e73"} style={{ marginRight: 5 }} />
                    <small style={{ color: 'black' }}>Último ingreso: {Date(Date.parse(data.last_session)) ?? 'N/A'}</small>
                    <br></br>
                    <MdExposurePlus1 color={"#406e73"} style={{ marginRight: 5 }} />
                    <small style={{ color: 'black' }}>Contador de ingreso: {data.session_count}</small>
                </div>
                <div style={{marginLeft : 'auto', marginTop : 'auto'}}>
                <BsPlusCircleFill size={35} color={"#406e73"}/>
                </div>
            </div>
        </div>
    );
}
