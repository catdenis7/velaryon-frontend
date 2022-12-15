import axios from "axios";

// const cors = require("cors");

let frequentPageViewModel = {
  async find(clientId) {
    try {
      let result;
      result = await axios.post("http://45.79.2.214:5000/clients/notifications", {
        "clientId" : clientId
    });
      console.log(result);
      return result.data;
    } catch (error) {
      return [];
      console.log("Data vacia");
    }
  },
};

export default frequentPageViewModel;
