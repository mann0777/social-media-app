import React from 'react'
import  './Post.css';
import Avatar from '@mui/material/Avatar';


function Post({username, caption, imageUrl}) {
  return (
    <div className='post'>
    <div className='post__header'>
    <Avatar
    className='post__avatar'
    alt='mannsharma'
    src='images/avatar/1.jpg'
    />
    <h3>{username}</h3>

    </div>


    
        {/*header -> avatar -> username */}

        <img alt='' className='post__Image' src={imageUrl} />

        {/* image */}

        <h4 className='post__text'><strong>{username}</strong> {caption}</h4>

        {/* username -> */}
    </div>
  )
}

export default Post;