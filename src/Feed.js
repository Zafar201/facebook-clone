import React from 'react'
import StoryReel from './StoryReel'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>
            <Post
                    // key={post.id}
                    profilePic='https://avatars3.githubusercontent.com/u/68781759?s=60&v=4'
                    message='wowww'
                    timestamp='timetsamopp'
                    username='zafar irshad'
                    image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
                />
        </div>
    )
}

export default Feed
