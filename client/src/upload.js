import axios from 'axios'
const url= "http://localhost:8000";

const upload= async (data)=>{
   try {
     const response = await axios.post(`${url}/upload`,data);
    //  console.log(response)
     return response.data;

   } catch (err) {
     console.log(" Error is :", err.message)
   }
}

export default upload;