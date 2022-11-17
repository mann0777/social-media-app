import React from 'react';
import './App.css';
import Post from './Post';

function App() {
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
    <Post username=" the.psychoholic" caption= "this page is great" imageUrl= "images/psychoholic.jpg" />
    <Post username=" desihumor" caption= "greatt" imageUrl= "images/psychoholic.jpg" />
    <Post username=" guglu0777" caption= "dope" imageUrl= "images/psychoholic.jpg" />
    <Post username=" qwert0777" caption= "this page is fun" imageUrl= "images/psychoholic.jpg"/>
    {/* Posts */}

    </div>
  );
}

export default App;
