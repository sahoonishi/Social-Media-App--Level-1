import React from "react";

const Welcome = ({onGetPostsClick}) => {
  return (
    <center>
      <h1>No post here....</h1>
      <button onClick={onGetPostsClick} className="btn btn-primary"> Get Posts</button>
    </center>
  );
};

export default Welcome;
