import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import AcoordionItem from "../components/AccordionItem";
import "../assets/css/client.css";
import CardPersonalInformation from "../components/CardPersonalInformationClient";
import clientPageViewModel from "../viewmodels/ClientPageViewModel";
import { useParams } from "react-router-dom";


function ClientPage(props) {

    const [accordionItem, setAccordionItem] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const params = useParams();
    useEffect(() => {
        async function fetchData() {
            let result = await clientPageViewModel.find(params.id);
            console.log(result);
            setAccordionItem(result)
        }
        fetchData();
    }, []);

    const personalInformation = [
      {
          name: "Catherine",
          lastName: "Gomez Quispe",
          phoneNumber: "78945612",
          email: "cat@gmail.com",
          profilePicture: "https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=5367504253330521&width=1024&ext=1669488186&hash=AeTFJDupVu3NuKkmmjU",
          url: "cat/facebook.com"
      }
  ]

    return (
        <Sidebar>
            <div className="main-contact-container">
                <div className="header-container">
                    <div className="title-container">
                        <h1 className="title" style={{color: "#434846", fontWeight: "700"}}>CLIENTE</h1>
                    </div>
                    <CardPersonalInformation personalInformation={personalInformation}></CardPersonalInformation>
                </div>
                <AcoordionItem accordionItem={accordionItem ?? []}></AcoordionItem>
            </div>
        </Sidebar>
    );
}
export default ClientPage;
