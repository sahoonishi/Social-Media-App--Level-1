import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts:()=>{},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "Delete") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "Add") {
    newPostList = [action.payload, ...currPostList];
  }

  else if (action.type === "Addinitial") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userid, title, body, reactions, tags) => {
    dispatchPostList({
      type: "Add",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        userid: userid,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "Addinitial",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "Delete",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, addInitialPosts , deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
