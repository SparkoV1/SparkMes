import React from "react";
import MyPosts from "./MyPosts/MyPosts";
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
      <MyPosts />
    </div>
  );
};

export default Profile;
