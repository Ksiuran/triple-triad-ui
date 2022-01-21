import axios from "axios";

const ttClient = axios.create({
  baseURL: 'http://localhost:5000/ttapi',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default ttClient;