import React from "react";
import { useGetPostsQuery } from "./postSlice";

function Post() {
  const { data } = useGetPostsQuery();
  console.log(data, "data");
  return (
    <>
      {data?.map((ser) => {
        return <div>{JSON.stringify(ser)}</div>;
      })}
    </>
  );
}

export default Post;
