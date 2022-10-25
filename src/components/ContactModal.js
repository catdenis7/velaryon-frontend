import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Example(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3 style={{color: "#406e73"}}>
              Añadir como Contacto
            </h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container text-container">
            <div className="row">
              <div className="col">Fecha de Contacto:</div>
              <div className="col">
                <input
                  type="date"
                  className="form-control"
                  placeholder="dd-mm-yy"
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col">Medio:</div>
              <div className="col">
                <select
                  className="form-select"
                  aria-label="multiple select example"
                >
                  <option selected>email</option>
                  <option value="1">mensaje de texto</option>
                  <option value="2">mensaje de whatsapp</option>
                  <option value="3">mensaje de messenger</option>
                  <option value="1">fax</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">Mensaje Enviado:</div>
              <div className="col">
                <textarea className="form-control" rows="2"></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col">Respuesta del Cliente:</div>
              <div className="col">
                <textarea className="form-control" rows="2"></textarea>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Example />);
