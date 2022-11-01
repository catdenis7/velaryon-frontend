import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import AcoordionItem from "../components/AccordionItem";
import "../assets/css/client.css";
import CardPersonalInformation from "../components/CardPersonalInformation";
import clientPageViewModel from "../viewmodels/ClientPageViewModel";
import ClientPage from "./ClientPage";
import contactPageViewModel from "../viewmodels/ContactPageViewModel";
import { Accordion } from "react-bootstrap";
import ContactAccordionHeader from "../components/accordions/ContactAccordionHeader";
import ContactAccordionBody from "../components/accordions/ContactAccordionBody";
import { useParams } from "react-router-dom";

let personalInformation = [
    {
        name: "Mauricio",
        lastName: "Sauza Torrez",
        phoneNumber: "78945612",
        email: "sauza@gmail.com",
        profilePicture: "https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=5367504253330521&width=1024&ext=1669488186&hash=AeTFJDupVu3NuKkmmjU"
    }
]

function ContactPage(props) {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         accordionItems: [],
    //     };
    // }
    //
    // async componentDidMount() {
    //     let result = await contactPageViewModel.find();
    //     console.log(result);
    //     // this.setState(result); // FUNCIONA IGUAL
    //     this.setState({
    //         accordionItems: result,
    //     });
    // }

    const [accordionItems, setAccordionItems] = useState([]);
    let params =  useParams();

    useEffect(() => {
        async function fetchData() {
            let result = await contactPageViewModel.find(params.id);
            setAccordionItems(result);
        }
        fetchData();
    },[])

    
    let accordions = accordionItems.map((accordion, index) => {
        return (<Accordion.Item eventKey={index}>
            <Accordion.Header>
                <ContactAccordionHeader data={accordion ?? []} index={index}>
                </ContactAccordionHeader>
            </Accordion.Header>
            <Accordion.Body>
                <ContactAccordionBody props={accordion ?? []}>
                </ContactAccordionBody>
            </Accordion.Body>
        </Accordion.Item>
        );
    });
    return (
        <Sidebar>
            <div className="main-contact-container">
                <div className="header-container">
                    <div className="title-container">
                        <h1 className="title">CONTACTO</h1>
                    </div>
                    <CardPersonalInformation personalInformation={personalInformation ?? []}></CardPersonalInformation>
                </div>
                <Accordion>
                    {accordions}
                </Accordion>
            </div>
        </Sidebar>
    );
}
export default ContactPage;
