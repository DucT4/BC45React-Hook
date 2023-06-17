import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
    arrPhim: []
}

const quanliPhimReducer = createSlice({
    name: 'quanliPhimReducer',
    initialState,
    reducers: {
        getPhimAction: (state, action) => {
            state.arrPhim = action.payload;
        }


    }
});

export const { getPhimAction } = quanliPhimReducer.actions

export default quanliPhimReducer.reducer;
// async action
export const getPhimActionApi = (tenPhim = '') => {
    return async (dispatch) => {
        let res;
        if (tenPhim !== '') {
            res = await axios({
                url: `https://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim=${tenPhim} `,
                method: 'GET'
            });
        } else {
            res = await axios({
                url: 'https://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim ',
                method: 'GET'
            });
        }

        //sau khi lấy thông tin xong thì dispatch lên reducer
        const action2 = getPhimAction(res.data.content);
        dispatch(action2);
    };
}






