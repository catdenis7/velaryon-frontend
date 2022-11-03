import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FrecuentBody from "../components/FrecuentBody";
import CardPersonalInformation from "../components/CardPersonalInformationClient";
import Sidebar from "../components/Sidebar";
import clientPageViewModel from "../viewmodels/ClientPageViewModel";

function FrecuentPage() {
    const [personalInformation, setPersonalInformation] = useState([]);
    const params = useParams();
    useEffect(() => {
        async function fetchData() {
            let personalDataResult = await clientPageViewModel.getPersonalData(params.id);
            setPersonalInformation(personalDataResult);
        }
        fetchData();
    }, []);
    
    return (
        <Sidebar>
            <div className="main-contact-container">
                <div className="header-container">
                    <div className="title-container">
                        <h1 className="title" style={{color: "#434846", fontWeight: "700"}}>CLIENTE FRECUENTE</h1>
                    </div>
                    <CardPersonalInformation
                        personalInformation={personalInformation ?? []}
                    ></CardPersonalInformation>
                </div>
                <FrecuentBody />
            </div>
        </Sidebar>
    );
}

export default FrecuentPage;
