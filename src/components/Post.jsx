import React, { useContext, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/postliststore";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);




  return (
    <div className="card cardd" style={{ width: "28rem" }}>
      <div className="card-body carddd">
        <h5 className="card-title">
          {post.title}
          <span
            class="position-absolute top-100 start-100 translate-middle badge rounded-pill bg-danger delete"
            onClick={() => {
              deletePost(post.id);
            }}
          >
            <AiFillDelete />
          </span>
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
           🤍 {post.reactions.likes || post.reactions}
          </span>

        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          
          <span key={tag} class="badge text-bg-primary">{tag}</span>
        ))}

        <center
          style={{ color: "black", margin: " 0px auto", fontWeight: "bold" }}
        >
          Reacted by {post.reactions.likes || post.reactions} people{" "}
        </center>
      </div>
    </div>
  );
};

export default Post;
