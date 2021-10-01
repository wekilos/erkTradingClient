import axios from 'axios'
import { token} from './token'
// 95.85.120.183
 const BASE_URL = 'http://23.111.202.6:1234'
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000000,
  

    headers:{
      //  Authorization: 'Bearer ' + token(),
      'Content-Type':'application/json',
      'Accept':"*/*",
      // Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6IktlcmltIiwiaWF0IjoxNjE2NDUwNjU3fQ.v8iyHYmwNlKVhLUA7LzxybICB8zzbVjRyXeFZbV7IPw'
    }
  })
  export {BASE_URL, axiosInstance}