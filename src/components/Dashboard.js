import React from "react";
import Sidebar from "../components/Sidebar";
import Column from "../components/Column";
import Card from "./ProspectCard";
import ProspectCard from "./ProspectCard";
export default function (props) {
  return (
    <Sidebar>
      <ProspectCard></ProspectCard>
      <div className="container-lg text-center">
        <div className="row">
          <div className="col-xxl-3 col-xl-6">
            <Column>
              <ProspectCard></ProspectCard>
            </Column>
          </div>
          <div className="col-xxl-3 col-xl-6">
            <Column></Column>
          </div>
          <div className="col-xxl-3 col-xl-6">
            <Column></Column>
          </div>
          <div className="col-xxl-3 col-xl-6">
            <Column></Column>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
