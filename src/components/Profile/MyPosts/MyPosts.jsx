import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements =
        props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>)

    let addPostElement = React.createRef()

    let addPost = () =>{
        let text = addPostElement.current.value
        alert(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <textarea ref={addPostElement}></textarea>
            <button onClick={addPost}>Add post
            </button>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
