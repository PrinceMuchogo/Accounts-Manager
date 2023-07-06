import {configureStore} from '@reduxjs/toolkit';
import userAuthReducer from './slices/userAuthSlice';
import { userApiSlice } from './slices/userApiSlice';

const store = configureStore({
    reducer: {
        userAuth: userAuthReducer,
        [userApiSlice.reducerPath]: userApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware()
                .concat(userApiSlice.middleware),
    devTools: true
});

export default store; 