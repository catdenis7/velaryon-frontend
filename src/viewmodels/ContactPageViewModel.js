import axios from "axios";

let contactPageViewModel = {
    async find(clientId) {
        try {
            let result;
            result = await axios.post("http://45.79.2.214:5000/clients/contacts", {
                "clientId": clientId 
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
