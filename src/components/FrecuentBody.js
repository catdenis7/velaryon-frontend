import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FrecuentAccordion from "../components/FrecuentAccordion";
import FrecuentDetailAccordion from "../components/FrecuentDetailAccordion";
import AccordionItem from "./AccordionItem";
import frequentPageViewModel from "../viewmodels/FrequentPageViewModel"
import clientPageViewModel from "../viewmodels/ClientPageViewModel"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function FrecuentBody() {

    const [notifications, setNotifications] = useState([]);
    const [accordionItem, setAccordionItem] = useState([]);

    const params = useParams();

    useEffect(() => {
        async function fetchData() {
            let result = await frequentPageViewModel.find(params.id);
            console.log(result);
            setNotifications(result);
            let accordionItemResult = await clientPageViewModel.find(params.id);
            setAccordionItem(accordionItemResult);
        }
        fetchData();
    }, []);

    return (
        <Tabs
            defaultActiveKey="Notificaciones"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
        >
            <Tab eventKey="Notificaciones" title="Notificaciones">
                <FrecuentAccordion notifications={notifications ?? []}></FrecuentAccordion>
            </Tab>
            <Tab eventKey="Detalle de compra" title="Detalle de compra">
                  
                    <AccordionItem accordionItem={accordionItem ?? []}></AccordionItem>
            </Tab>
        </Tabs>
    );
}
