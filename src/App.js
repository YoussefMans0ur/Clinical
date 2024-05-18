import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Organization from './pages/Organization';
import AddDoctor from './pages/AddDoctor';
import AddService from './pages/AddService';
import Managers from './pages/Managers';
import Agents from './pages/Agents';
import Test from './pages/Test';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/organization' element={<Organization/>}/>
      <Route path='/add_doctor' element={<AddDoctor/>}/>
      <Route path='/add_service' element={<AddService/>}/>
      <Route path='/managers' element={<Managers/>}/>
      <Route path='/agents' element={<Agents/>}/>
      <Route path='/test' element={<Test/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
