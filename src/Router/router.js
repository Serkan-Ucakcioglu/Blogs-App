import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../Views/Layout";
import NewPostPage from "../Views/Post/NewPostPage";
import PostDetailPage from "../Views/Post/PostDetailPage";
import PostList from "../Views/Post/PostList";
import UserPage from "../Views/User/UserPage";
import UserPostList from "../Views/User/UserPostList";
import ErrorPage from "../Views/ErrorPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<PostList />} />
      <Route path="new-post" element={<NewPostPage />} />
      <Route path="users" element={<UserPage />} />
      <Route path="postdetail/:id" element={<PostDetailPage />} />
      <Route path="user/:userid" element={<UserPostList />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
