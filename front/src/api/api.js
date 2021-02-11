import axios from 'axios';
import { BASE_URL } from "./env";

const instance = axios.create({ BASE_URL });

export default instance;
