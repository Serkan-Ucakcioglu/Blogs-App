import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ErrorPage from "../Views/ErrorPage";
import Layout from "../Views/Layout";
import NewPostPage from "../Views/NewPostPage";
import PostList from "../Views/PostList";
import UserPage from "../Views/UserPage";
import UserPostList from "../Views/UserPostList";
import PostDetailPage from "../Views/PostDetailPage";

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
