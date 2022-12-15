import axios from "axios";

// const cors = require("cors");

let clientPageViewModel = {
    async find(clientId) {
        try {
            let result;
            // result.use(cors());
            result = await axios.post("http://45.79.2.214:5000/clients/orders", {
                "clientId": clientId
            });
            console.log(result);
            return result.data;
        } catch (error) {
            return [];
            console.log("Data vacia");
        }
    },
    async getPersonalData(clientId) {
        try {
            let result;
            result = await axios.post("http://45.79.2.214:5000/clients/personal_data", {
                "clientId": clientId
            });
            console.log(result);
            return result.data;
        } catch (error) {
            return [];
            console.log("Data vacia");
        }
    }
};

export default clientPageViewModel;
