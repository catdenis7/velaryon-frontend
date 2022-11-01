import React from "react";
import {
    BsFillTelephoneFill,
    BsLink45Deg,
    BsFillCalendarFill,
    BsPlusCircleFill,
} from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { MdExposurePlus1 } from "react-icons/md";
import AddContactModal from "../../AddContactModal"
// import "../assets/css/cards.css";

export default function(props) {
    let data = props.props;
    return (
        <div className="row align-items-center" style={{ display: 'flex' }}>
            <div style={{ display: 'flex' }}>
                <div>
                    <BsFillCalendarFill color={"#406e73"} style={{ marginRight: 5 }} />
                    <small style={{ color: 'black' }}>Último ingreso: {new Date(data.last_session).toLocaleString() ?? 'N/A'}</small>
                    <br></br>
                    <MdExposurePlus1 color={"#406e73"} style={{ marginRight: 5 }} />
                    <small style={{ color: 'black' }}>Contador de ingreso: {data.session_count}</small>
                </div>
                <div style={{marginLeft : 'auto', marginTop : 'auto'}}>
                <BsPlusCircleFill size={35} color={"#406e73"} onClick={()=>{props.callback(props.props.client)}}/>
                </div>
            </div>
        </div>
    );
}
