import React from "react";
import { useParams } from "react-router-dom";
import { useGetPostsQuery } from "../posts/postSlice";

function UserPost() {
  const { userid } = useParams();
  const { data } = useGetPostsQuery("getUsers", {
    selectFromResult: ({ data }) => ({
      data: data?.filter((users) => Number(users?.userid) === Number(userid)),
    }),
  });
  console.log(data);
  return (
    <>
      <ul>yakında</ul>
    </>
  );
}

export default UserPost;
