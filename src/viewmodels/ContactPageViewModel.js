import axios from "axios";

let contactPageViewModel = {
    async find() {
        try {
            let result;
            result = await axios.post("http://localhost:5000/clients/contacts", {
                "clientId": "63584e44eed3cd7e14293495"
            });
            console.log(result);
            return result.data;
        } catch (error) {
            return [];
            console.log("Data vacia");
        }
    },
};

export default contactPageViewModel;
