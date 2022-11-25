import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetPostsQuery } from "../posts/postSlice";
import { useGetUsersQuery } from "./usersSlice";

function UserPost() {
  const { userid } = useParams();
  const navigate = useNavigate();
  const { data: posts } = useGetPostsQuery("getUsers", {
    selectFromResult: ({ data }) => ({
      data: data?.filter((users) => Number(users?.userid) === Number(userid)),
    }),
  });
  const { data: users } = useGetUsersQuery("getUsers", {
    selectFromResult: ({ data }) => ({
      data: data?.find((user) => user.id === Number(userid)),
    }),
  });

  const postList = posts?.map((user, i) => {
    return (
      <li>
        <Link
          to={`/postdetail/${user.id}`}
          className="underline text-xl font-medium"
        >
          {i + 1}. {user.title}
        </Link>
      </li>
    );
  });
  return (
    <div className="flex flex-col items-center mt-5">
      <h1 className="text-black text-2xl font-extrabold">
        {users?.name} Post List
      </h1>
      <ul className="mt-3 flex flex-col">
        {postList}{" "}
        {!posts?.length && (
          <>
            <div className="text-xl">No Post!</div>
            <button
              className="mt-5 border border-black rounded"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </>
        )}
      </ul>
    </div>
  );
}

export default UserPost;
