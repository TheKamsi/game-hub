import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '40f4d2013d82446a90f9a1bf2d992e34'
    }
})