import axios from 'axios';

export const key = '03dfcb6f89bb418a08c95782df941a021af28da5';

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Authorization': `Bearer ${key}`,
    'Content-Type': 'application/json'
  }
})

export default api;