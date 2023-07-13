import axios from "../baseUrl";
//add user api integration
export const AddUser= async (body) => {
   
    try {
        const response = await axios.post("signup", body);
        return response;
    } catch (err) {
        return err.response
    }
}
//get all users api integration
export const getAllUser= async () => {
 
    try {
        const response = await axios.get("get");
        return response;
    } catch (err) {
        return err.response
    }
}
//edit api integration
export const EditUser= async (id) => {
   
    try {
        const response = await axios.get(`getone/${id}`);
     
    
        return response;
    } catch (err) {
        return err.response
    }
}
//update api integration
export const updateUser= async (id,body) => {
  
    try {
        const response = await axios.put(`update/${id}`,body);
     
    
        return response;
    } catch (err) {
        return err.response
    }
}

//delete api integration
export const deleteUser= async (id) => {
  
    try {
        const response = await axios.delete(`delete/${id}`);
     
    
        return response;
    } catch (err) {
        return err.response
    }
}