import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import AcoordionItem from "../components/AccordionItem";
import "../assets/css/client.css";
import CardPersonalInformation from "../components/CardPersonalInformation";
import clientPageViewModel from "../viewmodels/ClientPageViewModel";
import { useParams } from "react-router-dom";


/*
let accordionItem = [
  {
    date: '23/10/2022',
    orderQuantity: '2',
    total: '2400',
    lines: [
      {
        quantity: '2',
        product: 'The Beatles - Let it Be - CD',
        price: '120',
        total: '240'
      }
    ]
  },
  {
    date: '27/10/2022',
    orderQuantity: '3',
    total: '350',
    lines: [
      {
        quantity: '1',
        product: 'The Beatles - Hey Jude - CD',
        price: '90',
        total: '90'
      },
      {
        quantity: '2',
        product: 'Harry Styles - Fine Line - Vinilo',
        price: '130',
        total: '260'
      }
    ]
  }
]
*/
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
          profilePicture: "https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=5367504253330521&width=1024&ext=1669488186&hash=AeTFJDupVu3NuKkmmjU"
      }
  ]

    return (
        <Sidebar>
            <div className="main-contact-container">
                <div className="header-container">
                    <div className="title-container">
                        <h1 className="title">CLIENTE</h1>
                    </div>
                    <CardPersonalInformation personalInformation={personalInformation}></CardPersonalInformation>
                </div>
                <AcoordionItem accordionItem={accordionItem ?? []}></AcoordionItem>
            </div>
        </Sidebar>
    );
}
export default ClientPage;
