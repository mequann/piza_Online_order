import axios from 'axios';
const base_url='http://127.0.0.1:4000/api/'

export default axios.create({
    baseURL: base_url,
    headers: {
        'Content-type': 'application/json'
    }
})