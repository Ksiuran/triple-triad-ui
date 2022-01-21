import axios from "axios";

const appClient = axios.create({
  baseURL: 'http://localhost:5000/quizzard',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default appClient;
