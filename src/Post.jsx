import React from 'react'
import post from './assets/post.png';

import './Post.css';
import Avatar from '@mui/material/Avatar';

function Post({username, caption,imageUrl}) {  
   return (
    <div className="Post">
      <div className="Post_header"> 
      <Avatar
      className="Post_avatar"
      alt='RafeQazi'
      src="/static/images/avatar/1.jpg"
      />
     
      <h3>{username}</h3>
        </div>
        <img className="Post_img"src={imageUrl}/>
        <h4 className="Post_text"><strong>{username}</strong>{caption}</h4>
          {/*Username +caption*/}
    </div>
  )
}

export default Post