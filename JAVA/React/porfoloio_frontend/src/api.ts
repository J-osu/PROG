import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // Cambia esto por la URL de tu backend
});

export default api;