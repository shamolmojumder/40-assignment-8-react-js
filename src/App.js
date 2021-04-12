import { useEffect, useState } from 'react';
import './App.css';
import Post from './Components/Post/Post';

function App() {
  const [posts,setPosts]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => setPosts(data))
  },[])
  return (
    <div className="App">
     <h1>Total Post {posts.length} </h1>
     {
      posts.map(post=> <Post post={post}></Post> )
    }    
    </div>
  );
}

export default App;
