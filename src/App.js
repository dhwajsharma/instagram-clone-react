import { Button } from '@material-ui/core';
import { makeStyles, Modal } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import Post from './components/Post/Post';
import { db } from "./firebase";


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
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
  const [modalStyle] = useState(getModalStyle());
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })))
    })
  }, [])

  return (
    <div className="app">

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <h1>Modal</h1>
        </div>
      </Modal>

      <div className="app__header">
        <img className="app__headerImage" src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png" alt="logo" />
      </div>

      <Button className="app__signUpButton" onClick={() => setOpen(true)}>Sign Up</Button>

      {
        posts.map(({ post, id }) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
    </div>
  );
}

export default App;
