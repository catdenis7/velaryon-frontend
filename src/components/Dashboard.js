import React from "react";
import Sidebar from "../components/Sidebar";
import Column from "../components/Column";
import Card from "./Card";
export default function (props) {
  return (
    <Sidebar>
      <div className="container-lg text-center">
        <div className="row">
          <div className="col-xxl-3 col-xl-6">
            <Column>
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
