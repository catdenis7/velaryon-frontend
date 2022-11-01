import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import {
    BsFillTelephoneFill,
    BsLink45Deg,
    BsFillCalendarFill,
    BsPlusCircleFill,
    BsFillCartCheckFill,
} from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { MdExposurePlus1 } from "react-icons/md";
// import "../assets/css/cards.css";

export default function(props) {
    let data = props.props;
    let id = "client/" + data._id;
    return (
        <div className="row align-items-center" style={{ display: "flex" }}>
            <div style={{ display: "flex" }}>
                <div className="col">
                    <BsFillCalendarFill color={"#406e73"} style={{ marginRight: 5 }} />
                    <small style={{ color: "black" }}>Último pedido: {new Date(data.order_date).toLocaleString() ?? 'N/A'}</small>
                    <br></br>
                    <BsFillCartCheckFill color={"#406e73"} style={{ marginRight: 5 }} />
                    <small style={{ color: "black" }}>Cantidad de Productos: {data.product_count}</small>
                    <br></br>
                    <Link to={id}>
                        <button
                        type="submit"
                        className="btn btn-primary btn-submit"
                        style={{ width: "150px", float: "right" }}
                        >
                        Detalle
                    </button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
}
