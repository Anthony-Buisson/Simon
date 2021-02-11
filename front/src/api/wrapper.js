import api from './api';
import { BASE_URL } from "./env";

export async function addScore (score) {
    return api.post(BASE_URL+'/scores', score)
}

export async function getScores () {
    return api.get(BASE_URL+'/scores')
}
