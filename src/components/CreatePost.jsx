import React, { useContext, useRef } from "react";
import {PostList} from "../store/postliststore"

const CreatePost = () => {

  const {addPost} = useContext(PostList); // this PostList is the context object we have made in posyliststore

  const userid_element= useRef();
  const title_element= useRef();
  const body_element= useRef();
  const reactions_element= useRef();
  const tags_element= useRef();

  const handleSubmit = (event)=>{
    event.preventDefault();
    const userid = userid_element.current.value;
    const title = title_element.current.value;
    const body = body_element.current.value;
    const reactions = reactions_element.current.value;
    const tags = tags_element.current.value.split(" "); 


    userid_element.current.value="";
    title_element.current.value="";
    body_element.current.value="";
    reactions_element.current.value="";
    tags_element.current.value="";

    addPost(userid , title , body , reactions , tags);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userid" class="form-label">
          USERID
        </label>
        <input type="text" 
        ref={userid_element}
        className="form-control" id="userid" />
      </div>
      <div className="mb-3">
        <label htmlFor="title" class="form-label">
          Title
        </label>
        <input type="text" 
        ref={title_element}
        className="form-control" id="title" />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Caption
        </label>
        <textarea rows="1" type="text" 
        ref={body_element}
        className="form-control" id="body" />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" 
        
        class="form-label">
          REACTIONS
        </label>
        <input
          type="text "
          ref={reactions_element}
          className="form-control"
          id="reactions"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" class="form-label">
          Tags
        </label>
        <input
          type="text "
          ref={tags_element}
          className="form-control"
          id="tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
