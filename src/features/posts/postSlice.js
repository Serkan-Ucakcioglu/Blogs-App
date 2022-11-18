import { apiSlice } from "../../api/apiSlice";

const postSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["Post"],
    }),
    addReaction: builder.mutation({
      query: ({ id, reactions }) => ({
        url: `posts/${id}`,
        method: "PATCH",
        body: { reactions },
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useGetPostsQuery, useAddReactionMutation } = postSlice;
