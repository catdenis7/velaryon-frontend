import axios from "axios";

// const cors = require("cors");

let prospectModalViewModel = {

    async find() {
        try {
            let result;
            // result.use(cors());
            result = await axios.get("http://45.79.2.214:5000/contacts/methods");
            console.log(result);
            return result.data;
        } catch (error) {
            return [];
            console.log("Data vacia");
        }
    },

    async addContact(data) {
        try {
            console.log("Prospect ID => " + data.prospectId);
            let body = {
                name: data.name,
                lastName: data.lastName,
                phoneNumber: data.phoneNumber,
                email: data.email,
                prospectId: data.prospectId,
                date: data.date,
                message: data.message,
                response: data.response,
                contactMethod: data.contactMethod,
                user: data.user,
            }
            let result;
            // result.use(cors());
            result = await axios.post("http://45.79.2.214:5000/prospect/save",body);
            console.log(result);
            return result.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    },
};

export default prospectModalViewModel;
