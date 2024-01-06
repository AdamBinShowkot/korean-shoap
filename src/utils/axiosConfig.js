// 'use client'
import axios from 'axios';

// const instance = axios.create({
//   baseURL: `https://korean-shop.softwaregiantbd.com/api/v1/`,
// });

// instance.defaults.headers.common['Authorization'] = 'Bearer 3|v25kN7AbTPIKEbD3GKkvorKaKX6ThDGWgF5NpbRt808ad2e5';
// instance.defaults.headers.post['Content-Type'] = 'application/json';

// export default instance;

const ConfigureAxios = () => {
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.baseURL = "https://korean-shop.softwaregiantbd.com/api/v1";
  //axios.defaults.headers.common['Authorization'] = 'Bearer 21|ubGQra8Eg0ESaiemBxOXuQg1EXLNmZefW4Gk9iO9077fd4c7';
};

export default ConfigureAxios;