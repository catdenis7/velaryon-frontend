import React from "react";
import Sidebar from "../components/Sidebar";
import Column from "../components/Column";
import Card from "./ProspectCard";
import ProspectCard from "./ProspectCard";
import PersonalData from "./cards/PersonalData";
export default function (props) {
  return (
    <Sidebar>
      <div className="row">
        <div className="row">
          <div className="col">
            <Column>
            </Column>
          </div>
          <div className="col">
            <Column></Column>
          </div>
          <div className="col">
            <Column></Column>
          </div>
          <div className="col">
            <Column></Column>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
