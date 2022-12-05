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
      <div className="flex gap-2 flex-col mt-3 justify-center items-center w-80 h-60 bg-purple-700 text-white rounded">
        <h1 className="font-extrabold text-2xl">{post?.title}</h1>
        <div className="flex flex-row">👥 - {data?.name}</div>
        <p>{post?.body.substring(0, 8)}...</p>
        <p>🕑{post?.date.substring(0, 10)}</p>
        <Link
          to={`postdetail/${post.id}`}
          className="underline p-2 font-extrabold"
        >
          View Post
        </Link>
        <EmojiList post={post} />
      </div>
    </>
  );
}

export default PostList;
