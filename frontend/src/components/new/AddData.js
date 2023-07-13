import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './add.css';
import { AddUser } from '../../servicees/addData/adduser';

function AddData() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: async (values) => {
      console.log(values);

      const resp = await AddUser(values);
      if (resp?.status === 200) {
        console.log(resp?.data?.message);
        toast.success(resp?.data?.message, {
          position: 'bottom-left',
        });
        console.log(resp?.data);

        setTimeout(() => {
navigate("/")
        }, 1500);
      } else {
        toast.error(resp?.data?.message, {
          position: 'bottom-left',
        });
        console.log('error');
      }

      
    },
  });

  return (
    <Container className='main border rounded cstm'>
      <ToastContainer/>
      <div className='inside'>
        <h2 className='mb-2'>Add Data</h2>
        <form className='border rounded py-4 px-4' onSubmit={formik.handleSubmit}>
          <div>
            <label>name</label>
            <input className='border rounded' type='text' name='name' onChange={formik.handleChange} value={formik.values.name} />
            <br />
            <label>email</label>
            <input className='border rounded' type='text' name='email' onChange={formik.handleChange} value={formik.values.email} />

            <Button className='mt-3' type='submit'>
              Insert data
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default AddData;
