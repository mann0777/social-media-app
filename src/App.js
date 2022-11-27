import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db, auth } from "./firebase";

function App() {
  const[posts, setPosts] = useState([
    
  ]);

  // use effect runs a piece of code based on specific condition

  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc=>doc.data()));
    })
 
  }, []);  
  
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
