import React from "react";
import "./MyPosts.scss";
import Post from "./Post/Post";



const MyPosts = (props) => {
  let postsElements = props.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} id={post.id} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
      props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className="postsBlock">
      <h3>My posts</h3>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        value={props.newPostText}
      />
      <button onClick={onAddPost}>Add post</button>

      <div className="posts">{postsElements}</div>
    </div>
  );
};

export default MyPosts;
