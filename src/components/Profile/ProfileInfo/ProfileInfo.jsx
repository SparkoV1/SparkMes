import React from "react";
import "./ProfileInfo.scss";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <>
            <div>
                <img
                    src="https://t4.ftcdn.net/jpg/03/14/28/43/360_F_314284363_5BOhmmlrpeTUVtNCw7xbKaUjChtaarBV.jpg"
                    alt=""
                />
            </div>
            <div className="descriptionBlock">
                <img src={props.profile.photos.large} alt='#'/>
                <h2>{props.profile.fullName}</h2>
                <p>{props.profile.aboutMe}</p>
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>
        </>
    );
};

export default ProfileInfo;
