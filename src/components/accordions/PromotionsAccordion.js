import React from "react";
import { Accordion, Row, Col, Container } from "react-bootstrap";

function promotionAccordion() {
    return (
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <Row>
                    <Col>Big stuff</Col>
                    <Col>Image?</Col>
                  </Row>
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
    );
}

export default promotionAccordion;