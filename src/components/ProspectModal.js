import React from "react";
import prospectModalViewModel from "../viewmodels/ProspectModalViewModel";
import { Modal, Form, Button } from "react-bootstrap";

class ProspectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prospectId: "",
      methods: [],
      date: Date,
      message: "",
      response: "",
      contactMethod: "",
      name: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    };
  }

  async componentDidMount() {
    let result = await prospectModalViewModel.find();
    this.setState({ methods: result });
  }

  changeState() {
    this.setState({ show: !this.state.show });
  }

  async storeContact() {
    this.setState({ prospectId: this.props.prospectId });
    prospectModalViewModel.addContact(this.state);
    this.props.callback();
  }

  render() {
    let contactMethods = this.state.methods.map((item) => {
      return <option value={item.value}>{item.text}</option>;
    });
    return (
      <Modal show={this.props.show} size="xl">
        <Modal.Header closeButton>
          <h3 style={{ color: "#406e73", fontWeight: "bold" }}>
            Añadir como contacto
          </h3>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <div className="row">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Nombre
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    value={this.state.name}
                    onChange={(e) => {
                      this.setState({ name: e.target.value });
                    }}
                    id="exampleInputEmail1"
                    aria-describedby="name"
                  ></input>
                </div>
              </div>
              <div className="row">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Apellido
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    value={this.state.lastName}
                    onChange={(e) => {
                      this.setState({ lastName: e.target.value });
                    }}
                    id="exampleInputEmail1"
                    aria-describedby="lastName"
                  ></input>
                </div>
              </div>
              <div className="row">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Teléfono
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    value={this.state.phoneNumber}
                    onChange={(e) => {
                      this.setState({ phoneNumber: e.target.value });
                    }}
                    id="exampleInputEmail1"
                    aria-describedby="phoneNumber"
                  ></input>
                </div>
              </div>
              <div className="row">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    value={this.state.email}
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                    id="exampleInputEmail1"
                    aria-describedby="email"
                  ></input>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="row"
                style={{
                  color: "#406e73",
                  display: "flex",
                  margin: "20px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <span style={{ fontWeight: "bold", marginRight: "20px" }}>
                    Fecha de Contacto:
                  </span>
                  <input
                    type="datetime-local"
                    className="form-control"
                    value={this.state.date}
                    onChange={(e) => this.setState({ date: e.target.value })}
                  ></input>
                </div>
              </div>
              <div
                className="row"
                style={{
                  color: "#406e73",
                  display: "flex",
                  margin: "20px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <span style={{ fontWeight: "bold", marginRight: "20px" }}>
                    Medio:
                  </span>
                  <select
                    className="form-select"
                    value={this.state.contactMethod}
                    onChange={(e) =>
                      this.setState({ contactMethod: e.target.value })
                    }
                  >
                    {contactMethods}
                  </select>
                </div>
              </div>
              <div
                className="row"
                style={{
                  color: "#406e73",
                  display: "flex",
                  margin: "20px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <span style={{ fontWeight: "bold", marginRight: "20px" }}>
                    Mensaje Enviado:
                  </span>
                  <textarea
                    className="form-control"
                    value={this.state.message}
                    onChange={(e) => {
                      this.setState({ message: e.target.value });
                    }}
                  ></textarea>
                </div>
              </div>

              <div
                className="row"
                style={{
                  color: "#406e73",
                  display: "flex",
                  margin: "20px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <span style={{ fontWeight: "bold", marginRight: "20px" }}>
                    Respuesta del Cliente:
                  </span>
                  <textarea
                    className="form-control"
                    value={this.state.response}
                    onChange={(e) => {
                      this.setState({ response: e.target.value });
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.callback}>
            Cancelar
          </Button>
          <Button onClick={async () => await this.storeContact()}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ProspectModal;
