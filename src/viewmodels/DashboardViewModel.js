import React from "react";
import Sidebar from "../components/Sidebar";
import Column from "../components/Column";

import axios from "axios";

// const cors = require("cors");

let dashboardViewModel = {
  async find() {
    try {
      let result;
      // result.use(cors());
      result = await axios.get("http://localhost:5000/clients/cards");
      console.log(result);
      return result.data;
    } catch (error) {
      return [];
      console.log("Data vacia");
    }
  },
};

export default dashboardViewModel;
