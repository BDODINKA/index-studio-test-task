import axios from "axios";

export const instance = axios.create({
  baseURL: "https://testguru.ru/frontend-test/api/v1/",
});

export const instanceImg = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
  },
});
