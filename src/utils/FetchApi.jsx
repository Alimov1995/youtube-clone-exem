import axios from "axios";
const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    hl: "en",
    gl: "US",
    maxResults: "5",
  },
  headers: {
    "X-RapidAPI-Key": "bb37c83045msh820ef2d87453ff4p11c8d5jsnfecf6eca96ae",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
