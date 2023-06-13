//rafce
import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
const Home = () => {

  const [arrProduct, setArrProduct] = useState([])

  const getProductApi = async () => {
    const res = await axios({
      url: 'https://shop.cyberlearn.vn/api/Product',
      method: "GET"
    });

    //sau khi lây dữ liệu từ api về thì đưa vào state
    setArrProduct(res.data.content);
  }

  useEffect(() => {
    //chạy sau khi component render  (tương tự component didMount chỉ chạy 1 lần duy nhất sau khi render)
    getProductApi();
    console.log('arrProduct', arrProduct)
  },[])
  return (
    <div className='container'>
      <h3>Shop shoe</h3>
      <button className='btn btn-success' onClick={() => {
        getProductApi();
      }}>GET API</button>
      <div className='row'>
        {arrProduct.map((item) => {
          return <div className='col-4 mt-2' key={item.id}>
            <div className='card'>
              <img src={item.image} alt="..." />
              <div className='card-body'>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <NavLink className='btn btn-dark ' to={`/detail/${item.id}`}>View detail</NavLink>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Home