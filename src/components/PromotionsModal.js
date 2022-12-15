import ListGroup from 'react-bootstrap/ListGroup';
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
import PromosDropdown from "./PromosDropdown";
import PromosList from "./PromosList";
import Dropdown from 'react-bootstrap/Dropdown';
function PromotionModal({ show, handleClose }) {
  const [data, setData] = useState({
    discount: "",
    title: "",
    description: "",
    fromDate: "",
    toDate: "",
  });
  const [file, setFile] = useState();
  const [products, setProducts] = useState([
    { _id: "443", description: "Test" },
    { _id: "123", description: "Andoide" },
    { _id: "333", description: "Tesisdhjt" }
  ]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const [currentProduct, setCurrentProduct] = useState("")
  const inputFileRef = useRef();

  useEffect(() => {
    async function fetchData() {
      let result = await promosViewModel.getProducts();
      setProducts(result);
    }
    fetchData();
  }, []);

  const handleProductSelection = (event) => {
    setCurrentProduct(event.target.value);
  }

  const handleProductSubmit = (event) => {
    console.log(currentProduct);
    console.log(selectedProducts);
    let newProducts = selectedProducts;
    newProducts.push(products.find(elem => elem._id === currentProduct));
    console.log(newProducts);
    setSelectedProducts(newProducts);
    
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    promosViewModel.insert(data, file, selectedProducts);
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
              <FormGroup>
                <Form.Label className="labels">
                  Seleccione los productos
                </Form.Label>
                <Row>
                  <Col>
                    <Form.Select onChange={handleProductSelection} value={currentProduct}>
                      {
                        products.map((item) => {
                          return <option value={item._id}>{item.description}</option>
                        })
                      }
                    </Form.Select>
                    <Button onClick={handleProductSubmit}>Agregar</Button>
                  </Col>
                  <Col>
                    <ListGroup>
                      {
                        selectedProducts.map((item) => {
                          return <ListGroup.Item>{item.description ?? "N/A"}</ListGroup.Item>
                        })
                      }
                    </ListGroup>
                  </Col>
                </Row>
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
