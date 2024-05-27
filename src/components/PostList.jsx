import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/postliststore";
import Welcome from "./Welcome";

const PostList = () => {
  const { postList , addInitialPosts} = useContext(PostListData);

  const handlleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
    .then((response) => response.json())
    .then(data => {
      addInitialPosts(data.posts);
    });
  };

  return (
    <>
      {postList.length === 0 && <Welcome onGetPostsClick={handlleGetPostsClick} />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
