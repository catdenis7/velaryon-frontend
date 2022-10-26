import { Button } from "bootstrap";
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
                    <small style={{ color: 'black' }}>Fecha de Contacto: {Date(Date.parse(data.last_contact))}</small>
                    <br></br>
                    <MdExposurePlus1 color={"#406e73"} style={{ marginRight: 5 }} />
                    <small style={{ color: 'black' }}>Veces Contactadas: {data.contact_count}</small>
                    <br></br>
                    <button type="submit" className="btn btn-primary btn-submit" style={{width : '150px'}}>
                        Detalle
                    </button>
                </div>
                <div style={{ marginLeft: 'auto', marginTop: 'auto' }}>
                    <BsPlusCircleFill size={35} color={"#406e73"} />
                </div>
            </div>
        </div>
    );
}
