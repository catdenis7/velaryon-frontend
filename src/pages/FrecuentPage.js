import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FrecuentAccordion from "../components/FrecuentAccordion";
import FrecuentBody from "../components/FrecuentBody";
import FrecuentCardInformation from "../components/FrecuentCardInformation";
import Sidebar from "../components/Sidebar";

let personalInformation = [
    {
        id: 0,
        name: "Catherine",
        lastName: "Gomez",
        phoneNumber: "78945612",
        email: "Catula@gmail.com",
        facebookLink: "facebook/catherine.com",
        profilePicture:
            "https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=5367504253330521&width=1024&ext=1669488186&hash=AeTFJDupVu3NuKkmmjU",
    },
];
/*
let accordionItem = [
    {
        date: "23/10/2022",
        message: "Estás interesado en el nuevo álbum de Marco Antonio Solis",
    },
    {
        date: "24/10/2022",
        message: "Estás interesado en el nuevo álbum de Harry Styles",
    },
    {
        date: "23/11/2022",
        message: "Estás interesado en el nuevo álbum de The Killers",
    },
    {
        date: "24/11/2022",
        message: "Estás interesado en el nuevo álbum de The Beatles",
    },
];
*/
export default function FrecuentPage() {
    

    return (
        <Sidebar>
            <div className="main-contact-container">
                <div className="header-container">
                    <div className="title-container">
                        <h1 className="title">CLIENTE FRECUENTE</h1>
                    </div>
                    <FrecuentCardInformation
                        personalInformation={personalInformation}
                    ></FrecuentCardInformation>
                </div>
                <FrecuentBody />
            </div>
        </Sidebar>
    );
}
