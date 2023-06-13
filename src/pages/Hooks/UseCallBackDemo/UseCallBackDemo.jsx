import React from 'react'
import { useState, useCallback} from 'react'
import Child from './Child'

const UseCallBackDemo = () => {


    const [number, setNumber] = useState(1);
    const [like, setLike] = useState(1);
    console.log('parent render')
    
    const renderNumber =()=>{
        return <div>
            {number} <i className='fa fa-user'></i>
        </div>
    }
    //useCallBack dùng để thay đổi cache lại địa chỉ hàm phụ thuộc vào tham số nếu tham số thay đổi thì hàm sẽ đc tạo mới 
  const  renderNumberCallBack = useCallback(renderNumber,[number]);



    return (
        <div className='container'>
            <h3>Number: {number}</h3>
            <button className='btn btn-success' onClick={() => {
                setNumber(number + 1)
            }}>
                +
            </button>
            <button className='btn btn-danger' onClick={() => {
                setLike(like + 1);
            }}><i className='fa fa-heart'></i> {like}</button>
            <Child renderNumber={renderNumberCallBack} />
        </div>
    )
}

export default UseCallBackDemo