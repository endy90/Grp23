import axios from 'axios';

const apiUrl = "http://localhost:1337/api";

export default {
    getEvents() {
        return axios.get(`${apiUrl}/events`).then((res) => res.data);
    },

    // getProducts() {
    //     return fetch(`${apiUrl}/products`).then((res) => res.json());
    // },
}