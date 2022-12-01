import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db, auth } from "./firebase";

// import { makeStyles } from '@mui/styles';
//import Modal from '@mui/material/Modal';
import Modal from './Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

/* function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
})); */

const App =()=>{
  //const classes = useStyles();
  //const [modalStyle] = useState(getModalStyle);

  const[posts, setPosts] = useState([]);
  const[open, setOpen] = useState(false);
 

  // use effect runs a piece of code based on specific condition


  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc=>({
        id: doc.id,
        post: doc.data()
      })));
    })
 
  }, []);  
  
  return (
    <div className="app">
    <button
    style={{position: "absolute", zIndex: 1}}
    className = "btn-primary"
    onClick = {()=>setOpen(true)}
    >Sign Up</button>

    <Modal show= {open} onClose = {()=>setOpen(false)}>
    
            
    </Modal>
    
    
    

    <div className='app__header'>
    <img 
      className='app__headerImage'
      src='images/instaName.png'
      alt=''
    />


    </div>
    
    
    <h1> Hello mann</h1>

    {
      posts.map(({id,post})=>(
        <Post key={id} username= {post.username} caption ={post.caption} imageUrl = {post.imageUrl} />
      ))
    }




    </div>
  );
}

export default App;
