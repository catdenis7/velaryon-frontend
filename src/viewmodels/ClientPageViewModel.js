

import axios from "axios";

// const cors = require("cors");

let clientPageViewModel = {
  async find() {
    try {
      let result;
      // result.use(cors());
      result = await axios.post("http://localhost:5000/clients/orders", {
        "clientId" : "63584e44eed3cd7e14293495"
    });
      console.log(result);
      return result.data;
    } catch (error) {
      return [];
      console.log("Data vacia");
    }
  },
};

export default clientPageViewModel;
