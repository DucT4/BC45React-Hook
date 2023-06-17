import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
const UseGetApi = (url) => {
    const [result, setResult] = useState({});
    const getApi = async () => {
        let res = await axios({
            url: url,
            method: 'GET'
        });
        console.log('result',result)
        //sau khi lấy dữ liệu từ api về sẽ đưa vào state
        setResult(res.data);

    };
    //sử dụng userEffect để gọi api
    useEffect(() => {
        getApi();
    }, []);


    return result;
}

export default UseGetApi