import axios from 'axios';
import React, { useRef } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom'
const UseSearchParamDemo = () => {


    const [searchParam, setSearchParam] = useSearchParams();
    const [arrProduct, setArrProduct] = useState([]);

    const keywordRef = useRef('');

    //lấy ra keyword từ url
    let keyword = searchParam.get('keyword');//nếu url không có thì trả null

    const getProductByKeyword = async () => {
        let res = await axios({
            url: `https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
            method: 'GET'
        });
        //lấy dữ liệu từ api setState array product
        setArrProduct(res.data.content);
    }

    useEffect(() => {
        if (keyword != null) {
            //call api when diffirent null
            getProductByKeyword()
        }
    }, [keyword])

    const handleChange = (e) => {
        let { value } = e.target;
        keywordRef.current = value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('keyword', keywordRef.current)
        //đưa keyword lên thanh url
        setSearchParam({
            keyword: keywordRef.current
        })
    }
    return (
        <div className='container'>
            <h3>Search</h3>
            <form onChange={handleSubmit}>
                <div className='form-group'>
                    <input className='form-control' id='txtTuKhoa' onChange={handleChange} />
                    <button className='btn btn-dark' type='submit'>search</button>
                </div>
            </form>
            <div className='mt-2'>
                <h3>Search result</h3>
                <div className='row'>
                    {arrProduct.map((item) => {
                        return <div className='col-3' key={item.id}>
                            <div className='card'>
                                <img src={item.image} alt="..." />
                                <div className='card-body'>
                                    <h3>{item.name}</h3>
                                    <p>{item.price}</p>
                                    <NavLink to={`/detail/${item.id}`} className="btn btn-success">View detail</NavLink>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default UseSearchParamDemo