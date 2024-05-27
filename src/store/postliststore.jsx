import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {
    
  },
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if(action.type==="Delete"){
    newPostList = currPostList.filter((post) => post.id !== action.payload.postId);
  }
  else if(action.type === "Add"){
    newPostList = [action.payload , ...currPostList]
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT);
  const addPost = (userid , title , body , reactions , tags) => {
    dispatchPostList({
      type:"Add",
      payload:{
        id: Date.now(),
        title:title,
        body:body,
        reaction:reactions,
        userid:userid,
        tags:tags,

      }
    })
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type:"Delete",
      payload:{
        postId,
      },
    })
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT = [{
  id:"1",
  title:"React social app",
  body:"Thanks for seeing my project ,  give it a star ☺️",
  reaction:10,
  userid:"figma",
  tags:["Project" , "React" , "SocialApp"]
},
{
  id:"2",
  title:"Please check other repos as well",
  body:"Also follow me for more awesome Projects",
  reaction:99,
  userid:"sigma",
  tags:["Follow👣" , "Like👍" , "star⭐"]
}
];

export default PostListProvider;
