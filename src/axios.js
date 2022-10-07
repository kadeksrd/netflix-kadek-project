import axios from "axios";

// instance to get url
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
