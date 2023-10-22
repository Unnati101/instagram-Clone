import logo from './assets/pngegg.png';//25:00
import './App.css'
import React, {useState} from 'react';
import Post from './Post.jsx';
//import post2 from './assets/post2.png';
import {db} from './firebase';

function App() {
  const[posts,setPosts]=useState([
    // {
    //   username:"unnati",
    //   caption: "I'am making an instagram clone",
    //   imageUrl: "https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280"
    // },
    // {
    //   username: "qazi",
    //   caption: "I'am making an instagram clone",
    //   imageUrl: "https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280"
    // }
    
  ]);

  //useEffect-> runs a piece of code based on a specific condition

  useEffect(()=>{
    //this is where the code runs
  db.collection('posts').onSnapshot(snapshot=>{
    //every time a new post is added +, this code fires...
    setPosts(snapshot.docs.map(doc=> doc.data()));
  })
  }, []);
  return (
    
      <div className="App">
        
        <div className="App-header">
          <img
            className="app-headerlogo"
            src={logo}
            />
        </div>
        <h1>Hello let's build a Instagram clone</h1>
       {
        posts.map(post=>(
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
       }
        </div> 
      );
  }
       
export default App
