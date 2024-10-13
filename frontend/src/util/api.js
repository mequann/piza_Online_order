import axios from 'axios';
const base_url='https://piza-online-order.onrender.com/api/'

export default axios.create({
    baseURL: base_url,
    headers: {
        'Content-type': 'application/json'
    }
})