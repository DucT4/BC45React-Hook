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
import UseMemoDemo from './pages/Hooks/UseMemoDemo/UseMemoDemo';
import UseRefDemo from './pages/Hooks/UseRefDemo/UseRefDemo';
import DemoHookRedux from './pages/Hooks/HookRedux/DemoHookRedux';
//setup redux
import { Provider } from 'react-redux';
import { store } from './redux/configStote';
import UseNavigateDemo from './pages/Hooks/UseNavigateDemo';
import Profile from './pages/Profile';
import ForgotPass from './pages/ForgotPass';
import UseSearchParamDemo from './pages/Hooks/UseSearchParamDemo/UseSearchParamDemo';
import CustomHookDemo from './pages/CustomHookDemo';
import DemoAntDemo from './pages/DemoAntDemo';
import Phim from './pages/Phim';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTeamplate />}>
          <Route index element={<Home />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='use-state-demo' element={<UseStateDemo />}></Route>
          <Route path='use-effect-demo' element={<UseEffectDemo />}></Route>
          <Route path='detail'>
            <Route path=':id' element={<Detail />}></Route>
          </Route>
          <Route path='usecallback' element={<UseCallBackDemo />}></Route>
          <Route path='usememo' element={<UseMemoDemo />}></Route>
          <Route path='useref' element={<UseRefDemo />}></Route>
          <Route path='useredux' element={<DemoHookRedux />}></Route>
          <Route path='usenavigate' element={<UseNavigateDemo />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='forgotpass' element={<ForgotPass />}></Route>
          <Route path='usesearch-param' element={<UseSearchParamDemo />}></Route>
          <Route path='custom-hook' element={<CustomHookDemo />}></Route>
          <Route path='ant-design' element={<DemoAntDemo />}></Route>
          <Route path='phim' element={<Phim />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

