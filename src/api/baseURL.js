import axios from "axios";

// Create instance of axios
const instance = axios.create({ baseURL: "http://localhost:8000" });

export default instance;
