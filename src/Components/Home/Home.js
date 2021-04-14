import React from 'react';
import { useEffect, useState } from 'react';
import Post from '../Post/Post';


const Home = () => {
      const [posts,setPosts]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => setPosts(data))
  },[])
return (
<div>
    <h1>Home js</h1>

    <h1>Total Post {posts.length} </h1>
    {
    posts.map(post=> <Post post={post}></Post> )
    }

</div>
);
};

export default Home;