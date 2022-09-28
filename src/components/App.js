import Form from './Form'
import './App.css';
import { useState } from 'react';

function App() {

  const INITIAL_POSTS = [{title: 'this is a title', body: 'this is the body'}];

  const [posts, setPosts] = useState(INITIAL_POSTS);

  const addPost = (newPost) => {
    setPosts([...posts, newPost])
  };

  return (
    <div className="App">
      <Form addPost={addPost}/>
    </div>
  );
}

export default App;
