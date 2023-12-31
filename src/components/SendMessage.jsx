import React, { useState } from 'react'
import { db, auth } from '../config/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
// import firebase from 'firebase'
// import { Input, Button } from '@material-ui/core'

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')


    async function sendMessage(e) {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;
    
        try {
          await addDoc(collection(db, 'messages'), {
            text: msg,
            photoURL,
            uid,
            createdAt: serverTimestamp(),
          });
    
          setMsg('');
          scroll.current.scrollIntoView({ behavior: 'smooth' });
        } catch (error) {
          console.error('Error adding document: ', error);
        }
      }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)}  />
                    <button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} type="submit" >Send</button>
                    
                </div>
            </form>
        </div>
    )
}

export default SendMessage
