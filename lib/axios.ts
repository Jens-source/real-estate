import Axios from 'axios';


export const axios = Axios.create({
  baseURL: process.env.BASEROW_API_URL,
  headers: {
    Authorization: `Token ${process.env.BASEROW_API_KEY}`,
  },
});
