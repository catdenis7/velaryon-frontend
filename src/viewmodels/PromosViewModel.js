import axios from "axios";

let promosViewModel = {
  async find() {
    try {
      let result;
      result = await axios.get("http://localhost:5000/promotions");
      return result.data;
    } catch (error) {
      return [];
    }
  },

  async insert(data) {
    try {
      let body = {
        discount: data.discount,
        title: data.title,
        description: data.description,
        fromDate: data.fromDate,
        toDate: data.toDate,
        image: data.image
      }
      let result;
      result = await axios.post("http://localhost:5000/promotions/submit", body);
      return result.data;
    } catch(error) {
      return [];
    }
  }
};

export default promosViewModel;
