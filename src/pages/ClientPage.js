import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import AccordionItem from "../components/AccordionItem";
import "../assets/css/client.css";
import CardPersonalInformationClient from "../components/CardPersonalInformationClient";
import clientPageViewModel from "../viewmodels/ClientPageViewModel";
import { useParams } from "react-router-dom";


function ClientPage(props) {

    const [accordionItem, setAccordionItem] = useState([]);
    const [personalInformation, setPersonalInformation] = useState([]);

    const params = useParams();
    useEffect(() => {
        async function fetchData() {
            let result = await clientPageViewModel.find(params.id);
            console.log(result);
            setAccordionItem(result);

            let personalDataResult = await clientPageViewModel.getPersonalData(params.id);
            console.log(personalDataResult);
            setPersonalInformation(personalDataResult);
        }
        fetchData();
    }, []);

    return (
        <Sidebar>
            <div className="main-contact-container">
                <div className="header-container">
                    <div className="title-container">
                        <h1 className="title" style={{color: "#434846", fontWeight: "700"}}>CLIENTE</h1>
                    </div>
                    <CardPersonalInformationClient personalInformation={personalInformation ?? []}></CardPersonalInformationClient>
                </div>
                <AccordionItem accordionItem={accordionItem ?? []}></AccordionItem>
            </div>
        </Sidebar>
    );
}
export default ClientPage;
