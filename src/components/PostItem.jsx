import React from "react";
import MyButton from "./UI/button/MyButton.jsx";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <MyButton className="post__btn" onClick={() => props.remove(props.post)}>
        Delete
      </MyButton>
    </div>
  );
};

export default PostItem;
