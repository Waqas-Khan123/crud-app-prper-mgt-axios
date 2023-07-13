import React, { useEffect, useState } from 'react';
import './update.css';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EditUser } from '../../servicees/addData/adduser';
import { Button, Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

import { updateUser } from '../../servicees/addData/adduser';

function UpdateData() {
  const navigate = useNavigate();
  const [result, setResult] = useState({});
  const { id } = useParams();

  async function fetchUser() {
    const resp = await EditUser(id);
    setResult(resp?.data?.response);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      const resp = await updateUser(id, values);

      if (resp?.status === 200) {
        toast.success('updated successfully', {
          position: 'bottom-left',
        });
        console.log(resp?.data);

        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        toast.error('user not updated there is some problem');
        console.log('error');
      }
    },
  });

  useEffect(() => {
    formik.setValues({
      name: result?.name || '',
      email: result?.email || '',
    });
  }, [result]);

  return (
    <Container className='main1'>
      <ToastContainer />

      <div className='box1'>
        <form className='border rounded py-4 px-4' onSubmit={formik.handleSubmit}>
          <label>Name</label>
          <input
            className='border rounded'
            type='text'
            name='name'
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <br />
          <label className='mt-3'>Email</label>
          <input
            className='border rounded'
            type='text'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <Button className='mt-3' type='submit'>
            Update Data
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default UpdateData;
