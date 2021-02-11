import axios from 'axios';
import { BASE_URL } from "../env";
import store from '../store/store';
import jwtDecode from 'jwt-decode';

const instance = axios.create({ BASE_URL });
instance.defaults.timeout = 15000;

instance.interceptors.request.use(
    (config) => {

        const { user } = store.getState();
        config.headers['Content-Type'] = 'application/json';
        if (user.token) {//on change de page = récupération depuis le store
            config.headers.authorization = user.token;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
