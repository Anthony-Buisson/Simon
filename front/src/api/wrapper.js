import api from './api';
import { BASE_URL } from "../env";
const axios = require('axios');

export async function login (email, password) {
    return axios.post(BASE_URL+'/login', {email, password})
}

export function getArticles () {
    return api.get(BASE_URL+'/articles')
}
