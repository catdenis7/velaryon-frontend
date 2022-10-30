import React from "react";
import Sidebar from "../components/Sidebar";
import dashboardViewModel from "../viewmodels/DashboardViewModel";
import DashboardColumn from "../components/DashboardColumn"


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
        this.eventSource = new EventSource('http://localhost:5000/dashboard/notification');

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

        this.initializeNotifications();
    }

    notificiationHandler(data){
            console.log(data);
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

    render() {
        console.log('PROSPECTS' + JSON.stringify(this.state.prospects));
        return (
            <Sidebar>
                <div className="row">
                    <div className="row">
                        <div className="col">
                            <DashboardColumn props={this.state.prospects ?? []} name="PROSPECTOS"></DashboardColumn>
                        </div>
                        <div className="col">
                            <DashboardColumn props={this.state.contacts ?? []} name="CONTACTOS">
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
