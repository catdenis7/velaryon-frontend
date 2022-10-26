import React from "react";
import Sidebar from "../components/Sidebar";
import Column from "../components/Column";
import dashboardViewModel from "../viewmodels/DashboardViewModel";
import ProspectCard from "../components/cards/ProspectCard";
import ContactModal from "../components/cards/ContactModal";
import { Button, Modal, Row } from "react-bootstrap";


class DashboardPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            prospects: [],
            contacts: [],
            clients: [],
            recurringClients: [],
            showModal: false
        }
    }

    async componentDidMount() {
        let result = await dashboardViewModel.find();
        console.log(result);
        // this.setState(result); // FUNCIONA IGUAL
        this.setState({
            prospects: result.prospects,
            contacts: result.contacts,
            clients: result.clients,
            recurringClients: result.recurringClients,
        });
    }

    render() {
        return (
            <Sidebar>
                <div className="row">
                    <div className="row">
                        <div className="col">
                            <Column props={this.state.prospects ?? []} name="PROSPECTO" >
                            </Column>
                        </div>
                        <div className="col">
                            <Column props={this.state.contacts ?? []} name="CONTACTOS">
                            </Column>
                        </div>
                        <div className="col">
                            <Column props={this.state.clients ?? []} name="CLIENTES">
                            </Column>
                        </div>
                        <div className="col">
                            <Column props={this.state.recurringClients ?? []} name="CLIENTES RECURRENTES">
                            </Column>
                        </div>
                    </div>
                </div>
            </Sidebar>
        );
    }
}

export default DashboardPage;
