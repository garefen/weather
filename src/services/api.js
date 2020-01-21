import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/forecast?id=3448433&APPID=8f34ff6349e06c9ef90bb986c86ab9b4'
});

export default api;