import React from "react";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "./usersSlice";

function UsersPage() {
  const { data: users, isError, isLoading } = useGetUsersQuery("getUsers");
  const usersContent = users?.map((user, i) => (
    <li className="mb-2 text-xl text-black font-extrabold" key={user?.id}>
      <Link className="underline" to={`/user/${user?.id}`}>
        {i + 1}. {user?.name}
      </Link>
    </li>
  ));

  if (isLoading) return <div>Loading Users List....</div>;
  if (isError) return <div>Errors...</div>;

  return (
    <div className="w-full flex justify-center mt-5">
      <ul className="flex flex-col items-start">{usersContent}</ul>
    </div>
  );
}

export default UsersPage;
