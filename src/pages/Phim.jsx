import React from 'react'
import UseGetApi from '../CustomHooks/UseGetApi'
import { useEffect } from 'react'
import axios from 'axios'
import { getPhimAction, getPhimActionApi } from '../redux/reducers/quanliPhimReducer'
import { useDispatch, useSelector } from 'react-redux'
const Phim = () => {

    const { arrPhim } = useSelector(state => state.quanliPhimReducer);
    const dispatchComponent = useDispatch();

    const getDataApi = () => {
        //action case 1
        // const action = {
        //     type: '',
        //     payload: {data:[]}
        // }

        //action case 2: async action
        /*
           là 1 hàm async (dispatch)=>{
        //xử lí nghiệp vụ api    
        }
        */
        const actionAsync = getPhimActionApi();
        dispatchComponent(actionAsync);
    }

    //call api 
    useEffect(() => {
        getDataApi();
    }, []);
    return (
        <div className='container'>
            <h5>Phim</h5>

            <div className='row'>
                {arrPhim.map((phim, index) => {
                    return <div className='col-2 mt-2' key={index}>
                        <div className='card'>
                            <img src={phim.hinhAnh} alt="..." />
                            <div className='card-body'>
                                <h5>{phim.tenPhim}</h5>
                            </div>
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}

export default Phim