import React from "react";
import Sidebar from "../components/Sidebar";
import Column from "../components/Column";

import axios from 'axios';

let dashboardViewModel = {
    async find() {
        try {
            let result = await axios.get('http://localhost:5000/clients/cards');
            return result.data;
        } catch (error) {
            return [];
        }
    }
}

export default dashboardViewModel;
