import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../Views/Layout";
import NewPostPage from "../Views/NewPostPage";
import PostList from "../Views/PostList";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<PostList />} />
      <Route path="new-post" element={<NewPostPage />} />
    </Route>
  )
);
