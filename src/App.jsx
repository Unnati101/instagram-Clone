import { useState, useEffect } from 'react';
import logo from './assets/pngegg.png';//25:00
import './App.css'
import Post from './Post.jsx';
import { db } from './firebase.js';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';



function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate{-${top}%, -${left}%}`,

  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  // {]
  //   username:"unnati",
  //   caption: "I'am making an instagram clone",
  //   imageUrl: "https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280"
  // },
  // {
  //   username: "qazi",
  //   caption: "I'am making an instagram clone",
  //   imageUrl: "https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280"
  // }



  //useEffect-> runs a piece of code based on a specific condition

  useEffect(() => {
    //this is where the code runs
    db.collection('posts').onSnapshot(snapshot => {
      //every time a new post is added +, this code fires...
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })))
    })
  }, []);



  return (
    <div className="App">
      <Modal
        open={open}
        onClose={() => setOpen(false)}

      >
        <div style={modalStyle} className={classes.paper}>
          <h2>I am a modal</h2>
        </div>

      </Modal>

      <div className="App-header">
        <img
          className="app-headerlogo"
          src={logo}
        />
      </div>
      <h1>Hello let`s build a Instagram clone</h1>
      {
        posts.map(({ id, post }) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
    </div>
  );
}

export default App
