import axios from "axios";
export const HTTP = axios.create({
    baseURL: `https://api-lotto.14devlab.co`,
});