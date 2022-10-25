import React from "react";
import {
  BsFillTelephoneFill,
  BsLink45Deg,
  BsFillCalendarFill,
  BsPlusCircleFill,
} from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { MdExposurePlus1 } from "react-icons/md";
import capibaraPic from "../assets/images/Capibara formal-modified.png";
import "../assets/css/cards.css";
export default function () {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col col-lg-5">
                  <img
                    src={capibaraPic}
                    alt="Patito Pic"
                    className="img-card"
                    width="20"
                  />
                </div>
                <div className="col">
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "#406e73",
                      fontWeight: "800",
                    }}
                  >
                    <small>Mauricio Sauza Torrez</small>
                  </span>
                  <br></br>
                  <BsFillTelephoneFill size={10} color={"#406e73"} />
                  <span style={{ fontSize: "0.7rem", fontWeight: "700" }}>
                    <small>73883886</small>
                  </span>
                  <br></br>
                  <HiMail size={10} color={"#406e73"} />
                  <span style={{ fontSize: "0.7rem", fontWeight: "700" }}>
                    <small>mauricio@gmail.com</small>
                  </span>
                  <br></br>
                  <BsLink45Deg size={10} color={"#406e73"} />
                  <span style={{ fontSize: "0.7rem", fontWeight: "700" }}>
                    <small>facebook/mauricio.com</small>
                  </span>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="row align-items-center">
                <div className="col">
                  <BsFillCalendarFill size={10} color={"#406e73"} />
                  <span style={{ fontSize: "0.7rem", fontWeight: "700" }}>
                    <small>Fecha de contacto: 22/07/2022</small>
                  </span>
                  <br></br>
                  <MdExposurePlus1 size={10} color={"#406e73"} />
                  <span style={{ fontSize: "0.7rem", fontWeight: "700" }}>
                    <small>Veces contactadas: 20</small>
                  </span>
                  <br></br>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="d-grid gap-2 col-6">
                    <button
                      type="submit"
                      className="btn btn-primary btn-submit btn-sm"
                      
                    >
                      <small>Detalle</small>
                    </button>
                  </div>
                </div>
                <div className="col col-lg-2">
                  <BsPlusCircleFill size={28} color={"#406e73"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
