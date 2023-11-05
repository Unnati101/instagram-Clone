import React, { useEffect, useState } from 'react'
import post from './assets/post.png';
import './Post.css';
import Avatar from "@material-ui/core/Avatar"
import { unsubscribe } from 'diagnostics_channel';
import { db } from './firebase';
import firebase from "firebase/compat/app";

function Post({ postId, user, username, caption, imageUrl }) {
  const [comments, setComments] =useState([]);
  const [comment, setComment]  = useState('');

  useEffect(()=>{
    let unsubscribe;
    if(postId){
    unsubscribe=db
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .orderBy('timestamp', 'desc')
      .onSnapshot((Snapshot)=>{   //snapshot listner for comments
         setComments(Snapshot.docs.map((doc)=>doc.data()));
      });
  }
  return ()=>{
    unsubscribe();
  };
  }, [postId]);

  const postComment=(event)=>{
     event.preventDefault();

     db.collection("posts").doc(postId).collection("comments").add({
      text:  comment,
      username:  user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
     });
     setComment('');

  }

  return (
    <div className="Post">
      <div className="Post_header">
        <Avatar
          className="Post_avatar"
          alt='RafeQazi'
          src="src\assets\avatar.png"
        />

        <h3>{username}</h3>
      </div>
      <img className="Post_img" src={imageUrl} />
      <h4 className="Post_text"><strong>{username}</strong>{caption}</h4>
{
  <div className="post_comments">
    {comments.map((comment)=>(
      <p>
        <strong>{comment.username}</strong>{comment.text}
      </p>
    ))}
  </div>


}

      <form className="post_commentBox">
      <input
      className="post_input"
      type="text"
      placeholder="Add a comment..."
      value={comment}
      onChange={(e)=>setComment(e.target.value)}
      />
      <button
        disabled={!comment}
        className="post_button"
        type="submit"
        onClick={postComment}
        >
          post
        </button>
        </form> 
      {/*Username +caption*/}
    </div>
  )
}

export default Post