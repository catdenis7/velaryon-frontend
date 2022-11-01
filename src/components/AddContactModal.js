import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap';
import addContactModalViewModel from '../viewmodels/AddContactModalViewModel';

class AddContactModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clientId: "",
            methods: [],
            date: Date,
            contactMethod: "",
            message: "",
            response: "",

        }

    }

    async componentDidMount() {
        let result = await addContactModalViewModel.find();
        this.setState({ methods: result });
    }

    changeState() {
        this.setState({ show: !this.state.show })
    }

    async storeContact() {
        this.setState({clientId : this.props.clientId})
        addContactModalViewModel.addContact(this.state);
    }

    render() {
        let contactMethods = this.state.methods.map((item) => {
            return <option value={item.value}>{item.text}</option>
        })
        return <div>
            <Modal show={this.props.show} size="xl">
                <Modal.Header>
                    <h3 style={{ color: "#406e73", fontWeight: "bold" }}>Añadir como contacto</h3>
                </Modal.Header>
                <Modal.Body>
                    <div className="row" style={{ color: "#406e73", display: 'flex', margin: "20px" }}>
                        <div style={{ display: 'flex' }}>
                            <span style={{ fontWeight: "bold", marginRight: '20px' }}>Fecha de Contacto:</span>
                            <Form.Control
                                type="date"
                                value={this.state.date}
                                onChange={e => this.setState({ date: e.target.value })}>
                            </Form.Control>
                        </div>
                    </div>
                    <div className="row" style={{ color: "#406e73", display: 'flex', margin: "20px" }}>
                        <div style={{ display: 'flex' }}>
                            <span style={{ fontWeight: "bold", marginRight: '20px' }}>Medio:</span>
                            <Form.Select
                                value={this.state.contactMethod}
                                onChange={e => this.setState({ contactMethod: e.target.value })}>
                                {contactMethods}
                            </Form.Select>
                        </div>
                    </div>
                    <div className="row" style={{ color: "#406e73", display: 'flex', margin: "20px" }}>
                        <div style={{ display: 'flex' }}>
                            <span style={{ fontWeight: "bold", marginRight: '20px' }}>Mensaje Enviado:</span>
                            <Form.Control
                                as="textarea"
                                value={this.state.message}
                                onChange={e => { this.setState({ message: e.target.value }) }}>

                            </Form.Control>
                        </div>
                    </div>
                    <div className="row" style={{ color: "#406e73", display: 'flex', margin: "20px" }}>
                        <div style={{ display: 'flex' }}>
                            <span style={{ fontWeight: "bold", marginRight: '20px' }}>Respuesta del Cliente:</span>
                            <Form.Control
                                as="textarea"
                                value={this.state.response}
                                onChange={e => this.setState({ response: e.target.value })}>
                            </Form.Control>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.callback}>
                        Cancelar
                    </Button>
                    <Button onClick={async () => await this.storeContact() }>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    }
}

export default AddContactModal;
