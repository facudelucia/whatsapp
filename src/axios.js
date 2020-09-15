import axios from "axios"


const instance = axios.create({
    baseURL: "https://whatsapp-backend-facu.herokuapp.com"

})

export default instance