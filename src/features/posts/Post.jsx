import React from "react";
import { useGetPostsQuery } from "./postSlice";
import PostList from "./PostList";

function Post() {
  const { data } = useGetPostsQuery();
  return (
    <>
      {data?.map((post) => {
        return <PostList key={post.id} post={post} />;
      })}
      <div>{JSON.stringify(data)}</div>
    </>
  );
}

export default Post;
