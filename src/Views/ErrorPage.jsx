import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="mt-5">
      <h1 className="text-2xl font-extrabold text-center text-red-500">
        No such page found
      </h1>
      <Link
        className="flex text-xl text-bold justify-center mt-2 underline"
        to="/"
      >
        Go To HomePage
      </Link>
    </div>
  );
}

export default ErrorPage;
