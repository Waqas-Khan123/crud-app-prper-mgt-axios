import axios from "axios";

// instance used allover the site as baseUrl 
const instance = axios.create({
  baseURL: "http://localhost:1000/api/",
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  },
});


export default instance;