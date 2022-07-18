import React from 'react'
import ProfileInfo from '../../components/ProfileInfo'
import MyPostsContainer from '../../components/myposts/MyPostsContainer'

const Profile = (props) => {
    return (
        <>
            <ProfileInfo currentUser={props.currentUser} setCurrentUser={props.setCurrentUser}/>
            <MyPostsContainer />
        </>
    )
}

export default Profile