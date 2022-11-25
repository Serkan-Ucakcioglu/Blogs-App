import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostList from "./PostList";
import { useGetPostsQuery } from "./postSlice";

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetPostsQuery("getUsers", {
    selectFromResult: ({ data }) => ({
      data: data?.filter((users) => Number(users?.id) === Number(id)),
    }),
  });
  return (
    <div className="flex flex-col items-center mt-5">
      {data.map((post) => (
        <PostList post={post} key={post.id} />
      ))}
      <button
        className="mt-5 border border-black rounded p-2"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
}

export default PostDetail;
