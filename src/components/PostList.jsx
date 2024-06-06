import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/postliststore";
import Welcome from "./Welcome";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList , addInitialPosts} = useContext(PostListData);

  const [fetching , setfetching] = useState(false);

  // useEffect(()=>{
  //   setfetching(true);
    
  //   fetch("https://dummyjson.com/posts")
  //   .then((response) => response.json())
  //   .then(data => {
  //     addInitialPosts(data.posts);
  //     setfetching(false);
  //   });
  // },[])



  return (
    <>
      {fetching && <LoadingSpinner/>}
      {!fetching && postList.length === 0 && <Welcome  />}
      { !fetching && postList.map((post) => (
        <Post key={post.id} post={post}/>
      ))}
    </>
  );
};

export default PostList;
