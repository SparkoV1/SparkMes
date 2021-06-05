import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <>
            <div>
                <img
                    src="https://t4.ftcdn.net/jpg/03/14/28/43/360_F_314284363_5BOhmmlrpeTUVtNCw7xbKaUjChtaarBV.jpg"
                    alt=""
                />
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </>
    );
};

export default ProfileInfo;
