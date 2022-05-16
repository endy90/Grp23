import axios from 'axios';

const apiUrl = "http://localhost:1337/api";

export default {
    getUsers() {
        return axios.get(`${apiUrl}/users`).then((res) => res.data);
    },

    // getProducts() {
    //     return fetch(`${apiUrl}/products`).then((res) => res.json());
    // },
}