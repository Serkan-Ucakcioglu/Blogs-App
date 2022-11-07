import React from "react";
import { useGetPostsQuery } from "./postSlice";
import PostList from "./PostList";

function Post() {
  const { data } = useGetPostsQuery();
  const content = data?.map((post) => {
    return <PostList key={post.id} post={post} />;
  });
  return <div className="flex flex-col items-center mt-5">{content}</div>;
}

export default Post;
