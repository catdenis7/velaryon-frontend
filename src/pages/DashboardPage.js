import React from "react";
import Sidebar from "../components/Sidebar";
import dashboardViewModel from "../viewmodels/DashboardViewModel";
import DashboardColumn from "../components/DashboardColumn"

import AddContactModal from "../components/AddContactModal";

class DashboardPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            prospects: [],
            contacts: [],
            clients: [],
            recurringClients: [],
            showModal: false,
            modalClient : ""
        }
        this.eventSource = new EventSource('http://localhost:5000/dashboard/notification');

    }

    async componentDidMount() {
        let result = await dashboardViewModel.find();
        console.log(result);
        this.setState({
            prospects: result.prospects,
            contacts: result.contacts,
            clients: result.clients,
            recurringClients: result.recurringClients,
        });

        this.initializeNotifications();
    }

    notificiationHandler(data) {
        let payload = JSON.parse(data);
        this.setState({
            prospects: payload.prospects,
            contacts: payload.contacts,
            clients: payload.clients,
            recurringClients: payload.recurringClients,
        });
    }

    initializeNotifications() {

        this.eventSource.onmessage = e =>
            this.notificiationHandler((e.data))

        this.eventSource.onerror = () => {
            this.eventSource.close();
        }

        return () => {
            this.eventSource.close();
        };

    }

    modalCallback = (data) => {
        console.log(data);
        this.setState({ showModal: !this.state.showModal, modalClient : data});
    }

    render() {
        return (
            <Sidebar>
                <AddContactModal 
                    show={this.state.showModal} 
                    callback={this.modalCallback} 
                    clientId={this.state.modalClient}
                ></AddContactModal>
                <div className="row">
                    <div className="row">
                        <div className="col">
                            <DashboardColumn props={this.state.prospects ?? []} callback={this.modalCallback} name="PROSPECTOS"></DashboardColumn>
                        </div>
                        <div className="col">
                            <DashboardColumn props={this.state.contacts ?? []} callback={this.modalCallback} name="CONTACTOS">
                            </DashboardColumn>
                        </div>
                        <div className="col">
                            <DashboardColumn props={this.state.clients ?? []} name="CLIENTES">
                            </DashboardColumn>
                        </div>
                        <div className="col">
                            <DashboardColumn props={this.state.recurringClients ?? []} name="CLIENTES FRECUENTES">
                            </DashboardColumn>
                        </div>
                    </div>
                </div>
            </Sidebar>
        );
    }
}

export default DashboardPage;
