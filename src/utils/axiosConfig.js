//'use client'
import axios from 'axios';

// const instance = axios.create({
//   baseURL: `https://korean-shop.softwaregiantbd.com/api/v1/`,
// });

// instance.defaults.headers.common['Authorization'] = 'Bearer 3|v25kN7AbTPIKEbD3GKkvorKaKX6ThDGWgF5NpbRt808ad2e5';
// instance.defaults.headers.post['Content-Type'] = 'application/json';

// export default instance;

const ConfigureAxios = (token="") => {
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
  //axios.defaults.headers.post['Accept'] = 'application/json, text/plain, */*"';
  axios.defaults.baseURL = "https://ksb.koreanshopbd.com/api/v1";
  //axios.defaults.baseURL = "https://ksb.softwaregiantbd.com/api/v1";
  
  //axios.defaults.baseURL = "http://165.22.223.102/api/v1";

  //let token = window.localStorage.getItem("token");

  if(token){
    setAuthToken(token);
  }
  //axios.defaults.headers.common['Authorization'] = 'Bearer 21|ubGQra8Eg0ESaiemBxOXuQg1EXLNmZefW4Gk9iO9077fd4c7';
};
export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    axios.defaults.headers.common["Authorization"] = "";
  }
};

export default ConfigureAxios;