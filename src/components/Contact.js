import React, { useState } from "react";
import Sidebar from "./Sidebar";
import capibaraPic from "../assets/images/Capibara formal-modified.png";
import { BsFillTelephoneFill, BsLink45Deg } from "react-icons/bs";
// import "bootstrap/dist/css/bootstrap.min.css";
import { HiMail } from "react-icons/hi";
import "../assets/css/contact.css";
import { Accordion } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import ContactModal from "../components/ContactModal";
export default function () {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Sidebar>
        <div className="main-contact-container">
          <div className="header-container">
            <div className="title-container">
              <h1 className="title">CONTACTO</h1>
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
                            onClick={handleShow}
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
              <Accordion.Header>1. Contacto - 23/10/2022</Accordion.Header>
              <Accordion.Body>
                <label>Enviado por:</label>
                <span>RPA</span>
                <br></br>
                <label>Medio:</label>
                <span>Email</span>
                <br></br>
                <label>Mensaje Enviado:</label>
                <span>
                  Estás interesado en el nuevo álbum de Marco Antonio Solis?
                </span>
                <br></br>
                <label>Respuesta:</label>
                <span>No, gracias</span>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" style={{ backgroundColor: "#eeeeee" }}>
              <Accordion.Header>2. Contacto - 24/10/2022</Accordion.Header>
              <Accordion.Body>
                <label>Enviado por:</label>
                <span>Usuario</span>
                <br></br>
                <label>Medio:</label>
                <span>Email</span>
                <br></br>
                <label>Mensaje Enviado:</label>
                <span>Estás interesado en el nuevo álbum de The Killers?</span>
                <br></br>
                <label>Respuesta:</label>
                <span>Más información por favor</span>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" style={{ backgroundColor: "#eeeeee" }}>
              <Accordion.Header>3. Contacto - 23/11/2022</Accordion.Header>
              <AccordionBody>
                <label>Enviado por:</label>
                <span>Usuario</span>
                <br></br>
                <label>Medio:</label>
                <span>Teléfono</span>
                <br></br>
                <label>Mensaje Enviado:</label>
                <span>Estás interesado en el nuevo álbum de Coldplay</span>
                <br></br>
                <label>Respuesta:</label>
                <span>Sí, más información por favor</span>
              </AccordionBody>
            </Accordion.Item>
          </Accordion>
        </div>
      </Sidebar>
      <ContactModal  show={show} handleClose={handleClose}/>
    </>
  );
}
