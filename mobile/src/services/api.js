import axio from 'axios'

const api = axios.create({
    baseURL: 'htt://192.168.2.105:3333'
})

export default api