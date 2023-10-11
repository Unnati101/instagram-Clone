import React from 'react'//25:00
import post from './assets/post.png';

function Post() {
  return (
    <div>
        <h3>Username</h3>
        <img src={post}/>
        <h4>Username :caption</h4>
    </div>
  )
}

export default Post