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
            <h1 className="title">CLIENTE</h1>
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
                    <div className="information-col col">
                      <div className="d-grid gap-2 mx-auto">
                        <button
                          type="submit"
                          className="btn btn-primary btn-submit"
                        >
                          Agregar Detalle
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" style={{ backgroundColor: "#eeeeee" }}>
            <Accordion.Header>
              1. Venta - 23/10/2022___________________Cantidad: 2_________TOTAL:
              Bs. 240
            </Accordion.Header>
            <Accordion.Body>
              <div className="container">
                <div className="row">
                  <div className="col">Cantidad</div>
                  <div className="col">Producto</div>
                  <div className="col">Precio Unitario</div>
                  <div className="col">Total</div>
                </div>
                <div className="row">
                  <div className="col">2</div>
                  <div className="col">The Beatles - Let it Be - CD</div>
                  <div className="col">Bs. 120</div>
                  <div className="col">Bs. 240</div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" style={{ backgroundColor: "#eeeeee" }}>
            <Accordion.Header>
              2. Venta - 24/10/2022___________________Cantidad: 3_________TOTAL:
              Bs. 350
            </Accordion.Header>
            <Accordion.Body>
              <div className="container">
                <div className="row">
                  <div className="col">Cantidad</div>
                  <div className="col">Producto</div>
                  <div className="col">Precio Unitario</div>
                  <div className="col">Total</div>
                </div>
                <div className="row">
                  <div className="col">1</div>
                  <div className="col">The Beatles - Hey Jude - CD</div>
                  <div className="col">Bs. 90</div>
                  <div className="col">Bs. 90</div>
                </div>
                <div className="row">
                  <div className="col">2</div>
                  <div className="col">Harry Styles - Fine Line - Vinilo</div>
                  <div className="col">Bs. 130</div>
                  <div className="col">Bs. 260</div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" style={{ backgroundColor: "#eeeeee" }}>
            <Accordion.Header>
              3. Venta - 23/11/2022___________________Cantidad: 1_________TOTAL:
              Bs. 120
            </Accordion.Header>
            <AccordionBody>
              <div className="container">
                <div className="row">
                  <div className="col">Cantidad</div>
                  <div className="col">Producto</div>
                  <div className="col">Precio Unitario</div>
                  <div className="col">Total</div>
                </div>
                <div className="row">
                  <div className="col">1</div>
                  <div className="col">The Beatles - Hey Jude - CD</div>
                  <div className="col">Bs. 90</div>
                  <div className="col">Bs. 90</div>
                </div>
                <div className="row">
                  <div className="col">2</div>
                  <div className="col">Harry Styles - Fine Line - Vinilo</div>
                  <div className="col">Bs. 130</div>
                  <div className="col">Bs. 260</div>
                </div>
              </div>
            </AccordionBody>
          </Accordion.Item>
        </Accordion>
      </div>
    </Sidebar>
  );
}
