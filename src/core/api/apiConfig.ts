import axios from "axios";


export const instance = axios.create({
    baseURL:'https://testguru.ru/frontend-test/api/v1/',
})