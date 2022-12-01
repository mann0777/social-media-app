import React from "react";
import { useState } from "react";
import styles from './modal.module.css';
import { Input } from '@mui/material';
import { Button } from '@mui/material';


const Modal=({show, onClose})=>{
    if(!show){
        return null;
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
  
    return(
        <div className={styles.modalWrapper}>
            <div className={styles.modal}>
            <button onClick = {onClose} className={styles.btnClose} >Close </button>
            <Input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            /><br/>
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /> <br/>
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
        </div>
    )
}

export default Modal; 