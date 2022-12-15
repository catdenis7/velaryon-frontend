import axios from "axios";

let promosViewModel = {
    async find() {
        try {
            let result;
            result = await axios.get("http://45.79.2.214:5000/promotions");
            return result.data;
        } catch (error) {
            return [];
        }
    },

    async getProducts(){
        try {
            let result;
            result = await axios.get("http://45.79.2.214:5000/products");
            return result.data;
        } catch (error) {
            return [];
        }
    },
    async insert(data, file, products) {
        try {
            let body = {
            }
            let result;
            let formData = new FormData();
            formData.append('image', file);
            formData.append('discount', data.discount);
            formData.append('title', data.title);
            formData.append('description', data.description);
            formData.append('fromDate', data.fromDate);
            formData.append('toDate', data.toDate);
            formData.append('products', JSON.stringify(products))
            let headers = {
                'content-type': 'multipart/form-data',
            }
            result = await axios.post("http://45.79.2.214:5000/promotions/submit", formData, headers);
            return result.data;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
};

export default promosViewModel;
