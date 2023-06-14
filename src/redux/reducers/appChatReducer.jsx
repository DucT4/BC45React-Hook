//rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrComment: [
        { name: 'chuong', content: 'According to the Fondo per la Repubblica Digitale (FRD), set up in 2021 by the Rome government to boost the digital skills of Italians, ', img: 'https://i.pravatar.cc?u=7' },
        { name: 'thuuon', content: 'According to the Fondo per la Repubblica Digitale (FRD), set up in 2021 by the Rome government to boost the digital skills of Italians,', img: 'https://i.pravatar.cc?u=5' },
        { name: 'muong', content: 'According to the Fondo per la Repubblica Digitale (FRD), set up in 2021 by the Rome government to boost the digital skills of Italians,', img: 'https://i.pravatar.cc?u=4' },
    ]
}

const appChatReducer = createSlice({
    name: 'appChatReducer',
    initialState,
    reducers: { 
 addCommentAction :(state, action)=>{
     let userComment = {...action.payload};
     state.arrComment.push(userComment);
 }
    }
});

export const {addCommentAction } = appChatReducer.actions

export default appChatReducer.reducer