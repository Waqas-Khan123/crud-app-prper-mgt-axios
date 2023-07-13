import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './file.css';
import Table from 'react-bootstrap/Table';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllUser } from '../servicees/addData/adduser';
import { Link } from 'react-router-dom';
import { deleteUser } from '../servicees/addData/adduser';





function File() {





  let navigate=useNavigate()
  let [loading, setLoading] = useState(true);
  let [data, setData] = useState([]);


  

  async function Userdata(){
    
    let resp=await getAllUser();
    
    setData(resp.data.result);
    localStorage.setItem('mydata', JSON.stringify({data}));
    setLoading(false);


  }
  useEffect(() => {
    Userdata();
      
      }, []);



  async function DeleteData(id){
  
    const resp=await deleteUser(id)
   


    if(resp.status===200){
           toast.success("deleted successfully",{
     position: "bottom-left"})
      Userdata();

    }
    else{
      toast.error('API error message');

    }
 


   }
  
  














  

  return (
    <Container className="main flex flex-direction coloum border rounded mt-3">
    <ToastContainer/>  
 
    
 <h1 className='mt-4 text-center'>CRUD Application</h1>
 <Button onClick={()=>{navigate('/add')}} className='btn mb-2'>Add data</Button>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : data ? (
          <><Table  responsive="sm"  striped="columns" bordered hover > <thead><tr><th>ID</th>
          <th>Name</th><th>Email</th><th>Delete</th><th>Edit</th></tr></thead>
            {data.map((item, i) => {
             
              return   <tbody><tr key={i}>
                <td> {i}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
            
                  
              <td><Button onClick={()=>{DeleteData(item._id)}} variant='danger'>delete</Button></td>
              <td><Link to={`/update/${item._id}`} className='btn btn-sm btn-success'>Edit</Link></td>

              </tr>  </tbody>
            })}
        </Table>  </>
        ) : (
          <p>Error occurred</p>
        )}
      </div>
   
      </Container>
  );
}

export default File;