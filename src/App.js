import { useEffect, useState } from 'react';
import './App.css';
import Post from './components/Post/Post';
import { db } from "./firebase"

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png" alt="logo" />
      </div>

      {
        posts.map((post, index) => (
          <Post key={index} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

    </div>
  );
}

export default App;
