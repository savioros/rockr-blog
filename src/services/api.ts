import axios from "axios";

export const Api = axios.create({
    baseURL: 'https://stormy-shelf-93141.herokuapp.com/'
})