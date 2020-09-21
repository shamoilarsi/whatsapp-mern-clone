import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsapp-mern-clone-backend.herokuapp.com",
});

export default instance;
