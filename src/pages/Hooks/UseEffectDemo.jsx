import React, { useState, useEffect } from 'react'

const UseEffectDemo = () => {

    const [number, setNumber] = useState(1)
    const [like, setLike] = useState(1);
    console.log('render')
    //trường hợp 1: usesEffect 1 tham số
    useEffect(() => {
        //useEffect chạy lần đầu tiên và mỗi khi state thay đổi
        console.log('useEffect run');
        //khoong setState tại đây(Muốn setState thì phải có if)
        // if (number < 1000) {
        //     setNumber(number + 1)
        // }
        //Giống lifecycle compomnentDidMount + componentDidudpate
    });
    useEffect(() => {
        //useEffect dùng cho các api dạng getDetail (component didUpdate)
        console.log('userE dep')
    }, [number])

    useEffect(() => {
        //useEffect tương tự componentDidmount =>thường sử dụng cho api getApi
        console.log('userEffecr dep')
        return () => {
            //kích hoạt khi component mất khỏi giao diện
            //clear các biến chạy ngầm
            console.log('will unmount')
        }
    }, [])
  

    return (
        <div className='container'>
            <h3>Number:{number}</h3>
            <button className='btn btn-dark ' onClick={() => {
                setNumber(number + 1)
            }}> + </button>
            <br />
            <h3>Like</h3>
            <button className='btn btn-danger' onClick={() => {
                setLike(like + 1)
            }}>
                <i className='fa fa-heart'></i>
            </button>
        </div>
    )
}

export default UseEffectDemo