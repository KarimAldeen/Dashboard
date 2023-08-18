import axios from "axios";
export const useAxios = () => {
  // const baseURL = "http://apptest.kammun.com"
    const baseURL = "https://jsonplaceholder.typicode.com"

  return axios.create({
    baseURL,
    headers: {
      referrerPolicy: 'no-referrer-when-downgrade',
      Authorization: `Bearer ${localStorage.getItem('Token')}`,
      common:{
        
      }}
  });
};
