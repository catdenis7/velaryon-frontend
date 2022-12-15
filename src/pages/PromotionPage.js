import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "../assets/css/promotion.css";
import { Button } from "react-bootstrap";
import PromotionAccordion from "../components/accordions/PromotionsAccordion";
import PromotionModal from "../components/PromotionsModal";
import promosViewModel from "../viewmodels/PromosViewModel";
import { useParams } from "react-router-dom";
import { Accordion, Row, Col, Container } from "react-bootstrap";


function PromotionsPage() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [accordionItems, setAccordionItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let result = await promosViewModel.find();
      setAccordionItems(result);
    }
    fetchData();
  }, []);

  let accordions = accordionItems.map((accordion, index) => {
    return (
      <Accordion defaultActiveKey={[index]} alwaysOpen>
        <Accordion.Item eventKey="index">
          <Accordion.Header>
            <Row style={{display: 'flex'}}>
              <h5>{index + 1}. {accordion.title} - Valido desde el {new Date(accordion.fromDate).toLocaleDateString()} hasta {new Date(accordion.toDate).toLocaleDateString()}</h5>
            </Row>
          </Accordion.Header>
          <Accordion.Body>
            <Row>
              <Col>
                <span>Descripción: </span>
                <span>{accordion.description}</span>
                <br></br>
                <span>Descuento: </span>
                <span>{accordion.discount}%</span>
                <br></br>
                <span>Estado: </span>
                <span>{accordion.status.toString()}</span>
              </Col>
              <Col>
                <span>Imagen: </span>
                <br></br>
                {accordion.image}
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
  })

  return (
    <Sidebar>
      <div className="main-container">
        <div className="header-container">
          <div className="title-container">
            <h1
              className="title"
              style={{ color: "#434846", fontWeight: "700" }}
            >
              PROMOCIONES
            </h1>
          </div>
          <div className="actions-header">
            <Button variant="primary" onClick={handleShow}>
              Crear promoción
            </Button>
          </div>
          <hr className="line-hr"></hr>
        </div>
        <div className="body-container">
          <Accordion>{accordions}</Accordion>
        </div>
      </div>
      <PromotionModal show={show} handleClose={handleClose}></PromotionModal>
    </Sidebar>
  );
}
export default PromotionsPage;
