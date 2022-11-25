import { apiSlice } from "../../Api/apiSlice";

const postSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["Post"],
    }),
    addPost: builder.mutation({
      query: (data) => ({
        url: "posts",
        method: "POST",
        body: {
          ...data,
          id: Date.now(),
          date: new Date().toISOString(),
          reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          },
        },
      }),
      invalidatesTags: ["Post"],
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

export const { useGetPostsQuery, useAddPostMutation, useAddReactionMutation } =
  postSlice;
