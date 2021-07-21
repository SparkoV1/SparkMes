import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";



const MyPosts = (props) => {
  let postsElements = props.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} id={post.id} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
      let action = updateNewPostTextActionCreator(text);
      props.dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        value={props.newPostText}
      />
      <button onClick={addPost}>Add post</button>

      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
