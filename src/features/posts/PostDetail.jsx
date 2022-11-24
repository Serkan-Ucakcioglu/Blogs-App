import React from "react";
import { useParams } from "react-router-dom";
import PostList from "./PostList";
import { useGetPostsQuery } from "./postSlice";

function PostDetail() {
  const { id } = useParams();
  const { data } = useGetPostsQuery("getUsers", {
    selectFromResult: ({ data }) => ({
      data: data?.filter((users) => Number(users?.id) === Number(id)),
    }),
  });
  return (
    <div className="flex flex-col items-center mt-5">
      {data.map((post) => (
        <PostList post={post} />
      ))}
    </div>
  );
}

export default PostDetail;
