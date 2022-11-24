import React from "react";
import { useGetUsersQuery } from "./usersSlice";

function UsersPage() {
  const { data: users, isError, isLoading } = useGetUsersQuery();

  if (isLoading) return <div>Loading Users List....</div>;
  if (isError) return <div>Errors...</div>;

  return (
    <div className="w-full flex justify-center mt-5">
      <ul>
        {users?.map((user, i) => (
          <li className="mb-2 text-xl text-black font-extrabold">
            {i + 1}. {user?.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;
