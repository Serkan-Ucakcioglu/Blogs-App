
import { apiSlice } from '../api/apiSlice';

const postSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts',
        })
    })
})

export const {useGetPostsQuery} = postSlice