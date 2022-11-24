import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetPostsQuery } from "../posts/postSlice";
import { useGetUsersQuery } from "./usersSlice";

function UserPost() {
  const { userid } = useParams();
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
        <Link className="underline text-xl font-medium">
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
        {postList} {!posts.length && <div className="text-xl">No Post!</div>}
      </ul>
    </div>
  );
}

export default UserPost;
