import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetUsersQuery } from "../../users/usersSlice";
import { useGetPostsQuery } from "../postSlice";
import PostDetailList from "./PostDetailList";

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetPostsQuery("getUsers", {
    selectFromResult: ({ data }) => ({
      data: data?.filter((users) => Number(users?.id) === Number(id)),
    }),
  });
  const userid = Number(data?.map((user) => user.userid));
  const { data: users } = useGetUsersQuery("getUsers", {
    selectFromResult: ({ data }) => ({
      data: data?.find((user) => user.id === userid),
    }),
  });

  return (
    <div className="flex flex-col items-center mt-5">
      {data?.map((post) => (
        <PostDetailList post={post} users={users} />
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
