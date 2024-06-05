import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// After import if u write simole name then it is default import , if u use {} , then it is normal export
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

// here default path is "/" , and when anyone come to "/" , i mean whe there is no url , then go to <App/> component

const router = createBrowserRouter([
  { path: "/", element: <App />, children: [
    { path: "/Home", element: <PostList /> },
    { path: "/create-post", element: <CreatePost /> },
  ],
 },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
