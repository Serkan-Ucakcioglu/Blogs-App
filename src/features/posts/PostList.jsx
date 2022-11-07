import React from "react";

const emoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

function PostList({ post }) {
  const emojiList = Object.entries(emoji).map(([key, value]) => {
    return (
      <button className="ml-2">
        {value} {post.reactions[key]}
      </button>
    );
  });
  return (
    <>
      <div className="flex flex-col justify-center items-center w-80 h-48 bg-red-500 font-extrabold text-white rounded">
        <h1>{post?.title}</h1>
        <span>{post?.body}</span>
        <span>🕑 {post?.date}</span>
        <div className="flex ">{emojiList}</div>
      </div>
    </>
  );
}

export default PostList;
