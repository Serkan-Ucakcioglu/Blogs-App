import React from 'react'
import { useGetPostsQuery } from "./postSlice"

function Post() {

    const { data } = useGetPostsQuery()
    console.log(data, 'data')
    return (
        <div>
            s
        </div>
    )
}

export default Post
