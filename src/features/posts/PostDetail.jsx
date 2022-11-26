import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetUsersQuery } from "../users/usersSlice";
import { useAddReactionMutation, useGetPostsQuery } from "./postSlice";

const emoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};
function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [addReaction] = useAddReactionMutation();
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
        <div className="flex flex-col mt-3 justify-center items-center w-80 h-48 bg-gray-500 font-extrabold text-white rounded">
          <h1>{post?.title}</h1>
          <div className="flex flex-row">👥 - {users?.name}</div>
          <span>{post?.body}</span>
          <span>🕑 {post?.date.substring(0, 10)}</span>
          <div className="flex ">
            {Object.entries(emoji).map(([key, value]) => {
              return (
                <button
                  className="ml-2"
                  onClick={() => {
                    addReaction({
                      id: post.id,
                      reactions: {
                        ...post.reactions,
                        [key]: post.reactions[key] + 1,
                      },
                    });
                  }}
                >
                  {value} {post.reactions[key]}
                </button>
              );
            })}
          </div>
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
