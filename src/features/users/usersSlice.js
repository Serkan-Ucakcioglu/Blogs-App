import { apiSlice } from "../../Api/apiSlice";

const usersSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["users"],
    }),
  }),
});

export const { useGetUsersQuery } = usersSlice;
