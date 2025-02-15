import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "557e3fd017e643c1a9086268b9f71ec7",
  },
});
