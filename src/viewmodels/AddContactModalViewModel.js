import axios from "axios";

// const cors = require("cors");

let addContactModalViewModel = {
    async find() {
        try {
            let result;
            // result.use(cors());
            result = await axios.get("http://localhost:5000/contacts/methods");
            console.log(result);
            return result.data;
        } catch (error) {
            return [];
            console.log("Data vacia");
        }
    },
    async addContact(data) {
        try {
            console.log("Client ID => " + data.clientId);
            let body = {
                date: data.date,
                message: data.message,
                response: data.response,
                clientId: data.clientId,
                contactMethod: data.contactMethod,
                user: data.user,
            }
            let result;
            // result.use(cors());
            result = await axios.post("http://localhost:5000/contacts/save",body);
            console.log(result);
            return result.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    },
};

export default addContactModalViewModel;
