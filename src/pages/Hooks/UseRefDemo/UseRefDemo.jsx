import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import Cart from './Cart';



/*
   +useRef: tương tự useState dùng để lưu lại giá trị sau mỗi lần component render, tuy nhiên khi ref thay đổi thì giao diện khôg phải render lại.
   ngoài ra  useRef còn dùng để truy xuất thẻ khi gắn vào thuộc tính rè của thẻ (JSX Element)

   +khi nào dùng useRef => dùng để lưu gía trị khi  component render nhưng không component render khi giá trị thay đổi.
   +khi nào dùng useState =>  dùng để lưu giá trị khi component render tuy nhiên khi setState thì component sẽ render lại
*/
const UseRefDemo = () => {

const elementRef = useRef({});

    const userLoginRef = useRef({
        usename: '',
        password: ''
    });

    console.log('render')
    // const [useLogin, setUseLogin] = useState({
    //     usename: '',
    //     password: ''
    // });
    // console.log('userlogin', useLogin)
    const handleChange = (e) => {
        const { id, value } = e.target;
        // setUseLogin({
        //     ...useLogin,
        //     [id]: value
        // })
        userLoginRef.current[id] = value;
    }
    const handleSunmit = (e) => {
        e.preventDefault();
        console.log('userLogin', userLoginRef.current);
        // elementRef.current.style.color='red';
        elementRef.current.handleLike();
    }
    return (
        <form className='container' onSubmit={handleSunmit}>
            <h3>Login</h3>
            <div className='form-group'>
                <p>useName</p>
                <input className='form-control' id='usename' onChange={handleChange} />
            </div>
            <div className='form-group'>
                <p>passWord</p>
                <input className='form-control' id='password' type="password" onChange={handleChange} />
            </div>
            <div className='form-group'>
                <button className='btn btn-dark my-2'  >Login</button>
            </div>
            <hr />
            <div className='w-25'>
                <Cart ref={elementRef} />
            </div>
        </form>
    )
}

export default UseRefDemo