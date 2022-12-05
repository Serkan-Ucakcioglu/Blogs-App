import EmojiList from "../../Emoji/EmojiList";

function PostDetailList({ post, users }) {
  const content = (
    <div
      className="flex flex-col mt-3 p-2 gap-2 justify-center items-center w-80 h-48 bg-purple-700 text-white rounded"
      key={post?.id}
    >
      <h1 className="font-extrabold text-2xl">{post?.title}</h1>
      <div className="flex flex-row">👥 - {users?.name}</div>
      <p>{post?.body}</p>
      <p>🕑 {post?.date.substring(0, 10)}</p>
      <EmojiList post={post} />
    </div>
  );
  return content;
}

export default PostDetailList;
