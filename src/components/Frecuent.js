import React from "react";
import Sidebar from "./Sidebar";
import capibaraPic from "../assets/images/Capibara formal-modified.png";
import { BsFillTelephoneFill, BsLink45Deg } from "react-icons/bs";
// import "bootstrap/dist/css/bootstrap.min.css";
import { HiMail } from "react-icons/hi";
import "../assets/css/client.css";
import { Accordion } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
export default function () {
  return (
    <Sidebar>
      <div className="main-contact-container">
        <div className="header-container">
          <div className="title-container">
            <h1 className="title">CLIENTE FRECUENTE</h1>
          </div>
          <div className="user-information-container">
            <div className="container text-center">
              <div className="row">
                <div className="img-col col col-lg-2">
                  <img
                    src={capibaraPic}
                    alt="Patito Pic"
                    className="img-card"
                  />
                </div>
                <div className="col">
                  <h2 className="user-name">Mauricio Sauza Torrez</h2>
                  <div className="row">
                    <div className="information-col col">
                      <div className="icon-card">
                        <BsFillTelephoneFill size={28} />
                      </div>
                      <h5 className="user-information">73883886</h5>
                    </div>
                    <div className="information-col col">
                      <div className="icon-card">
                        <HiMail size={28} />
                      </div>
                      <h5 className="user-information">mauricio@gmail.com</h5>
                    </div>
                    <div className="information-col col">
                      <div className="icon-card">
                        <BsLink45Deg size={28} />
                      </div>
                      <h5 className="user-information">
                        facebook/mauricio.com
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" style={{ backgroundColor: "#eeeeee" }}>
            <Accordion.Header>1. Notificación - 23/10/2022</Accordion.Header>
            <Accordion.Body>
              <label>Mensaje enviado:</label>
              <span>Estás interesado en el nuevo álbum de Marco Antonio Solis</span>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" style={{ backgroundColor: "#eeeeee" }}>
            <Accordion.Header>2. Notificación - 24/10/2022</Accordion.Header>
            <Accordion.Body>
              <label>Mensaje enviado:</label>
              <span>Estás interesado en el nuevo álbum de Harry Styles</span>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" style={{ backgroundColor: "#eeeeee" }}>
            <Accordion.Header>3. Notificación - 23/11/2022</Accordion.Header>
            <AccordionBody>
              <label>Mensaje enviado:</label>
              <span>Estás interesado en el nuevo álbum de The Killers</span>
            </AccordionBody>
          </Accordion.Item>
        </Accordion>
      </div>
    </Sidebar>
  );
}
