import React from "react";
import { Link } from "react-router-dom";
import EmojiList from "../Emoji/EmojiList";
import { useGetUsersQuery } from "../users/usersSlice";

function PostList({ post }) {
  const { data } = useGetUsersQuery("getUsers", {
    selectFromResult: ({ data }) => ({
      data: data?.find((user) => user.id === Number(post.userid)),
    }),
  });

  return (
    <>
      <div className="flex flex-col mt-3 justify-center items-center w-80 h-48 bg-gray-500 font-extrabold text-white rounded">
        <h1>{post?.title}</h1>
        <div className="flex flex-row">👥 - {data?.name}</div>
        <span>{post?.body.substring(0, 8)}...</span>
        <span>🕑 {post?.date.substring(0, 10)}</span>
        <Link to={`postdetail/${post.id}`} className="underline p-2">
          View Post
        </Link>
        <EmojiList post={post} />
      </div>
    </>
  );
}

export default PostList;
