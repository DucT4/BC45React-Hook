import { configureStore } from '@reduxjs/toolkit';
import appChatReducer from './reducers/appChatReducer';
import quanliPhimReducer from './reducers/quanliPhimReducer';




export const store = configureStore({
    reducer: {
        appChatReducer :appChatReducer,
        quanliPhimReducer
    }
})

