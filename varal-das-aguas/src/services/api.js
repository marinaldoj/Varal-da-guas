import axios from 'axios';

const api = axios.create({
    baseURL: 'http://apidev.inema.ba.gov.br/' ,
});

export default api;