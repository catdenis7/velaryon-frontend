import { Button } from "bootstrap";
import React from "react";
import {
    BsFillTelephoneFill,
    BsLink45Deg,
    BsFillCalendarFill,
    BsPlusCircleFill,
    BsFillCartCheckFill,
    BsArrowRepeat
} from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { MdExposurePlus1 } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
// import "../assets/css/cards.css";

export default function(props) {
    let data = props.props;
    return (
        <div className="row align-items-center" style={{ display: "flex" }}>
            <div style={{ display: "flex" }}>
                <div className="col">
                    <BsArrowRepeat color={"#406e73"} style={{ marginRight: 5 }} />
                    <small style={{ color: "black" }}>Frecuencia de Pedidos: {data.frequency} días</small>
                    <br></br>
                    <BsFillCalendarFill color={"#406e73"} style={{ marginRight: 5 }} />
                    <small style={{ color: "black" }}>Última fecha de Compra: {new Date(data.order_date).toLocaleString() ?? 'N/A'}</small>
                    <br></br>
                    <FaMoneyBillAlt color={"#406e73"} style={{ marginRight: 5 }} />
                    <small style={{ color: "black" }}>Monto Promedio de Compra: Bs. {data.average}</small>
                    <br></br>
                    <button
                        type="submit"
                        className="btn btn-primary btn-submit"
                        style={{ width: "150px", float: "right" }}
                    >
                        Notificaciones
                    </button>
                </div>
            </div>
        </div>
    );
}
