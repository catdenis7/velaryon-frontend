import React, { useState, useRef, useEffect } from "react";
import {
  Modal,
  Form,
  Button,
  Row,
  Col,
  FormGroup,
  FormControl,
} from "react-bootstrap";
import "../assets/css/promotion.css";
import promosViewModel from "../viewmodels/PromosViewModel";
function PromotionModal({ show, handleClose }) {
  const [data, setData] = useState({
    discount: "",
    title: "",
    description: "",
    fromDate: "",
    toDate: "",
  });

  const [file, setFile] = useState();

  const inputFileRef = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    promosViewModel.insert(data, file);
    // window.location.reload();
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} size="xl">
      <Modal.Header>
        <h3 style={{ color: "#406e73", fontWeight: "bold" }}>
          Crear promoción
        </h3>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <Row>
            <Col lg={6}>
              <FormGroup>
                <Form.Label className="labels">Título</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Black Friday"
                  name="title"
                  value={data.title}
                  onChange={handleChange}
                ></Form.Control>
              </FormGroup>
              <FormGroup>
                <Form.Label className="labels">Descripción</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Descripción breve de la promoción"
                  name="description"
                  value={data.description}
                  onChange={handleChange}
                ></Form.Control>
              </FormGroup>
            </Col>
            <Col lg={6}>
              <FormGroup>
                <Form.Label className="labels">
                  Porcentaje de Descuento
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="50"
                  name="discount"
                  value={data.discount}
                  onChange={handleChange}
                ></Form.Control>
              </FormGroup>
              <FormGroup>
                <Form.Label className="labels">Fecha</Form.Label>
                <div className="formater-div">
                  <FormControl
                    type="datetime-local"
                    name="fromDate"
                    value={data.fromDate}
                    onChange={handleChange}
                  ></FormControl>
                  <Form.Label className="labels">To</Form.Label>
                  <FormControl
                    type="datetime-local"
                    name="toDate"
                    value={data.toDate}
                    onChange={handleChange}
                  ></FormControl>
                </div>
              </FormGroup>
              <FormGroup>
                <Form.Label className="labels">Imagen</Form.Label>
                <Form.Control type="file" name="image" onChange={handleFileChange}></Form.Control>
              </FormGroup>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button type="submit" onClick={handleChange}>
            Guardar
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default PromotionModal;
