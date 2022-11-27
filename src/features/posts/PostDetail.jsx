import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmojiList from "../Emoji/EmojiList";
import { useGetUsersQuery } from "../users/usersSlice";
import { useGetPostsQuery } from "./postSlice";

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
        <div
          className="flex flex-col mt-3 justify-center items-center w-80 h-48 bg-gray-500 font-extrabold text-white rounded"
          key={post.id}
        >
          <h1>{post?.title}</h1>
          <div className="flex flex-row">👥 - {users?.name}</div>
          <span>{post?.body}</span>
          <span>🕑 {post?.date.substring(0, 10)}</span>
          <EmojiList post={post} />
        </div>
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
