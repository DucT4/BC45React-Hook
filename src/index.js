import React from 'react';
import ReactDOM from 'react-dom/client';
//cấu hình router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeTeamplate from './templates/HomeTeamplate';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UseStateDemo from './pages/Hooks/UseStateDemo';
import UseEffectDemo from './pages/Hooks/UseEffectDemo';
import Detail from './pages/Detail';
import UseCallBackDemo from './pages/Hooks/UseCallBackDemo/UseCallBackDemo';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<HomeTeamplate />}>
        <Route index element={<Home />}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='use-state-demo' element={<UseStateDemo/>}></Route>
        <Route path='use-effect-demo' element={<UseEffectDemo/>}></Route>
        <Route path='detail'>
          <Route path=':id' element={<Detail/>}></Route>
        </Route>
        <Route path='usecallback' element={<UseCallBackDemo/>}></Route>

      </Route>
    </Routes>
  </BrowserRouter>
);

