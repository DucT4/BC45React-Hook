import React from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const UseNavigateDemo = () => {

    //hướng dùng để chuyển hướng trang trong function component
    const navigate = useNavigate();
    const userLogin = useRef({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        let { id, value } = e.target;
        userLogin.current[id] = value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userLogin.current.email === 'cybersoft' && userLogin.current.password === '123') {
            //chuyển hướng trang a
            //window.location.href = '/profile'; cũng được được nhưng sẽ clear hết redux  (reload lại trang => không nên)
            navigate('/profile');  //chuyển hướng nhưng không load lại trang 
        } else {
            //chuyển hướng trang b
            navigate('/forgotpass');

        }

    }
    return (

        <div className='container d-flex justify-content-center align-item-center '>
            <div className='card w-25 m-2'>
                <div className='bg-dark text-white text-center'>
                    <h3>Login</h3>
                </div>
                <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <p>email</p>
                            <input className='form-control' id='email' onChange={handleChange} />
                        </div>
                        <div className='form-group'>
                            <p>password</p>
                            <input className='form-control' id='password' type='password' onChange={handleChange} />
                        </div>
                        <div className='form-group text-center m-2'>
                            <button className='btn btn-primary'>Login Facebook</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default UseNavigateDemo