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
import "../assets/css/card.css";
export default function () {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-body-header">
          <div className="container text-center">
            <div className="row">
              <div className="col col-lg-2">
                <img src={capibaraPic} alt="Patito Pic" className="img-card" />
              </div>
              <div className="col">
                <h4 className="card-name">Mauricio Sauza Torrez</h4>
                <div className="dummy-display">
                  <div className="icon-card">
                    <BsFillTelephoneFill size={28}/>
                  </div>
                  <h5 className="card-infomation">73883886</h5>
                </div>
                <div className="dummy-display">
                  <div className="icon-card">
                    <HiMail size={28}/>
                  </div>
                  <h5 className="card-infomation">mauricio@gmail.com</h5>
                </div>
                <div className="dummy-display">
                  <div className="icon-card">
                    <BsLink45Deg size={28}/>
                  </div>
                  <h5 className="card-infomation">facebook/mauricio.com</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body-content">
          <div className="container text-center">
            <div className="row">
              <div className="col col-lg-4">
                <div className="dummy-display">
                  <div className="icon-card">
                    <BsFillCalendarFill size={28}/>
                  </div>
                  <h5 className="card-infomation">
                    Último ingreso: 22/07/2022
                  </h5>
                </div>
                <div className="dummy-display">
                  <div className="icon-card">
                    <MdExposurePlus1 size={28}/>
                  </div>
                  <h5 className="card-information">Contador de ingres: +1</h5>
                </div>
              </div>
              <div className="col col-lg-2">
                <div className="button-icon">
                  <BsPlusCircleFill size={42}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
