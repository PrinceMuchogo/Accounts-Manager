import { apiSlice } from "./apiSlice";

//const USER_URL = 'http://localhost:5000/api/users';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: 'users/login',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {useLoginMutation} = userApiSlice;
