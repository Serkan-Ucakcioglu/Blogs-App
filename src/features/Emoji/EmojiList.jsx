import { useAddReactionMutation } from "../posts/postSlice";

const emoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

function EmojiList({ post }) {
  const [addReaction] = useAddReactionMutation();

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
  return <div className="flex">{emojiList}</div>;
}

export default EmojiList;
