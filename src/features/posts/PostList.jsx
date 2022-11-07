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
      <div className="flex flex-col w-80 bg-red-500 rounded">
        <h1>{post?.title}</h1>
        <span>{post?.body}</span>
        <span>{post?.date}</span>
        <div className="flex ">{emojiList}</div>
      </div>
    </>
  );
}

export default PostList;
