import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../Views/Layout";
import PostList from "../features/posts/PostList";
import Post from "../features/posts/Post";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Post />} />
      <Route path="post-list" element={<PostList />} />
    </Route>
  )
);
