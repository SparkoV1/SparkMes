import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements =
        props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>);

    let newPostElement = React.createRef();

    let addPost = () =>{
        let text = newPostElement.current.value;

        props.addPost(text);
        newPostElement.current.value='';
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}>Add post
            </button>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
