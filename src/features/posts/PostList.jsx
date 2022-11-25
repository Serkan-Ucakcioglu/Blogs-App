import React from "react";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../users/usersSlice";
import { useAddReactionMutation } from "./postSlice";

const emoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

function PostList({ post }) {
  const [addReaction] = useAddReactionMutation();
  const { data } = useGetUsersQuery("getUsers", {
    selectFromResult: ({ data }) => ({
      data: data?.find((user) => user.id === Number(post.userid)),
    }),
  });

  const emojiList = Object.entries(emoji).map(([key, value]) => {
    return (
      <button
        className="ml-2"
        onClick={() => {
          addReaction({
            id: post.id,
            reactions: { ...post.reactions, [key]: post.reactions[key] + 1 },
          });
        }}
      >
        {value} {post.reactions[key]}
      </button>
    );
  });
  return (
    <>
      <Link
        to={`postdetail/${post.id}`}
        className="flex flex-col mt-3 justify-center items-center w-80 h-48 bg-gray-500 font-extrabold text-white rounded"
      >
        <h1>{post?.title}</h1>
        <div className="flex flex-row">👥 - {data?.name}</div>
        <span>{post?.body}</span>
        <span>🕑 {post?.date}</span>
        <div className="flex ">{emojiList}</div>
      </Link>
    </>
  );
}

export default PostList;
