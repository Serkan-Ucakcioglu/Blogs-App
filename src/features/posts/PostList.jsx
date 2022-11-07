import React from "react";

const emoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

function PostList({ post }) {
  const emojiList = Object.entries(emoji).map(([name, emoji]) => {
    return (
      <button className="ml-2">
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return (
    <>
      <div className="flex flex-col">
        <h1>{post?.title}</h1>
        <span>{post?.body}</span>
        <span>{post?.date}</span>
        <div className="flex ">{emojiList}</div>
      </div>
    </>
  );
}

export default PostList;
