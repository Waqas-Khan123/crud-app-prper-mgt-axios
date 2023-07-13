import React from 'react'
import File from './components/file'
import { Route,Routes } from 'react-router-dom'
import AddData from './components/new/AddData';
import UpdateData from './components/update data/UpdateData';

function App() {
  return (

    <Routes>
      <Route path='/' element={<File/>}/>
      <Route path='/add' element={<AddData/>}/>
      <Route path='update/:id' element={<UpdateData/>}/>
 
      
    </Routes>
  
  )
}

export default App
