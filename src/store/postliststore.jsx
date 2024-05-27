import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: (postId) => {

  },
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT);
  const addPost = () => {};
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
  title:"I lOve YOu",
  body:"143 I love u",
  reaction:0,
  userid:"figma",
  tags:["love" , "dhoka"]
},
{
  id:"2",
  title:"I dont know YOu",
  body:"143 I fuck u",
  reaction:1110,
  userid:"sigma",
  tags:["paisa" , "paisaa"]
}
];

export default PostListProvider;
