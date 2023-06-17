import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import UseGetApi from '../CustomHooks/UseGetApi';
import useRoute from '../CustomHooks/useRoute';
const CustomHookDemo = () => {
    const result = UseGetApi('https://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner');
    const { params,navigate,searchParam } = useRoute();
    console.log('res',params,navigate, searchParam );



        return (
        <div className='container'>
            {result.content?.map((item, index) => {
                return <div className='card' key={index} >
                    <img src={item.hinhAnh} alt="..." />
                </div>
            })}

        </div>
    );
};

export default CustomHookDemo