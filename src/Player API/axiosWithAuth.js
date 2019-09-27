import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      // 'Content-Type': 'application/json'
      Authorization: token
    },
   baseURL: "'https://reading-recommender.herokuapp.com"
  //baseURL: "http://localhost:5000"
  });
};