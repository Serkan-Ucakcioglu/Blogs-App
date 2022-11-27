import EmojiList from "../../Emoji/EmojiList";

function PostDetailList({ post, users }) {
  const content = (
    <div
      className="flex flex-col mt-3 justify-center items-center w-80 h-48 bg-gray-500 font-extrabold text-white rounded"
      key={post?.id}
    >
      <h1>{post?.title}</h1>
      <div className="flex flex-row">👥 - {users?.name}</div>
      <span>{post?.body}</span>
      <span>🕑 {post?.date.substring(0, 10)}</span>
      <EmojiList post={post} />
    </div>
  );
  return content;
}

export default PostDetailList;
