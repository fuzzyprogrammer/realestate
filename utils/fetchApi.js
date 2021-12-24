import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "5ab821914dmshed91c74f2e83aa1p108586jsn94d996884ba9",

      // 'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY ,
    },
  });
    
  return data;
}