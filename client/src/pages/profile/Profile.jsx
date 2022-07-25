import React from "react";
import ProfileInfo from "../../components/ProfileInfo";
import MyPostsContainer from "../../components/myposts/MyPostsContainer";

const Profile = (props) => {
  return (
    <>
      <ProfileInfo
        currentUser={props.currentUser}
        follow={props.follow}
        unfollow={props.unfollow}
        followingInProgress={props.followingInProgress}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </>
  );
};

export default Profile;
