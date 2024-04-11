import axios from "axios";
const BaseURL = "http://localhost:8000";

export const reqClass={
    getReq: async (endPoint) => {
                return await axios.get(`${BaseURL}${endPoint}`);
            }, 
            postReq: async (endPoint, reqBody) => {
                return axios.post(`${BaseURL}${endPoint}`, reqBody);
            },
            putReq: async (endPoint, reqBody) => {
                return axios.put(`${BaseURL}${endPoint}`, reqBody);
            }
}




// Harsh Dalwe
// 8:05 AM
// return axios.get(`${baseUrl}${endpoint}`)
// Harsh Dalwe
// 8:39 AM
// import axios from "axios";

// const baseUrl = "http://localhost:8080";

// export const ReqClass = {
//     getReq: async (endPoint) => {
//         return await axios.get(`${baseUrl}${endPoint}`);
//     },
//     postReq: async (endPoint, reqBody) => {
//         return axios.post(`${baseUrl}${endPoint}`, reqBody);
//     },
//     putReq: async (endPoint, reqBody) => {
//         return axios.put(`${baseUrl}${endPoint}`, reqBody);
//     }
// };