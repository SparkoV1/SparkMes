import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://t4.ftcdn.net/jpg/03/14/28/43/360_F_314284363_5BOhmmlrpeTUVtNCw7xbKaUjChtaarBV.jpg"
          alt=""
        />
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New Post</div>
      </div>
      <div className={s.posts}>
        <div className={s.item}>post1</div>
        <div className={s.item}>post2</div>
      </div>
    </div>
  );
};

export default Profile;
