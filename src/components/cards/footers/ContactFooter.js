import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import {
    BsFillTelephoneFill,
    BsLink45Deg,
    BsFillCalendarFill,
    BsPlusCircleFill,
} from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { MdExposurePlus1 } from "react-icons/md";
// import "../assets/css/cards.css";

export default function (props) {
    let data = props.props;
    let id = "contact/" + data._id;
    return (
        <div className="row align-items-center" style={{ display: 'flex' }}>
            <div style={{ display: 'flex' }}>
                <div>
                    <BsFillCalendarFill color={"#406e73"} style={{ marginRight: 5 }} />
                    <small style={{ color: 'black' }}>Fecha de Contacto: {new Date(data.last_contact).toLocaleString() ?? 'N/A'}</small>
                    <br></br>
                    <MdExposurePlus1 color={"#406e73"} style={{ marginRight: 5 }} />
                    <small style={{ color: 'black' }}>Veces Contactadas: {data.contact_count}</small> <br></br>
                    <Link to={id}>
                        <button type="submit" className="btn btn-primary btn-submit" style={{ width: '150px' }}>
                            Detalle
                        </button>
                    </Link>
                </div>
                <div style={{ marginLeft: 'auto', marginTop: 'auto' }}>
                    <BsPlusCircleFill size={35} color={"#406e73"} onClick={()=>{props.callback(data._id)}} />
                </div>
            </div>
        </div>
    );
}
