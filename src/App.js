import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const[posts, setPosts] = useState([
    {
      username: " the.psychoholic",
      caption: "this page is great",
      imageUrl: "images/psychoholic.jpg"
    },
    {
      username: " the.psychoholic",
      caption: "this page is great",
      imageUrl: "images/psychoholic.jpg"
    }
  ]);
  
  return (
    <div className="app">
    

    <div className='app__header'>
    <img 
      className='app__headerImage'
      src='images/instaName.png'
      alt=''
    />


    </div>
    
    <h1> Hello mann</h1>

    {
      posts.map(post=>(
        <Post username= {post.username} caption ={post.caption} imageUrl = {post.imageUrl} />
      ))
    }




    </div>
  );
}

export default App;
