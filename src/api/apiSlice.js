import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuerys = fetchBaseQuery({
  baseUrl: "http://localhost:3500",
});

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: baseQuerys,
  tagTypes: ["Post", "users"],
  endpoints: () => ({}),
});
